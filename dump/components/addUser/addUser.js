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
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import { toast } from 'react-toastify';
import * as requestManager from '../../utils/apiUtils';
import { APP_MODULES } from '../../constants/appConstants';
import * as Yup from 'yup';

const AddUser = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { currentFactory } = useContext(UserContext);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    mobile: Yup.string().required('Mobile is required')
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(values, { abortEarly: false });
    } catch (validationErrors) {
      // Validation failed, set errors state
      const errors = validationErrors.inner.reduce((acc, curr) => {
        acc[curr.path] = curr.message;
        return acc;
      }, {});

      setErrors(errors);
      return;
    }
    if (!values.modules.length) {
      toast.error('Please select modules for the user.');
      return;
    }
    try {
      setIsSubmitting(true);
      let res = await requestManager.apiPost(`f/${currentFactory._id}/user`, {
        name: values.name.trim(),
        email: values.email.trim().toLowerCase(),
        mobile: values.mobile.trim(),
        modules: values.modules
      });
      if (res.status === 201) {
        toast.success(res.message);
        navigate('/users');
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      toast.error(err.message);
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
            Add User
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
              error={!!errors.name}
              helperText={errors.name}
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
              onChange={handleChange}
              disabled={isSubmitting}
              error={!!errors.email}
              helperText={errors.email}
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
              onChange={handleChange}
              disabled={isSubmitting}
              error={!!errors.mobile}
              helperText={errors.mobile}
              inputProps={{
                maxLength: 10
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormLabel required sx={{ mt: 2 }}>
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
                submit
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
    </PaperWrapper>
  );
};

export default AddUser;
