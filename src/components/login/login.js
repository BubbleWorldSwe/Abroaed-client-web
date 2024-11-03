import * as React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as requestManager from '../../utils/apiUtils';
import Copyright from '../copyright/copyright';
import { UserContext } from '../../contexts/userContext';
import { useContext, useState, useEffect } from 'react';
import { NumericTextField, TextFieldSmall } from '../common/StyledComponent';
import { Container } from '@mui/system';
import { Zoom } from '@mui/material';
import SvgStyleComponent from '../common/SvgStyleComponent';

export default function Login() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setAuthData } = useContext(UserContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (!formData.get('mobile')?.trim() || !formData.get('password')) {
      toast.error('Please enter mobile/password.');
      return;
    }
    const values = {
      mobile: formData.get('mobile').trim().toLowerCase(),
      password: formData.get('password')
    };
    try {
      setIsSubmitting(true);
      let { data } = await requestManager.apiPost('auth/login', values);
      if (data) {
        setAuthData({ user: data });
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
              transition: 'transform 1s ease',
            }}
            timeout={1000}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#ffffff',
                padding: '10px 2rem 2rem',
                borderRadius: '8px',
                boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
                width: '28rem',
                height: 'auto',
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
                <img src="https://d3euaht4t57wqt.cloudfront.net/images/vastrikaLogo.jpg" alt="Vastrika Logo" style={{ width: '200px', height: '100px', marginLeft: '-22px' }} />
              </Box>
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  lineHeight: '36px',
                  fontSize: '28px',
                }}
              >
                Get started with Us
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <NumericTextField
                  margin="normal"
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile"
                  name="mobile"
                  type="text"
                  autoFocus
                  inputProps={{
                    maxLength: 10,
                  }}
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    '& .MuiInputBase-root': {
                      borderRadius: '4px',
                      border: '1px solid #ced4da',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#d9c3ca',
                      },
                      '&.Mui-focused': {
                        borderColor: '#d9c3ca',
                        transform: 'translateY(-1px)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Poppins, sans-serif',
                    },
                  }}
                />
                <TextFieldSmall
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    '& .MuiInputBase-root': {
                      borderRadius: '4px',
                      border: '1px solid #ced4da',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#d9c3ca',
                      },
                      '&.Mui-focused': {
                        borderColor: '#d9c3ca',
                        transform: 'translateY(-1px)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Poppins, sans-serif',
                    },
                  }}
                />
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 3, fontFamily: 'Poppins, sans-serif' }}
                  color="primary"
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link onClick={() => navigate('/forgot-password')} variant="body2" sx={{ ':hover': { cursor: 'pointer' }, fontFamily: 'Poppins, sans-serif' }}>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link sx={{ ':hover': { cursor: 'pointer' }, fontFamily: 'Poppins, sans-serif' }} onClick={() => navigate('/signup')} variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
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
