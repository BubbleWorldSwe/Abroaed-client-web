import { Paper, Typography } from '@mui/material';
import { formatAmount } from '../../utils/commonUtils';

function PaperCard({ text, value, isRupee }) {
  return (
    <Paper elevation={2} style={{ padding: '4px 12px', marginBottom: '12px', flexGrow: 1 }}>
      <Typography style={{ textTransform: 'uppercase', fontWeight: '400', marginBottom: '2px', fontSize: '14px' }}>
        {text}
      </Typography>
      <Typography style={{ color: '#1168a2', textTransform: 'capitalize', fontWeight: 'bold' }}>
        {isRupee ? formatAmount(value) : value}
      </Typography>
    </Paper>
  );
}

export default PaperCard;
