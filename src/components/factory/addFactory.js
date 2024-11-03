import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const AddFactory = ({ onAddFactory, onCancel, isSubmitting }) => {
  return (
    <Box
      sx={{
        // display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Add Factory
      </Typography>
      <Box component="form" noValidate onSubmit={onAddFactory} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="factoryName"
              required
              fullWidth
              id="factoryName"
              label="Factory Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField name="city" required fullWidth id="city" label="City" />
          </Grid>
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Button
              disabled={isSubmitting}
              onClick={onCancel}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddFactory;
