import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'© '}
      {new Date().getFullYear()}{' '}
      <Link color="inherit" href="#">
        Vastrika
      </Link>
      {'. All rights reserved.'}
    </Typography>
  );
}
