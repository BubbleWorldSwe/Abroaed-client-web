import React, { useContext, useEffect, useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Modal,
  Radio,
  RadioGroup,
  Switch,
  Typography
} from '@mui/material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Close } from '@mui/icons-material';
import CommonModal from '../commonModal/commonModal';
import { UserContext } from '../../contexts/userContext';
import '../../styles.css';
import SupplierService from './../../services/purchase/supplierService';
import { NumericTextField, StyleBoxModal, StyledButton, TextFieldSmall } from '../common/StyledComponent';
import { Stack } from '@mui/system';
import ActionsMenu from '../common/ActionsMenu';
import { formatAmount, formatName } from '../../utils/commonUtils';
import { generatePDF } from '../common/generatePdf';
import ListView from '../common/ListView';
import useNavigateOnEnter from '../../hooks/useNavigateOnEnter';

const NewSupplierForm = ({ onClose, onSubmit, isSubmitting }) => {
  useNavigateOnEnter();
  const [supplier, setSupplier] = useState({
    name: '',
    contact: '',
    balance: '',
    balanceType: '+',
    gst: '',
    address: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSupplier((prevSupplier) => ({
      ...prevSupplier,
      [name]: name === 'name' ? formatName(value) : value
    }));
  };
  const validateForm = () => {
    const errors = {};
    const contactRegex = /^\d{10}$/;
    if (!supplier.name.trim()) {
      errors.name = 'Supplier Name is required';
    } else if (supplier.name.trim().length < 3) {
      errors.name = 'Supplier Name must be at least 3 characters long';
    }
    if (supplier.contact && !contactRegex.test(supplier.contact)) {
      errors.contact = 'Contact must be a 10-digit number';
    }
    if (supplier.balance === '') {
      errors.balance = 'Balance is required';
    }
    if (supplier.gst && supplier.gst?.length != 15) {
      errors.gst = 'GST should be 15 characters';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleFormSubmit = () => {
    if (validateForm()) {
      onSubmit({
        name: supplier.name,
        contact: supplier.contact,
        balance: Number(`${supplier.balanceType}${supplier.balance}`),
        address: supplier.address,
        gst: supplier.gst
      });
    }
  };

  return (
    <StyleBoxModal>
      <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
        <Close />
      </IconButton>
      <Typography variant="h6" gutterBottom>
        Add New Supplier
      </Typography>
      <FormControl fullWidth>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextFieldSmall
              label="Supplier Name"
              fullWidth
              name="name"
              value={supplier.name}
              onChange={handleInputChange}
              error={!!errors.name}
              helperText={errors.name}
              required
              inputProps={{
                navindex: 1
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <NumericTextField
              label="Contact"
              fullWidth
              type="text"
              name="contact"
              autoFocus
              inputProps={{
                maxLength: 10,
                navindex: 2
              }}
              value={supplier.contact}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <RadioGroup
              aria-label="balance-type"
              name="balanceType"
              value={supplier.balanceType}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel value="+" control={<Radio />} label="Outstanding" />
              <FormControlLabel value="-" control={<Radio />} label="Advance" />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <NumericTextField
              label="Opening Balance"
              fullWidth
              name="balance"
              type="number"
              value={supplier.balance}
              onChange={handleInputChange}
              error={!!errors.balance}
              helperText={errors.balance}
              InputProps={{
                startAdornment: <InputAdornment position="start">₹</InputAdornment>
              }}
              inputProps={{
                navindex: 3
              }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextFieldSmall
              label="GST No."
              fullWidth
              type="text"
              name="gst"
              inputProps={{
                maxLength: 15,
                navindex: 4
              }}
              value={supplier?.gst.toUpperCase() || ''}
              onChange={handleInputChange}
              error={!!errors.gst}
              helperText={errors.gst}
            />
          </Grid>
          <Grid item xs={12}>
            <TextFieldSmall
              id="outlined-multiline-flexible"
              label="Address"
              name="address"
              type="text"
              multiline
              fullWidth
              value={supplier?.address || ''}
              onChange={handleInputChange}
              rows={2}
              inputProps={{
                maxLength: 50,
                navindex: 5
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction={'row'} justifyContent={'center'}>
              <StyledButton navindex={100} type="submit" isSubmitting={isSubmitting} onClick={handleFormSubmit}>
                Submit
              </StyledButton>
            </Stack>
          </Grid>
        </Grid>
      </FormControl>
    </StyleBoxModal>
  );
};

const EditSupplierForm = ({ onClose, onSubmit, supplier, isSubmitting }) => {
  useNavigateOnEnter();
  const [editedSupplier, setEditedSupplier] = useState(supplier);
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedSupplier((prevSupplier) => ({
      ...prevSupplier,
      [name]: name === 'name' ? formatName(value) : value ? value : ''
    }));
  };
  const handleToggleChange = () => {
    setEditedSupplier((prevSupplier) => ({
      ...prevSupplier,
      isActive: !prevSupplier.isActive
    }));
  };
  const validateForm = () => {
    const errors = {};
    const contactRegex = /^\d{10}$/;
    if (!editedSupplier.name.trim()) {
      errors.name = 'Supplier Name is required';
    } else if (editedSupplier.name.trim().length < 3) {
      errors.name = 'Supplier Name must be at least 3 characters long';
    }
    if (editedSupplier.contact && !contactRegex.test(editedSupplier.contact)) {
      errors.contact = 'Contact must be a 10-digit number';
    }
    if (editedSupplier.balance === '') {
      errors.balance = 'Balance is required';
    }
    if (editedSupplier.gst && editedSupplier.gst?.length != 15) {
      errors.gst = 'GST should be 15 characters';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = () => {
    if (validateForm()) {
      const changedData = {};
      Object.keys(editedSupplier).forEach((key) => {
        if (editedSupplier[key] !== supplier[key]) {
          changedData[key] = editedSupplier[key];
        }
      });
      onSubmit(supplier._id, changedData);
    }
  };

  return (
    <StyleBoxModal>
      <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
        <Close />
      </IconButton>
      <Typography variant="h6" gutterBottom>
        Edit Supplier
      </Typography>
      <TextFieldSmall
        label="Supplier Name"
        fullWidth
        margin="normal"
        name="name"
        value={editedSupplier.name}
        onChange={handleInputChange}
        error={!!errors.name}
        helperText={errors.name}
        inputProps={{
          navindex: 1
        }}
      />
      <NumericTextField
        label="Contact"
        fullWidth
        margin="normal"
        type="text"
        name="contact"
        value={editedSupplier.contact}
        onChange={handleInputChange}
        error={!!errors.contact}
        helperText={errors.contact}
        inputProps={{
          maxLength: 10,
          navindex: 2
        }}
      />
      <TextFieldSmall
        label="GST No."
        fullWidth
        margin="normal"
        type="text"
        name="gst"
        value={editedSupplier?.gst?.toUpperCase() || ''}
        onChange={handleInputChange}
        error={!!errors.gst}
        helperText={errors.gst}
        inputProps={{
          maxLength: 15,
          navindex: 3
        }}
      />
      <TextFieldSmall
        id="outlined-multiline-flexible"
        label="Address"
        name="address"
        type="text"
        margin="normal"
        multiline
        value={editedSupplier?.address || ''}
        onChange={handleInputChange}
        Rows={5}
        inputProps={{
          maxLength: 50,
          navindex: 4
        }}
        fullWidth
      />
      <Typography variant="body1" gutterBottom align="left">
        Active:
        <Switch checked={editedSupplier.isActive} onChange={handleToggleChange} />
      </Typography>
      <StyledButton navindex={100} type="submit" isSubmitting={isSubmitting} onClick={handleFormSubmit}>
        Submit
      </StyledButton>
    </StyleBoxModal>
  );
};

const Suppliers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [suppliers, setSuppliers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editedSupplier, setEditedSupplier] = useState(null);
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const supplierService = new SupplierService(user);
  const [selectedSupplierForDeletion, setSelectedSupplierForDeletion] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleEditSupplierClick = (supplier, modalType) => {
    setIsModalOpen(true);
    setModalType(modalType);
    setEditedSupplier(supplier);
  };
  const handleActionSelected = (action, row) => {
    switch (action) {
      case 'edit':
        handleEditSupplierClick(row, 'editSupplier');
        break;
      case 'transactions':
        navigate(`/supplierTransactions`, {
          state: {
            supplierId: row._id
          }
        });
        break;
      case 'purchaseHistory':
        navigate(`/purchaseHistory`, {
          state: {
            supplierData: row
          }
        });
        break;
      default:
        break;
    }
  };

  const columns = [
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
        actionItems.push({ label: 'Edit', action: () => handleActionSelected('edit', row) });
        actionItems.push({ label: 'Ledger', action: () => handleActionSelected('transactions', row) });
        actionItems.push({ label: 'Purchase History', action: () => handleActionSelected('purchaseHistory', row) });
        return <ActionsMenu actionItems={actionItems} />;
      }
    }
  ];

  const getSuppliers = async () => {
    try {
      const supplier = await supplierService.getAllSuppliers();
      setSuppliers(supplier);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getSuppliers();
  }, []);

  const deleteSupplier = async () => {
    try {
      setIsSubmitting(true);
      if (selectedSupplierForDeletion) {
        await supplierService.deleteSupplier(selectedSupplierForDeletion._id);
        toast.success('Delete Supplier Successfully!');
      }
      await getSuppliers();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
      setIsModalOpen(false);
    }
  };

  const handleAddSupplierClick = () => {
    setIsModalOpen(true);
    setModalType('newSupplier');
  };

  const handleNewSupplierSubmit = async (newSupplier) => {
    try {
      setIsSubmitting(true);
      await supplierService.addSupplier(newSupplier);
      toast.success('New supplier submitted successfully.');
      await getSuppliers();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsModalOpen(false);
      setIsSubmitting(false);
    }
  };

  const handleEditSupplierSubmit = async (editSupplierId, editedSupplier) => {
    try {
      setIsSubmitting(true);
      const update = await supplierService.updateSupplier(editSupplierId, editedSupplier);
      toast.success('Supplier Updated successfully.');
      await getSuppliers();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
      setIsModalOpen(false);
    }
  };
  const handleDownload = () => {
    const tableHead = ['Name', 'Contact', 'Opening Balance', 'Balance', 'Status'];
    const tableBody = [...suppliers]?.map(({ name, balance, contact, openingBalance, isActive }) => [
      name,
      contact ? contact :'_',
      openingBalance < 0 ? `Rs. ${openingBalance} (Adv)` : `Rs. ${openingBalance}`,
      balance < 0 ? `Rs. ${balance} (Adv)` : `Rs. ${balance}`,
      isActive ? 'Active' : 'Inactive'
    ]);
    const lowerBoxContent = [
      { label: 'Prepared By', value: user?.currentFactory?.name || '-' },
      { label: 'Date', value: 'Till Date' }
    ];
    generatePDF({
      header: 'Suppliers',
      lowerBoxContent,
      tableHead,
      tableBody,
      fileName: 'supplier'
    });
  };
  return (
    <>
      <ListView
        header={'Suppliers'}
        setIsModalOpen={setIsModalOpen}
        columnData={columns}
        rowdata={
          activeTab === 0
            ? suppliers.filter((supplier) => supplier.isActive)
            : suppliers.filter((supplier) => !supplier.isActive)
        }
        handleAddClick={handleAddSupplierClick}
        handleDownload={handleDownload}
        isSubmitting={isSubmitting}
        buttonText=" New Supplier"
        tab={{ labelFrist: 'Active Suppliers', labelSecond: 'Inactive Suppliers' }}
        activeTab={activeTab}
        handleTabChange={handleTabChange}
        sortField="name"
      />
      <CommonModal
        closeIcon
        isOpen={isModalOpen && modalType === 'confirm'}
        handleClose={() => setIsModalOpen(false)}
        handleSubmit={() => deleteSupplier()}
        title="Do you want to proceed?"
        submitText="PROCEED"
        cancelText="CANCEL"
        disableSubmitButton={isSubmitting}
        isSubmitting={isSubmitting}
      >
        Are you sure you want to remove this supplier from your factory?
        <br />
      </CommonModal>
      <Modal
        open={isModalOpen && modalType === 'newSupplier'}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <NewSupplierForm
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleNewSupplierSubmit}
            isSubmitting={isSubmitting}
          />
        </>
      </Modal>
      <Modal
        open={isModalOpen && modalType === 'editSupplier'}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <EditSupplierForm
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleEditSupplierSubmit}
            supplier={editedSupplier}
            isSubmitting={isSubmitting}
          />
        </>
      </Modal>
    </>
  );
};

export default Suppliers;
