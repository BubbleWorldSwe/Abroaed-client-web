import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import PaperWrapper from '../paperWrapper/paperWrapper';
import Button from '@mui/material/Button';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import { toast } from 'react-toastify';
import * as requestManager from '../../utils/apiUtils';
import { APP_MODULES } from '../../constants/appConstants';

const EditUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { userId } = location.state;
  const { currentFactory, currentUser } = useContext(UserContext);
  const [values, setValues] = useState({
    name: '',
    email: '',
    mobile: '',
    modules: []
  });

  const handleModuleChange = (module, checked) => {
    setValues((prevValues) => ({
      ...prevValues,
      modules: checked ? [...prevValues.modules, module] : prevValues.modules.filter((mod) => mod !== module)
    }));
  };

  const getUser = async () => {
    let response = await requestManager.apiGet(`f/${currentFactory._id}/user/${userId}`);
    if (response.data.length) {
      let user = response.data[0];
      setValues({
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        modules: user.modules
      });
    } else toast.error('User not found.');
  };
  useEffect(() => {
    getUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!values.name?.trim()) {
      toast.error('Name is required');
    }
    if (!values.modules.length) {
      toast.error('Please select modules for the user');
      return;
    }

    try {
      setIsSubmitting(true);
      const { userId } = location.state;
      let res = await requestManager.apiPut(`f/${currentFactory._id}/user/${userId}`, {
        name: values.name.trim(),
        modules: values.modules
      });
      if (res.status === 200) {
        if (userId == currentUser._id) {
          window.location.reload();
        } else {
          toast.success(res.message);
          navigate('/users');
        }
      } else {
        toast.error(res.message);
      }
    } catch (err) {
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <PaperWrapper md={12} lg={12}>
      <Grid container flexDirection={'column'} component={'form'} onSubmit={onSubmit}>
        <Grid item>
          <Typography textAlign={'center'} component="h1" variant="h5" mb={2}>
            Edit User
          </Typography>
        </Grid>
        <FormControl fullWidth>
          <Grid item>
            <TextField
              margin="normal"
              autoFocus
              required
              fullWidth
              value={values.name}
              disabled={isSubmitting}
              onChange={handleChange}
              name="name"
              label="Name"
              type="text"
              id="name"
            />
          </Grid>
          <Grid item>
            <TextField
              margin="normal"
              required
              fullWidth
              value={values.email}
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              disabled
            />
          </Grid>
          <Grid item>
            <TextField
              margin="normal"
              required
              fullWidth
              value={values.mobile}
              id="mobile"
              label="Mobile"
              name="mobile"
              disabled
              inputProps={{
                maxLength: 10
              }}
            />
          </Grid>
          <Grid item>
            <FormGroup>
              <FormLabel required sx={{ mt: 1 }}>
                Modules
              </FormLabel>
              <Grid container>
                {APP_MODULES.map((module, index) => {
                  return (
                    <Grid item xs={4} key={index}>
                      <FormControlLabel
                        value={module}
                        checked={values.modules.includes(module)}
                        control={<Checkbox />}
                        label={module}
                        labelPlacement="end"
                        onChange={(e) => handleModuleChange(module, e.target.checked)}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </FormGroup>
          </Grid>
          <Grid container item justifyContent={'flex-end'}>
            <Grid item>
              <Button onClick={() => navigate('/users')} variant="outlined" sx={{ mt: 3 }}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button disabled={isSubmitting} type="submit" variant="contained" sx={{ mt: 3, ml: 2 }}>
                Update User
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
    </PaperWrapper>
  );
};

export default EditUser;
