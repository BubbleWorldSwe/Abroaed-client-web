import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as requestManager from '../../../utils/apiUtils';
import PaperWrapper from '../../paperWrapper/paperWrapper';
import CommonModal from '../../commonModal/commonModal';
import ActionsMenu from '../../common/ActionsMenu';
import CommonTable from '../../common/CommonTable';
import { TextFieldSmall } from '../../common/StyledComponent';

const Factories = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [factories, setFactories] = useState([]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedFactory, setSelectedFactory] = useState(null);
  const [onlyData, setOnlyData] = useState(false);
  const [selectedFactoryName, setSelectedFactoryName] = useState('');
  const [confirmText, setConfirmText] = useState('');

  const updateFactoryStatus = async (fid) => {
    try {
      setIsSubmitting(true);
      let response = await requestManager.apiPut(`admin/f/${fid}/status`);
      if (response.status == 200) toast.success('Operation successful.');
      else toast.error(response.message);
      getFactories();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const loadFabricsAndShades = async (fid) => {
    try {
      setIsSubmitting(true);
      let response = await requestManager.apiPost(`admin/f/${fid}/load-default-data`);
      if (response.status == 201) toast.success('Fabrics and Shades loaded successfully.');
      else toast.error(response.message);
      getFactories();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteFactory = async () => {
    try {
      setIsSubmitting(true);
      let response = await requestManager.apiDelete(
        `admin/f/${selectedFactory}/delete${onlyData ? '?onlyData=true' : ''}`
      );
      if (response.status == 200)
        toast.success(onlyData ? 'Data removed successfully.' : 'Factory deleted successfully.');
      else toast.error(response.message);
      getFactories();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
      setIsConfirmModalOpen(false);
      setSelectedFactory(null);
      setSelectedFactoryName('');
      setConfirmText('');
      setIsConfirmModalOpen(false);
    }
  };

  const columns = [
    {
      field: 'factoryName',
      headerName: 'Factory',
      type: 'string'
    },
    { field: 'city', headerName: 'City', type: 'string' },
    { field: 'name', headerName: 'Owner', type: 'string' },
    { field: 'mobile', headerName: 'Mobile', type: 'string' },
    { field: 'email', headerName: 'Email', type: 'string' },
    {
      field: 'status',
      headerName: 'Status',
      type: 'string',
      renderCell: (row) => {
        const status = row.status;
        return (
          <Typography color={status === 'INACTIVE' ? '#ed6c02' : status === 'ACTIVE' ? '#2e7d32' : '#bc5d5d'}>
            {status.at(0) + status.substring(1).toLowerCase()}
          </Typography>
        );
      }
    },

    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      renderCell: (row) => {
        const status = row.status;
        const actionItems = [];
        actionItems.push({
          label: status == 'ACTIVE' ? 'Deactivate' : 'Activate',
          action: () => updateFactoryStatus(row.id)
        });
        actionItems.push({ label: 'Load Fabric/Shades', action: () => loadFabricsAndShades(row.id) });
        actionItems.push({
          label: 'Delete Factory',
          action: () => {
            setOnlyData(false);
            setSelectedFactory(row.id);
            setSelectedFactoryName(row.factoryName);
            setIsConfirmModalOpen(true);
          }
        });
        actionItems.push({
          label: 'Remove Factory Data',
          action: () => {
            setOnlyData(true);
            setSelectedFactory(row.id);
            setSelectedFactoryName(row.factoryName);
            setIsConfirmModalOpen(true);
          }
        });
        return <ActionsMenu actionItems={actionItems} />;
      }
    }
  ];
  const getFactories = async () => {
    let response = await requestManager.apiGet(`admin/factories`);
    setFactories(response?.data ?? []);
  };
  useEffect(() => {
    getFactories();
  }, []);

  return (
    <PaperWrapper md={12} lg={11}>
      <CommonModal
        closeIcon
        isOpen={isConfirmModalOpen}
        handleClose={() => {
          setSelectedFactory(null);
          setSelectedFactoryName('');
          setConfirmText('');
          setIsConfirmModalOpen(false);
        }}
        handleSubmit={() => {
          deleteFactory();
        }}
        title="Do you want to proceed?"
        submitText="PROCEED"
        cancelText="CANCEL"
        disableSubmitButton={confirmText != selectedFactoryName}
        isSubmitting={isSubmitting}
      >
        Are you sure,{' '}
        {onlyData
          ? `you want to remove all the data except factory and its users for ${selectedFactoryName}?`
          : `you want to delete ${selectedFactoryName}?`}
        <br />
        <br />
        <TextFieldSmall
          value={confirmText}
          onChange={(e) => setConfirmText(e.target.value)}
          fullWidth
          label={`Type "${selectedFactoryName}" to confirm`}
          placeholder={selectedFactoryName}
        />
      </CommonModal>
      <Grid container justifyContent={'space-between'} alignItems={'center'} mb={2}>
        <Grid item>
          <Typography component="h1" variant="h5">
            Factories
          </Typography>
        </Grid>
      </Grid>
      <CommonTable rows={factories} columns={columns} sortField="factoryName" />
    </PaperWrapper>
  );
};

export default Factories;
