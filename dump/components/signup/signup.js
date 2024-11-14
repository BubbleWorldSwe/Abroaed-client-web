import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Copyright from "../copyright/copyright";
import * as requestManager from "../../utils/apiUtils";
import { useEffect, useState } from "react";
import useNavigateOnEnter from "../../hooks/useNavigateOnEnter";
import { NumericTextField, TextFieldSmall } from "../common/StyledComponent";
import { Zoom } from "@mui/material";

export default function SignUp() {
  useNavigateOnEnter();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileError, setMobileError] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name")?.trim();
    const email = data.get("email")?.trim();
    const mobile = data.get("mobile")?.trim();
    const factoryName = data.get("factoryName")?.trim();
    const city = data.get("city")?.trim();

    if (!name || !email || !mobile || !factoryName || !city) {
      toast.error("Please fill all required fields.");
      return;
    }
    if (mobile.length !== 10 || !/^\d{10}$/.test(mobile)) {
      setMobileError("Mobile number must be exactly 10 digits.");
      return;
    } else {
      setMobileError("");
    }
    const values = {
      name,
      email: email.toLowerCase(),
      factoryName,
      mobile,
      city,
    };

    try {
      setIsSubmitting(true);
      let { data, message, status } = await requestManager.apiPost(
        "auth/signup",
        values
      );
      if (status === 201) {
        toast.success(data);
        navigate("/login");
      } else if (status === 409) {
        toast.error(message);
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box position={'relative'} sx={{ width: '100%', height: '100vh' }}>
      <Box position="absolute" top={0} left={0} mt={-1.2}>
        <svg width="166" height="418" viewBox="0 0 166 418" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <rect width="138.079" height="138.079" rx="20" transform="matrix(0.706265 0.707947 0.706265 -0.707947 -97.8672 320.248)" fill="#28282B"></rect>
          <rect width="233.133" height="233.133" rx="20" transform="matrix(0.708 0.706213 0.708 -0.706213 -165 164.641)" fill="#28282B"></rect>
        </svg>
      </Box>
      <Box position="absolute" bottom={0} right={0} mb={-1.8}>
        <svg width="166" height="418" viewBox="0 0 166 418" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="rotate(180 83 209)">
            <rect width="138.079" height="138.079" rx="20" transform="matrix(0.706265 0.707947 0.706265 -0.707947 -97.8672 320.248)" fill="#28282B"></rect>
            <rect width="233.133" height="233.133" rx="20" transform="matrix(0.708 0.706213 0.708 -0.706213 -165 164.641)" fill="#28282B"></rect>
          </g>
        </svg>
      </Box>
      <Container
        maxWidth="xs"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
          rowGap: 4
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
              component="form" noValidate onSubmit={handleSubmit}
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
                  mb: 2
                }}
              >
                Get started with Us
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextFieldSmall
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    inputProps={{
                      navindex: 1
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldSmall
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    inputProps={{
                      navindex: 2
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <NumericTextField
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile"
                    name="mobile"
                    type='text'
                    autoFocus
                    inputProps={{
                      maxLength: 10,
                      navindex: 3
                    }} />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldSmall
                    required
                    fullWidth
                    name="factoryName"
                    label="Factory Name"
                    id="factoryName"
                    inputProps={{
                      navindex: 4
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldSmall
                    required
                    fullWidth
                    name="city"
                    label="City"
                    id="city"
                    inputProps={{
                      navindex: 5
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                disabled={isSubmitting}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                navindex={10}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    sx={{ ":hover": { cursor: "pointer" }, fontFamily: 'Poppins, sans-serif' }}
                    onClick={() => navigate("/login")}
                    variant="body2"
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>

            </Box>
          </Zoom>
        </Box>

        <Copyright sx={{ fontFamily: 'Poppins, sans-serif' }} />
      </Container>
    </Box>
  );
}
