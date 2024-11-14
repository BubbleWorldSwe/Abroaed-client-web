import React from 'react';
import { DialogTitle, DialogContent, DialogActions, Dialog, Box, IconButton, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import { cancelButton, modalStyle, actions, handleSubmitButton, titleSection, childrenContainer } from './styles';
import { StyledButton } from '../common/StyledComponent';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    width: '70%'
  }
}));

const Title = styled(DialogTitle)(({ theme }) => ({
  textTransform: 'lowercase',
  '&:first-letter': {
    textTransform: 'uppercase'
  }
}));

const SubmitContainer = styled('div')(({ theme }) => ({
  '& .MuiBadge-root': {
    width: '100%',
    paddingLeft: '12px'
  }
}));

const CommonModal = ({
  children,
  isOpen,
  handleClose,
  title,
  isLoading,
  hideButtons = false,
  disableSubmitButton = false,
  hideCancelButton = false,
  cancelText,
  submitText,
  handleSubmit,
  closeIcon = false,
  muiClasses = {},
  endText = '',
  buttonStyles = null,
  isSubmitting = false
}) => {
  return (
    <StyledDialog open={isOpen} onClose={handleClose} id="common-modal" sx={modalStyle}>
      {title && (
        <Title sx={titleSection}>
          {title}
          {closeIcon && (
            <IconButton onClick={handleClose}>
              <img alt="close" src="https://d3euaht4t57wqt.cloudfront.net/icons/CloseIcon.svg" />
            </IconButton>
          )}
        </Title>
      )}
      <DialogContent sx={childrenContainer}>{children}</DialogContent>
      {!hideButtons && (
        <Box pb="30px">
          <DialogActions sx={actions}>
            <Grid container justifyContent={'end'} alignItems={'center'}>
              <Grid item xs={buttonStyles?.width ? false : 6}>
                {!hideCancelButton && (
                  <Button
                    variant="outlined"
                    disabled={isLoading}
                    style={{ ...cancelButton, ...buttonStyles }}
                    onClick={handleClose}
                  >
                    {cancelText ?? 'CANCEL'}
                  </Button>
                )}
              </Grid>
              <Grid item xs={buttonStyles?.width ? false : 6} mt={-2.1}>
                <StyledButton
                  type="submit"
                  isSubmitting={isSubmitting}
                  disabled={disableSubmitButton}
                  onClick={handleSubmit}
                  style={{ ...handleSubmitButton, ...buttonStyles }}
                >
                  {submitText ?? 'SUBMIT'}
                </StyledButton>
              </Grid>
            </Grid>
          </DialogActions>
          {endText !== '' && (
            <Box textAlign="center" pt="12px">
              {endText}
            </Box>
          )}
        </Box>
      )}
    </StyledDialog>
  );
};
export default CommonModal;
