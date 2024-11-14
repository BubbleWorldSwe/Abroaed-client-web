import { InputAdornment } from '@mui/material';
import { TextFieldSmall } from './StyledComponent';
function ReadOnlyTextfield({ name, label, variant = 'outlined', value, option, fwdh = '', width = 'auto', adornment = '' }) {
  return (
    <TextFieldSmall
      name={name}
      label={label}
      variant={variant}
      value={option ? `${isNaN(value) ? 0 : value} ${option}` : value}
      sx={{
        '& .MuiOutlinedInput-root': {
          '&:hover fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.23)'
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.23)',
            borderWidth: '1px'
          }
        },
        '& .MuiInputBase-input': {
          cursor: 'pointer'
        },
        width: fwdh ? '100%' : `${width}`,
        backgroundColor: '#f0f0f0'
      }}
      InputProps={{
        readOnly: true,
        endAdornment: adornment ? <InputAdornment position="end">{adornment} </InputAdornment> : ''

      }}
      InputLabelProps={{
        shrink: true
      }}
     margin='normal'
    />
  );
}

export default ReadOnlyTextfield;
