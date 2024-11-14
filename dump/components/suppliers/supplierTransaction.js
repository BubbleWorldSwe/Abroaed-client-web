import React, { useContext, useEffect, useState } from 'react';
import { Grid, Button, FormControl, InputLabel, Select, MenuItem, Box, Link } from '@mui/material';
import { useLocation } from 'react-router-dom';
import SupplierService from '../../services/purchase/supplierService';
import { UserContext } from '../../contexts/userContext';
import { toast } from 'react-toastify';
import PaperCard from '../common/PaperCard';
import PaperWrapper from '../paperWrapper/paperWrapper';
import ArrowHeader from '../common/ArrowHeader';
import TransactionTable from '../common/TransactionTable';
import PaymentModal from '../common/PaymentModal';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CommonDatePicker from '../common/CommonDatePicker';
import moment from 'moment';
import { generatePDF } from '../common/generatePdf';
import { formatDate, formatDateToISO, formatTodayDate, formatTransactionDescription } from '../../utils/commonUtils';
import { PAYMENT_MODES } from '../../constants/appConstants';

const SupplierTransaction = () => {
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const supplierId = location.state.supplierId;
  const [supplierData, setSupplierData] = useState(null);
  const [clearDuesModalOpen, setClearDuesModalOpen] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(0);
  const user = useContext(UserContext);
  const supplierService = new SupplierService(user);
  const [data, setData] = useState([]);
  const [reversedData, setReversedData] = useState([]);
  const [tableViewData, setTableViewData] = useState([]);
  const [transactions, setTransactions] = useState({
    transactionDate: formatTodayDate(),
    amount: '0',
    paymentMode: 'CASH',
    txnId: '',
    currentBalance: 0
  });
  const [transactionsUpdata, setTransactionsUpdata] = useState({});
  const [showFromBegining, setShowFromBegining] = useState(false);
  const [onDate, setOnDate] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [filterType, setFilterType] = useState('byDate');
  const [filterApplied, setFilterApplied] = useState(false);

  const reverseOrder = () => {
    setTableViewData(!showFromBegining ? reversedData : data);
    setShowFromBegining((prev) => !prev);
    setFromDate(null);
    setToDate(null);
    setOnDate(null);
    setFilterApplied(false);
  };

  const fetchData = async () => {
    try {
      let suppliersData = await supplierService.getSupplierById(supplierId);
      setSupplierData(suppliersData);
      setCurrentBalance(suppliersData.balance);
      let result = await supplierService.getSupplierTransaction(supplierId);
      setData(result);
      setTableViewData(result);
      let balance = 0,
        reveresdArray = [...result].reverse();
      reveresdArray.forEach((element) => {
        balance += element.amount;
        element.balance = balance;
      });
      setReversedData(reveresdArray);
    } catch (error) {
      throw error?.message;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilterType(value);
    if (value === 'byDateRange') {
      setOnDate(null);
    } else {
      setFromDate(null);
      setToDate(null);
    }
  };

  const handleReset = () => {
    setFromDate(null);
    setToDate(null);
    setOnDate(null);
    setFilterType('byDate');
    setTableViewData(data);
    setCurrentBalance(supplierData.balance);
    setShowFromBegining(false);
    setFilterApplied(false);
  };

  const handleApplyFilter = () => {
    if (filterType === 'byDate' && onDate) {
      const filteredData = reversedData?.filter((transaction) => {
        const transactionDate = transaction.transactionDate;
        return moment(transactionDate).isSame(moment(onDate), 'day');
      });
      setCurrentBalance(filteredData.reduce((total, item) => total + item.amount, 0));
      setTableViewData(filteredData);
      setFilterApplied(true);
    } else if (filterType === 'byDateRange' && fromDate && toDate) {
      const filteredData = reversedData?.filter((transaction) => {
        const transactionDate = transaction.transactionDate;
        return moment(transactionDate)
          .startOf('day')
          .isBetween(moment(fromDate).startOf('day'), moment(toDate).startOf('day'), null, '[]');
      });
      setCurrentBalance(filteredData.reduce((total, item) => total + item.amount, 0));
      setTableViewData(filteredData);
      setFilterApplied(true);
    }
  };

  const handleClearDuesModalOpen = () => {
    setClearDuesModalOpen(true);
  };

  const handleClearDuesModalClose = () => {
    setClearDuesModalOpen(false);
  };

  const handleTransaction = (event) => {
    let { name, value } = event.target;
    value = name === 'amount' && !value ? '' : value
    setTransactions((prev) => ({ ...prev, [name]: value }));
  };
  const handleEditTransactions = (event) => {
    let { name, value } = event.target;
    value = name === 'amount' && !value ? '' : value
    setTransactionsUpdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearDues = async () => {
    const clearDueData = {
      transactionDate: formatDateToISO(transactions.transactionDate),
      amount: transactions.amount || 0,
      paymentMode: transactions.paymentMode,
      txnId: transactions.txnId
    };
    try {
      setIsSubmitting(true);
      const response = await supplierService.clearDues(clearDueData, supplierData._id);
      fetchData();
      setCurrentBalance(response?.data?.balance);
      toast.success('Dues cleared successfully!');
    } catch (err) {
      toast.error(err.message ?? "Couldn't clear dues");
    } finally {
      setIsSubmitting(false);
      setTransactions((prev) => ({ ...prev, paymentMode: 'CASH', txnId: '', amount: '0', currentBalance }));
      setClearDuesModalOpen(false);
    }
  };
  const handleDownload = () => {
    const tableHead = ['Date', 'Description', 'Debit', 'Credit'];
    const tableBody = [...tableViewData].map((transaction) => {
      const { transactionDate, amount } = transaction;
      const row = [
        formatDate(transactionDate),
        formatTransactionDescription(transaction),
        amount >= 0 ? Math.abs(amount) : '_',
        amount < 0 ? Math.abs(amount) : '_'
      ];
      return row;
    });

    const filterDate = {
      onDate: onDate ? formatDate(onDate) : null,
      fromDate: fromDate ? formatDate(fromDate) : null,
      toDate: toDate ? formatDate(toDate) : null
    };

    const upperBoxContent = [
      { label: 'Party', value: supplierData?.name || '-' },
      {
        label: 'Date',
        value:
          filterDate.onDate ||
          (filterDate.fromDate && filterDate.toDate ? `${filterDate.fromDate} To ${filterDate.toDate}` : 'Till Date')
      },
      { label: 'Contact', value: supplierData?.contact || '-' },
      { label: 'Balance', value: `Rs. ${currentBalance || '0'}` },
      { label: 'Type', value: 'Supplier' }
    ];
    const lowerBoxContent = [
      { label: 'Prepared By ', value: user?.currentFactory?.name },
      {
        label: 'Date',
        value:
          filterDate.onDate ||
          (filterDate.fromDate && filterDate.toDate ? `${filterDate.fromDate} To ${filterDate.toDate}` : 'Till Date')
      },
      { label: '', value: '' },
      { label: 'Balance', value: `Rs. ${currentBalance || '0'}` }
    ];
    generatePDF({
      header: 'Ledger',
      upperBoxContent,
      lowerBoxContent,
      tableHead,
      tableBody,
      fileName: 'ledger'
    });
  };
  const [baseAmount, setBaseAmount] = useState(0);
  const handleEditTransaction = (rowData) => {
    setTransactionsUpdata({
      transactionDate: rowData.transactionDate,
      amount: Math.abs(rowData?.amount),
      paymentMode: rowData?.paymentMode,
      txnId: rowData?.txnId,
      id: rowData?._id
    });
    setBaseAmount(Math.abs(rowData?.amount));
  };

  const handleDelete = async (transactionId, setIsModalOpen, setModalType) => {
    try {
      setIsSubmitting(true);
      const response = await supplierService.deleteSupplierTransaction(supplierData?._id, transactionId);
      setIsModalOpen(false);
      setModalType('');
      fetchData();
      toast.success('Removed Transaction Successfully!');
    } catch (err) {
      toast.error(err.message ?? 'Error while deleting transaction');
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleUpdateTransactions = async (setIsModalOpen, setModalType) => {
    try {
      setIsSubmitting(true);
      const updatedTransactionData = {
        transactionDate: formatDateToISO(transactionsUpdata.transactionDate),
        amount: transactionsUpdata.amount || 0,
        paymentMode: transactionsUpdata.paymentMode,
        txnId:
          transactionsUpdata.paymentMode === PAYMENT_MODES.CASH || transactionsUpdata.paymentMode === PAYMENT_MODES.UPI
            ? ''
            : transactionsUpdata.txnId
      };
      if (updatedTransactionData.amount <= 0) {
        toast.error('Amount should not be zero');
        return;
      }
      await supplierService.updateSupplierTransaction(
        updatedTransactionData,
        supplierData?._id,
        transactionsUpdata?.id
      );
      setIsModalOpen(false);
      setModalType('');
      fetchData();
      toast.success(' Transactions Updated Successfully!');
    } catch (err) {
      toast.error(err.message ?? 'Error while updating transaction');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PaperWrapper md={12} lg={12} sm={12}>
      <ArrowHeader title={'Supplier Ledger'} download handleDownload={handleDownload} />
      {supplierData && (
        <Grid container spacing={3} alignItems="center" marginTop={2}>
          <Grid item xs={4}>
            <PaperCard text={'Name'} value={supplierData.name} />
          </Grid>
          <Grid item xs={4}>
            <PaperCard text={'Contact'} value={supplierData.contact ? supplierData.contact : '_'} />
          </Grid>
          <Grid item xs={4}>
            <PaperCard text={currentBalance < 0 ? 'Balance (Adv)' : 'Balance'} value={currentBalance} isRupee={true} />
          </Grid>
        </Grid>
      )}
      <Grid container justifyContent={'space-between'} alignItems="center" mt={1} mb={2}>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" onClick={handleClearDuesModalOpen}>
            Make Payment
          </Button>
        </Grid>
        <Grid item xs={3} display={'flex'} justifyContent={'flex-end'} pr={4}>
          <Button variant={showFromBegining ? 'outlined' : 'contained'} color="primary" onClick={reverseOrder}>
            {showFromBegining ? 'Show Latest' : 'Show from Beginning'}
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} display="flex" gap={2} justifyContent={'flex-start'} alignItems={'center'} mt={3} mb={2}>
        <FormControl variant="outlined" size="small">
          <InputLabel id="filter-type-label">Filter By</InputLabel>
          <Select labelId="filter-type-label" value={filterType} onChange={handleFilterChange} label="Filter By">
            <MenuItem value="byDate">By Date</MenuItem>
            <MenuItem value="byDateRange">By Date Range</MenuItem>
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {filterType === 'byDate' && (
            <CommonDatePicker
              label="Select Date"
              value={onDate}
              onChange={(e) => {
                setOnDate(new Date(e));
              }}
              maxDate={new Date()}
            />
          )}
          {filterType === 'byDateRange' && (
            <Box display="flex" gap={2}>
              <CommonDatePicker
                label="From Date"
                value={fromDate}
                onChange={(e) => {
                  setFromDate(new Date(e));
                }}
                maxDate={new Date()}
              />
              <CommonDatePicker
                label="To Date"
                value={toDate}
                onChange={(e) => {
                  setToDate(new Date(e));
                }}
                maxDate={new Date()}
                minDate={fromDate}
              />
            </Box>
          )}
          <Button
            variant="contained"
            sx={{ backgroundColor: filterApplied ? '#008000' : '' }}
            onClick={handleApplyFilter}
          >
            Apply Filter
          </Button>
          <Link onClick={handleReset} sx={{ cursor: 'pointer' }}>
            Remove Filter
          </Link>
        </LocalizationProvider>
      </Grid>
      <TransactionTable
        transactionData={tableViewData}
        showFromBegining={showFromBegining}
        currentBalance={currentBalance}
        transactions={transactionsUpdata}
        handleTransaction={handleEditTransactions}
        handleUpdateTransactions={handleUpdateTransactions}
        handleEditTransaction={handleEditTransaction}
        handleDelete={handleDelete}
        baseAmount={baseAmount}
        isSubmitting={isSubmitting}
        openingDate={supplierData?.createdAt}
      />
      <PaymentModal
        open={clearDuesModalOpen}
        onClose={handleClearDuesModalClose}
        currentBalance={currentBalance}
        transactions={transactions}
        handleTransaction={handleTransaction}
        handleClearDues={handleClearDues}
        isSubmitting={isSubmitting}
        openingDate={supplierData?.createdAt}
      />
    </PaperWrapper>
  );
};

export default SupplierTransaction;
