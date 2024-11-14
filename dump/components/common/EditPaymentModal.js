import React from 'react';
import { NumericTextField, StyledButton, StyledModalContent, StyleModal, TextFieldSmall } from './StyledComponent';
import { Autocomplete, Button, Grid, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { PAYMENT_MODES } from '../../constants/appConstants';
import { formatAmount } from '../../utils/commonUtils';
import ReadOnlyTextfield from './ReadOnlyTextfield';
import useNavigateOnEnter from '../../hooks/useNavigateOnEnter';
import CommonDatePicker from './CommonDatePicker';

function EditPaymentModal({
  open,
  onClose,
  currentBalance,
  transactions,
  handleTransaction,
  handleClearDues,
  otherTransaction = false,
  baseAmount,
  isSubmitting = false,
  openingDate
}) {
  useNavigateOnEnter();
  return (
    <>
      <StyleModal open={open} onClose={onClose}>
        <StyledModalContent width={'350px'}>
          <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
            <Close />
          </IconButton>
          <Grid container direction={'column'}>
            <Grid item>
              <Typography variant="h6" textAlign={'center'}>
                Payment Info
              </Typography>
            </Grid>
            <CommonDatePicker
              label="Date"
              value={transactions.transactionDate}
              onChange={(e) => {
                e.target = { name: 'transactionDate', value: new Date(e) };
                handleTransaction(e);
              }}
              maxDate={new Date()}
              minDate={openingDate}
              sx={{ width: '100%' }}
            />
            <Grid item xs={2}>
              <ReadOnlyTextfield
                label={otherTransaction ? 'Total Amount' : 'Current Balance'}
                type="number"
                value={formatAmount(currentBalance)}
                fwdh="true"
              />
            </Grid>
            <Grid item xs={2}>
              <NumericTextField
                fullWidth
                label={'Update Amount'}
                type="number"
                name="amount"
                value={transactions.amount}
                onClick={(e) => {
                  if (e.target.value == 0) {
                    e.target = { name: 'amount', value: '' };
                    handleTransaction(e);
                  }
                }}
                onChange={(e) => {
                  const inputValue = Math.max(0, e.target.value);
                  e.target = { name: 'amount', value: inputValue };
                  handleTransaction(e);
                }}
                margin="normal"
                InputProps={{
                  startAdornment: <InputAdornment position="start">₹</InputAdornment>
                }}
                inputProps={{
                  navindex: 1
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <ReadOnlyTextfield
                fwdh="true"
                label={'New Balance'}
                type="number"
                value={formatAmount(
                  Number(
                    currentBalance >= 0
                      ? currentBalance - (transactions.amount - baseAmount)
                      : currentBalance + Number(transactions.amount - baseAmount)
                  )
                )}
                margin="normal"
                isRupee="true"
              />
            </Grid>

            {(transactions.amount || transactions.amountPaid) > 0 && (
              <Grid item xs={2}>
                <Autocomplete
                  options={Object.values(PAYMENT_MODES)}
                  getOptionLabel={(option) => option}
                  value={transactions.paymentMode}
                  onChange={(event, newValue) => {
                    event.target = { name: 'paymentMode', value: newValue };
                    handleTransaction(event);
                  }}
                  renderInput={(params) => (
                    <TextFieldSmall
                      {...params}
                      label="Payment Mode"
                      variant="outlined" required
                      margin="normal"
                      inputProps={{
                        ...params.inputProps,
                        navindex: 3
                      }}

                    />
                  )}
                />
              </Grid>
            )}
            <Grid item xs={2}>
              {(transactions?.paymentMode === 'CHEQUE' || transactions?.paymentMode === 'RTGS') && (
                <>
                  <TextFieldSmall
                    fullWidth
                    label={transactions.paymentMode === 'CHEQUE' ? 'Cheque No' : 'UTR'}
                    type={transactions.paymentMode === 'CHEQUE' ? 'text' : 'number'}
                    value={transactions?.txnId.toUpperCase()}
                    onChange={(event) => {
                      event.target = { name: 'txnId', value: event.target.value };
                      handleTransaction(event);
                    }}
                    inputProps={{
                      navindex: 5
                    }}
                    margin="normal"
                  />
                </>
              )}
            </Grid>
          </Grid>
          <Stack direction={'row'} justifyContent={'center'} spacing={2} mt={1}>
            <Button variant="contained" color="secondary" onClick={onClose}>
              Cancel
            </Button>
            <StyledButton
              type="submit"
              isSubmitting={isSubmitting}
              onClick={handleClearDues}
              navindex={100}
            >
              Submit
            </StyledButton>
          </Stack>
        </StyledModalContent>
      </StyleModal>
    </>
  );
}

export default EditPaymentModal;