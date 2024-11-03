import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Home } from '@mui/icons-material';
export default function NotFound() {
  const navigate = useNavigate();

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
          background: '#f2f2f2',
          borderRadius: '12px',
          padding: '50px',
          minWidth: '500px',
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
              Looks like you're lost!
            </Typography>
            <Typography fontSize="18px" color="#636363" marginTop="8px">
              The page you are looking for is not available!
            </Typography>
            <Button
              startIcon={<Home />}
              onClick={() => {
                navigate('/');
              }}
              style={{ padding: '11px 50px', marginTop: 10 }}
            >
              Go to Home
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}
