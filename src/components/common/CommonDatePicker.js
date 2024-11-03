import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const CommonDatePicker = ({ label, value, onChange, maxDate = null, minDate = null, sx = {} }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value ? dayjs(value) : null}
        onChange={(e) => onChange(new Date(e))}
        format="DD/MM/YYYY"
        sx={sx}
        slotProps={{ textField: { size: 'small' } }}
        maxDate={maxDate ? dayjs(new Date(maxDate)) : null}
        minDate={minDate ? dayjs(new Date(minDate)) : null}
      />
    </LocalizationProvider>
  );
};
export default CommonDatePicker;
