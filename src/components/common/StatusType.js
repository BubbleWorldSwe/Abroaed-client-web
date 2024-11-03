import { Box } from '@mui/material';
import { STATUS_COLORS } from '../../constants/colorConstants';

function StatusType({ value, status, dateOpened, opt = '' }) {
  const getBackgroundColor = () => {
    
    if (status === 'INITIAL' && dateOpened) {
      const currentDate = new Date();
      const openedDate = new Date(dateOpened);
      const dayDiff = (currentDate - openedDate) / (1000 * 3600 * 24);
      if (dayDiff >= 5) {
        return '#ceb8b8de';
      }
    }
    return STATUS_COLORS[status]?.bgColor;
  };

  return (
    <Box
      sx={{
        fontWeight: 500,
        color: STATUS_COLORS[status]?.textColor1,
        backgroundColor: getBackgroundColor(),
        padding: '2px 4px',
        borderRadius: '4px',
        textWrap: 'nowrap',
        textAlign: 'center',
        width: '130px',
      }}
    >
      {opt ? 'Resolved' : value}
    </Box>
  );
}

export default StatusType;
