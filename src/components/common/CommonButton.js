import { Send } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';

const CommonButton = (props = {}) => {
  const {
    isSubmitting = false,
    disabled = false,
    onClick,
    variant = 'contained',
    color = 'primary',
    style = {},
    ...rest
  } = props;
  const isDisabled = isSubmitting || disabled;
  return isSubmitting ? (
    <LoadingButton
      loading={isSubmitting}
      onClick={onClick}
      variant={variant}
      color={color}
      sx={style}
      endIcon={<Send />}
      loadingPosition="end"
      {...rest}
    >
      {props.children}
    </LoadingButton>
  ) : (
    <Button onClick={onClick} variant={variant} color={color} sx={style} disabled={isDisabled} {...rest}>
      {props.children}
    </Button>
  );
};

export default CommonButton;
