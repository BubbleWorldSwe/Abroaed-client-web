import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import * as requestManager from '../../utils/apiUtils';
import Copyright from '../copyright/copyright';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/userContext';
import useNavigateOnEnter from '../../hooks/useNavigateOnEnter';
import { Zoom } from '@mui/material';
import { TextFieldSmall } from '../common/StyledComponent';
import SvgStyleComponent from '../common/SvgStyleComponent';

export default function JoinFactory() {
  useNavigateOnEnter();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setAuthData } = useContext(UserContext);
  const { resetToken } = useParams();
  const [user, setUser] = useState(null);
  const [formValues, setFormValues] = useState({
    password: '',
    confirmPassword: ''
  });
  const [show, setShow] = useState(false);
  const fetchUser = async () => {
    try {
      if (resetToken) {
        let res = await requestManager.apiGet(`auth/get-user/${resetToken}`);
        setUser(res.data);
      }
    } catch (error) {
      toast.error(error?.message ?? error);
      // navigate("/login");
    }
  };
  useEffect(() => {
    setShow(true);
    fetchUser();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formValues.password != formValues.confirmPassword) {
      return;
    }
    const values = {
      resetToken: resetToken,
      password: formValues.password,
      mobile: user.mobile
    };
    try {
      setIsSubmitting(true);
      let { data, message, status } = await requestManager.apiPost('auth/join-factory', values);
      if (data) {
        setAuthData({ user: data });
        toast.success('Joined Factory successfully.');
        navigate('/');
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box position={'relative'} sx={{ width: '100%', height: '100vh' }}>
      <SvgStyleComponent />
      <Container
        maxWidth="xs"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
          rowGap: 5
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Zoom
            in={show}
            style={{
              transformOrigin: 'center center',
              transition: 'transform 1s ease'
            }}
            timeout={1000}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#ffffff',
                padding: '10px 2rem 2rem',
                borderRadius: '8px',
                boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
                width: '28rem',
                height: 'auto'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  width: '100%',
                  mb: 1,
                  ml: -1
                }}
              >
                <img
                  src="https://d3euaht4t57wqt.cloudfront.net/images/vastrikaLogo.jpg"
                  alt="Vastrika Logo"
                  style={{ width: '200px', height: '100px', marginLeft: '-22px' }}
                />
              </Box>
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  lineHeight: '36px',
                  fontSize: '28px'
                }}
              >
                Join Factory
              </Typography>
              <Box component="form" sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextFieldSmall
                      name="name"
                      fullWidth
                      id="name"
                      label="Name"
                      value={user?.name}
                      variant="filled"
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldSmall
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      value={user?.email}
                      variant="filled"
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldSmall
                      fullWidth
                      id="mobile"
                      label="Mobile"
                      name="mobile"
                      value={user?.mobile}
                      variant="filled"
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldSmall
                      type="password"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      id="password"
                      autoFocus
                      InputProps={{
                        navindex: 1
                      }}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldSmall
                      type="password"
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      InputProps={{
                        navindex: 1
                      }}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      onClick={handleSubmit}
                      disabled={
                        !formValues.password ||
                        !formValues.confirmPassword ||
                        formValues.password != formValues.confirmPassword ||
                        isSubmitting
                      }
                      type="submit"
                      fullWidth
                      variant="contained"
                      navindex={3}
                    >
                      Join Factory
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Zoom>
        </Box>
        <Copyright sx={{ fontFamily: 'Poppins, sans-serif' }} />
      </Container>
    </Box>
  );
}
