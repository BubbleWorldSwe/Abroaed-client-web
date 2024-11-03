import { Box, Button, Typography } from '@mui/material';
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate that an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {}

  componentDidUpdate(prevProps) {
    // Check if the route has changed, if so, reset the error state
    if (this.props.location !== prevProps.location) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            position: 'absolute',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '30px',
              minWidth: '460px',
              maxWidth: '70%'
            }}
          >
            <Box
              className="no-data-available"
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              textAlign={'center'}
              height="100%"
              alignSelf={'center'}
            >
              <div>
                <Typography
                  variant="h1"
                  component="h1"
                  fontSize={'1.5rem'}
                  fontWeight={600}
                  color="#263d52"
                  marginTop="12px"
                >
                  Oops!
                </Typography>
                <Typography fontSize="18px" color="#636363" marginTop="4px">
                  Sorry, something went wrong!
                </Typography>
                <Button
                  onClick={() => {
                    window.history.back();
                  }}
                  style={{ padding: '11px 50px' }}
                >
                  <img
                    src="https://d3euaht4t57wqt.cloudfront.net/icons/blue-back-icon.svg"
                    width="100%"
                    alt="go_back"
                    style={{
                      width: '18px',
                      paddingRight: '7px'
                    }}
                  />
                  Go Back
                </Button>
              </div>
            </Box>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
