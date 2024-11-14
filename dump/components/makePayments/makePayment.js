import React, { useContext, useEffect, useState } from 'react';
import PaperWrapper from '../paperWrapper/paperWrapper';
import { Box, Button, Typography } from '@mui/material';
import { UserContext } from '../../contexts/userContext';
import SupplierService from '../../services/purchase/supplierService';
import { toast } from 'react-toastify';
import CommonTable from '../common/CommonTable';
import PaymentModal from '../common/PaymentModal';
import ActionsMenu from '../common/ActionsMenu';
import { useNavigate } from 'react-router-dom';
import TabSwitcher from '../common/TabSwitch';
import { formatAmount, formatDateToISO, formatTodayDate } from '../../utils/commonUtils';
import { StyleStackBetween } from '../common/StyledComponent';
import { Download } from '@mui/icons-material';
import { generatePDF } from '../common/generatePdf';

function MakePayments() {
  const [suppliersData, setSuppliersData] = useState([]);
  const [laboursData, setLaboursData] = useState([]);
  const [activeTab, setActiveTab] = useState('suppliers');
  const user = useContext(UserContext);
  const supplierService = new SupplierService(user);
  const [clearDuesModalOpen, setClearDuesModalOpen] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [stakeholder, setStakeholder] = useState({});
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [transactions, setTransactions] = useState({
    transactionDate: formatTodayDate(),
    amount: '0',
    paymentMode: 'CASH',
    txnId: '',
    currentBalance: 0
  });

  const getSuppliers = async () => {
    try {
      const supplier = await supplierService.getSuppliers();
      setSuppliersData(supplier);
    } catch (error) {
      toast.error(error?.message);
    }
  };

  useEffect(() => {
    if (activeTab === 'suppliers') {
      getSuppliers();
    }
  }, [activeTab]);

  const handleActionSelected = (action, row) => {
    switch (action) {
      case 'makePayment':
        setStakeholder(row);
        setClearDuesModalOpen(true);
        setCurrentBalance(row.balance);
        break;
      case 'supplierTransactions':
        navigate(`/supplierTransactions`, {
          state: {
            supplierId: row?._id
          }
        });
        break;
    }
  };

  const Suppliercolumns = [
    {
      field: 'name',
      headerName: 'Name',
      type: 'string'
    },
    {
      field: 'contact',
      headerName: 'Contact',
      type: 'number'
    },
    {
      field: 'balance',
      headerName: 'Balance ',
      renderCell: (row) => (row.balance < 0 ? `${formatAmount(row.balance)} (Adv)` : formatAmount(row.balance)),
      type: 'currency'
    },

    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      renderCell: (row) => {
        const actionItems = [];
        actionItems.push({ label: 'Ledger', action: () => handleActionSelected('supplierTransactions', row) });
        if (row.balance !== 0) {
          actionItems.push({ label: 'Make Payment', action: () => handleActionSelected('makePayment', row) });
        }
        return <ActionsMenu actionItems={actionItems} />;
      }
    }
  ];

  const handleClearDuesModalClose = () => {
    setClearDuesModalOpen(false);
  };
  const handleTransaction = (event) => {
    let { name, value } = event.target;
    value = name === 'amount' && !value ? '' : value;
    setTransactions((prev) => ({ ...prev, [name]: value }));
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
      if (activeTab === 'suppliers') {
        await supplierService.clearDues(clearDueData, stakeholder._id);
        getSuppliers();
      }
      toast.success('Dues cleared successfully!');
    } catch (err) {
      toast.error(err.message ?? "Couldn't clear dues");
    } finally {
      setIsSubmitting(false);
      setTransactions((prev) => ({ ...prev, paymentMode: 'CASH', txnId: '', amount: '0' }));
      setClearDuesModalOpen(false);
    }
  };
  const tabs = [
    {
      label: 'Suppliers',
      value: 'suppliers',
      backgroundColor: '#43436e',
      hoverColor: '#1f1f1f',
      condition: true
    },
    {
      label: 'Labours',
      value: 'labours',
      backgroundColor: '#1e911e',
      hoverColor: '#1f1f1f',
      condition: true
    }
  ];
  const handleDownload = () => {
    const tableHead = ['Name', 'Contact', 'Opening Balance', 'Balance', 'Status'];
    const tableBody = [...(activeTab === 'labours' ? laboursData : suppliersData)]?.map(
      ({ name, balance, contact, openingBalance, isActive }) => [
        name,
        contact ? contact : '_',
        openingBalance < 0 ? `Rs. ${openingBalance} (Adv)` : `Rs. ${openingBalance}`,
        balance < 0 ? `Rs. ${balance} (Adv)` : `Rs. ${balance}`,
        isActive ? 'Active' : 'Inactive'
      ]
    );
    const lowerBoxContent = [
      { label: 'Prepared By', value: user?.currentFactory?.name || '-' },
      { label: 'Date', value: 'Till Date' }
    ];
    generatePDF({
      header: activeTab === 'labours' ? 'Labours' : 'Suppliers',
      lowerBoxContent,
      tableHead,
      tableBody,
      fileName: activeTab === 'labours' ? 'labour' : 'supplier'
    });
  };

  return (
    <PaperWrapper md={12} lg={12} sm={12}>
      <StyleStackBetween>
        <Typography component="h1" variant="h5">
          Make Payments
        </Typography>
        <Button
          variant="contained"
          onClick={handleDownload}
          startIcon={<Download />}
          style={{
            borderRadius: '30px'
          }}
        >
          Download
        </Button>
      </StyleStackBetween>
      <TabSwitcher
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        containerProps={{
          sx: {
            mt: 2,
            mb: 2
          }
        }}
      />
      <Box textAlign={'center'}>
        {activeTab === 'suppliers' && (
          <Box mt={4}>
            <CommonTable rows={suppliersData} columns={Suppliercolumns} sortField="name" />
          </Box>
        )}

        <PaymentModal
          open={clearDuesModalOpen}
          onClose={handleClearDuesModalClose}
          currentBalance={currentBalance}
          transactions={transactions}
          handleTransaction={handleTransaction}
          handleClearDues={handleClearDues}
          isSubmitting={isSubmitting}
          openingDate={stakeholder.createdAt}
        />
      </Box>
    </PaperWrapper>
  );
}

export default MakePayments;
