import { FormControl, Modal, Table, TableContainer, TextField } from '@mui/material';
import { Box, Stack, styled } from '@mui/system';
import CommonButton from './CommonButton';

export const NumericTextField = styled((props) => {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue.match(/^\d*\.?\d{0,2}$/); 
    if (props.onChange && (inputValue === '' || formattedValue)) {
      let finalValue = inputValue;
      if (formattedValue !== null) {
        finalValue = formattedValue[0];
      }
      props.onChange({
        target: {
          value: finalValue === '' ? '' : props.type === 'text' ? finalValue : Number(finalValue),
          name: event.target.name
        }
      });
    }
  };

  return (
    <TextField
      {...props}
      size="small"
      type={props.type ?? 'number'}
      onChange={handleChange}
      inputProps={{ ...props.inputProps, inputMode: 'decimal', pattern: '[0-9]*[.,]?[0-9]{0,2}' }}
      InputProps={props.InputProps}
    />
  );
})(({ theme }) => ({
  '& input[type=number]': {
    MozAppearance: 'textfield'
  },
  '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0
  },
  '& .MuiInputBase-root': {},
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.grey[400]
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main
    }
  }
}));




export const StyleBoxModal = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4),
  borderRadius: 20,
  textAlign: 'center',
  outline: 0
}));

export const StyleModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
export const StyledModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 10 6px 20px rgba(0, 0, 0, 0.19)',
  padding: theme.spacing(2, 4, 3),
  borderRadius: '5px',
  outline: 'none',
  position: 'relative',
  overflow: 'auto'
}));

export const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650
  // marginTop: theme.spacing(2)
}));

styled(FormControl)(({ theme }) => ({
  background: '#fff'
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  // minWidth: 650,
  marginTop: theme.spacing(2)
}));
export const StyleStackCenter = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
}));
export const StyleStackEnd = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center'
}));
styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center'
}));
export const StyleStackBetween = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  justifyContent: 'space-between',
  alignContent: 'center',
  alignItems: 'center'
}));
export const StyleStackAround = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  justifyContent: 'space-around',
  alignContent: 'center',
  alignItems: 'center'
}));

export const StyledButton = styled(CommonButton)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: '#fff', // Text color
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  },
  '&:focus': {
    backgroundColor: theme.palette.primary.light
  }
}));

styled(TextField)(({ theme }) => ({
  flex: 1,
  marginBottom: theme.spacing(2),
  minWidth: '15em'
}));
export const TextFieldSmall = styled((props) => <TextField {...props} size="small" />)(({ theme }) => ({
  '& .MuiInputBase-root': {}
}));

styled('form')(({ theme }) => ({
  display: 'grid',
  background: 'transparent',
  gridTemplateColumns: '1fr 1fr 1fr',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  marginTop: '10px'
}));
