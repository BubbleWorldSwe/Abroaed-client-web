import { Box, Divider, Stack, Typography } from '@mui/material';
import { StyleStackAround } from './StyledComponent';
import { formatAmount, formatDate } from '../../utils/commonUtils';

function TitleSummary({ title, other = false, unit = '' }) {
  const addPcsCurr = (key, value) => {
    switch (key) {
      case 'Qty':
      case 'Total Pcs':
        return unit ? `${value} ${unit}` : `${value} Pcs`;
      case 'Amount':
      case 'Total Amount':
        return formatAmount(value);
      case 'Date':
        return formatDate(value);
      default:
        return value;
    }
  };
  return (
    <>
      {other ? (
        <>
          <Box mt={1} bgcolor={'#e8efe7'}>
            <StyleStackAround mt={1} mb={1}>
              {Object.entries(title).map(([key, value], index) => (
                <Typography key={index} m={1}>
                  {key} : <strong>{addPcsCurr(key, value)}</strong>
                </Typography>
              ))}
            </StyleStackAround>
          </Box>
          <Divider />
        </>
      ) : (
        <>
          <Divider textAlign="center">
            <Typography variant="h5">Summary</Typography>
          </Divider>
          <Box mt={1} bgcolor={'#e8efe7'}>
            <StyleStackAround mt={1} mb={1}>
              {Object.entries(title).map(([key, value], index) => (
                <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} key={index}>
                  <Typography m={1}>{key}</Typography>
                  <Typography>
                    <strong>{addPcsCurr(key, value) || '_'}</strong>
                  </Typography>
                </Stack>
              ))}
            </StyleStackAround>
          </Box>
        </>
      )}
    </>
  );
}

export default TitleSummary;
