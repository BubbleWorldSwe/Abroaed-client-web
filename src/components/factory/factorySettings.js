import { Button, Grid } from '@mui/material';
import { Add } from '@mui/icons-material';

const FactorySettings = ({ onAddNewFactory }) => {
  return (
    <Grid item container spacing={2} justifyContent={'space-around'}>
      <Grid item>
        <Button startIcon={<Add />} onClick={onAddNewFactory} variant="text">
          New Factory
        </Button>
      </Grid>
    </Grid>
  );
};

export default FactorySettings;
