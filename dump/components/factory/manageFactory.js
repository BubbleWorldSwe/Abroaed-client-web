import { Grid, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import { toast } from 'react-toastify';
import * as requestManager from '../../utils/apiUtils';
import PaperWrapper from '../paperWrapper/paperWrapper';
import AddFactory from './addFactory';
import FactorySettings from './factorySettings';

const ManageFactory = () => {
  const [isAddMode, setIsAddMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { currentUser, setAuthData, currentFactory } = useContext(UserContext);

  const onAddFactory = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      factoryName: data.get('factoryName'),
      city: data.get('city')
    };
    try {
      setIsSubmitting(true);
      let { data } = await requestManager.apiPost(`f/${currentFactory?._id}/add`, values);
      if (data) {
        let updatedUser = { ...currentUser };
        updatedUser.factories.push(data);
        setAuthData({ user: updatedUser });
        toast.success('Factory created successfully.');
        setIsAddMode(false);
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PaperWrapper>
      {!isAddMode && (
        <Grid container>
          <Grid item mb={2}>
            <Typography variant={'h6'} color={'#5a5757'}>
              Factory Settings:
            </Typography>
          </Grid>
          <FactorySettings onAddNewFactory={() => setIsAddMode(true)} />
        </Grid>
      )}

      {isAddMode && (
        <AddFactory onAddFactory={onAddFactory} onCancel={() => setIsAddMode(false)} isSubmitting={isSubmitting} />
      )}
    </PaperWrapper>
  );
};

export default ManageFactory;
