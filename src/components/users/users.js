import { Button, Grid, IconButton, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import { toast } from 'react-toastify';
import * as requestManager from '../../utils/apiUtils';
import CommonModal from '../commonModal/commonModal';
import PaperWrapper from '../paperWrapper/paperWrapper';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { Delete, Edit } from '@mui/icons-material';

const Users = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const { currentFactory } = useContext(UserContext);
  const navigate = useNavigate();

  const columns = [
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'mobile', headerName: 'Mobile', width: 150 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'modules', headerName: 'Modules', width: 250 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => {
        return (
          <Grid container>
            <Grid item>
              <IconButton
                disabled={isSubmitting}
                color="primary"
                onClick={() => {
                  navigate('/edit-user', { state: { userId: params.id } });
                }}
              >
                <Edit />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                disabled={isSubmitting}
                color="error"
                onClick={() => {
                  setSelectedUser(params.id);
                  setIsConfirmModalOpen(true);
                }}
              >
                <Delete />
              </IconButton>
            </Grid>
          </Grid>
        );
      }
    }
  ];

  const getUsers = async () => {
    try {
      let response = await requestManager.apiGet(`f/${currentFactory._id}/users`);
      setUsers(
        response?.data?.map((user) => {
          return {
            id: user._id,
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            modules: `${user.modules.length} modules`
          };
        })
      );
    } catch (err) {
      toast.error(err.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      setIsSubmitting(true);
      let response = await requestManager.apiDelete(`f/${currentFactory._id}/user/${selectedUser}`);
      if (response.status == 200) toast.success('User removed successfully.');
      else toast.error(response.message);
      getUsers();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
      setIsConfirmModalOpen(false);
      setSelectedUser(null);
    }
  };
  return (
    <PaperWrapper md={12} lg={11}>
      <CommonModal
        closeIcon
        isOpen={isConfirmModalOpen}
        handleClose={() => {
          setSelectedUser(null);
          setIsConfirmModalOpen(false);
        }}
        handleSubmit={() => {
          setIsConfirmModalOpen(false);
          deleteUser();
        }}
        title="Do you want to proceed?"
        submitText="PROCEED"
        cancelText="CANCEL"
        disableSubmitButton={isSubmitting}
      >
        Are you sure, you want to remove this user from your factory?
        <br />
      </CommonModal>
      <Grid container justifyContent={'space-between'} alignItems={'center'} mb={2}>
        <Grid item>
          <Typography component="h1" variant="h5">
            Users
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => navigate('/add-user')} variant="outlined">
            Add User
          </Button>
        </Grid>
      </Grid>
      <DataGrid
        rows={users}
        columns={columns}
        hideFooter
        initialState={{
          sorting: {
            sortModel: [{ field: 'name', sort: 'asc' }]
          }
        }}
      />
    </PaperWrapper>
  );
};

export default Users;
