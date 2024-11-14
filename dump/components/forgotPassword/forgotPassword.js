import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Copyright from '../copyright/copyright';
import * as requestManager from '../../utils/apiUtils';
import { useState, useEffect } from 'react';
import { NumericTextField } from '../common/StyledComponent';
import { Zoom } from '@mui/material';
import useNavigateOnEnter from '../../hooks/useNavigateOnEnter';
import SvgStyleComponent from '../common/SvgStyleComponent';

export default function ForgotPassword() {
  useNavigateOnEnter();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!data.get('mobile')?.trim()) {
      toast.error('Please fill your mobile number.');
      return;
    }
    const values = {
      mobile: data.get('mobile').trim()
    };
    try {
      setIsSubmitting(true);
      let { data, message, status } = await requestManager.apiPost('auth/forgot-password', values);
      if (status == 201) {
        toast.success(data);
      } else if (status == 409) {
        toast.error(message);
      }
      navigate('/login');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box position={'relative'} sx={{ width: '100%', height: '100vh' }}>
     <SvgStyleComponent/>
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
                Forgot your Password?
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container>
                  <Grid item xs={12}>
                    <NumericTextField
                      required
                      fullWidth
                      id="mobile"
                      label="Mobile"
                      name="mobile"
                      type='text'
                      inputProps={{ maxLength: 10, navindex: 1 }}
                      autoFocus
                    />
                  </Grid>
                </Grid>
                <Button disabled={isSubmitting} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} navindex={2}>
                  Reset Password
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link sx={{ ':hover': { cursor: 'pointer' } }} onClick={() => navigate('/login')} variant="body2" >
                      Back to Log In
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
