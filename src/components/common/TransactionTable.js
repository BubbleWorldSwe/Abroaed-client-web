import React, { useState } from 'react';
import { formatAmount, formatTransactionDescription } from '../../utils/commonUtils';
import CommonTable from './CommonTable';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ActionsMenu from './ActionsMenu';
import { PARTY_TYPES, TRANSACTION_TYPES } from '../../constants/appConstants';
import CommonModal from '../commonModal/commonModal';
import EditPaymentModal from './EditPaymentModal';

function TransactionTable({
  transactionData,
  showFromBegining,
  currentBalance,
  transactions,
  handleTransaction,
  handleUpdateTransactions,
  handleEditTransaction,
  handleDelete,
  baseAmount,
  isSubmitting = false,
  party,
  openingDate
}) {
  const navigate = useNavigate();
  const [modalType, setModalType] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const navigateToDetailPage = (row) => {
    switch (true) {
      case !!row.foId:
        navigate('/purchaseDetail', { state: { fabricOrderId: row?.foId } });
        break;
      case !!row.toId:
        navigate(`/tradingStockView/${row?.toId}`);
        break;
    }
  };

  const columns = [
    {
      field: 'transactionDate',
      headerName: 'Date',
      type: 'date'
    },
    {
      field: 'description',
      headerName: 'Description',
      type: 'string',
      renderCell: (row) => {
        if (
          row.transactionType === TRANSACTION_TYPES.DUE_CLEARANCE ||
          TRANSACTION_TYPES.OPENING_BALANCE === row.transactionType
        ) {
          return formatTransactionDescription(row);
        }
        return (
          <Link onClick={() => navigateToDetailPage(row)} style={{ cursor: 'pointer' }}>
            {formatTransactionDescription(row)}
          </Link>
        );
      }
    },
    {
      field: 'amount',
      headerName: 'Debit',
      type: 'currency',
      renderCell: (row) => (row.amount > 0 ? formatAmount(Math.abs(row.amount)) : '')
    },
    {
      field: 'amount',
      headerName: 'Credit',
      renderCell: (row) => (row.amount <= 0 ? formatAmount(Math.abs(row.amount)) : ''),
      type: 'currency'
    },
    showFromBegining && {
      field: 'balance',
      headerName: 'Balance',
      type: 'currency',
      renderCell: (row) => {
        return formatAmount(Math.abs(row.balance));
      }
    },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      renderCell: (row) => {
        const actionItems = [];
        if (row.transactionType === TRANSACTION_TYPES.DUE_CLEARANCE) {
          actionItems.push({ label: 'Edit', action: () => handleModalOpen('paymentModal', row) });
          actionItems.push({ label: 'Delete', action: () => handleModalOpen('confirm', row) });
        }
        return <ActionsMenu actionItems={actionItems} />;
      }
    }
  ];

  if (PARTY_TYPES.LABOUR === party) {
    const lotField = {
      field: 'lotId',
      headerName: 'Lot Id',
      type: 'string'
    };
    columns.splice(1, 0, lotField);
  }

  const handleModalOpen = (modalType, row) => {
    if (modalType === 'paymentModal') {
      handleEditTransaction(row);
    } else {
      setTransactionId(row?._id);
    }
    setIsModalOpen(true);
    setModalType(modalType);
  };
  return (
    <>
      <CommonTable rows={transactionData} columns={columns} hideFilters disableSort />
      <CommonModal
        closeIcon
        isOpen={isModalOpen && modalType === 'confirm'}
        handleClose={() => {
          setIsModalOpen(false);
        }}
        handleSubmit={() => handleDelete(transactionId, setIsModalOpen, setModalType)}
        title="Do you want to proceed?"
        submitText="PROCEED"
        cancelText="CANCEL"
        isSubmitting={isSubmitting}
      >
        Are you sure you want to remove this transaction ?
        <br />
      </CommonModal>
      <EditPaymentModal
        open={isModalOpen && modalType === 'paymentModal'}
        onClose={() => setIsModalOpen(false)}
        currentBalance={currentBalance}
        transactions={transactions}
        handleTransaction={handleTransaction}
        handleClearDues={() => handleUpdateTransactions(setIsModalOpen, setModalType)}
        baseAmount={baseAmount}
        isSubmitting={isSubmitting}
        openingDate={openingDate}
      />
    </>
  );
}

export default TransactionTable;
