import { ArrowBack, Download } from '@mui/icons-material';
import { Box, Button, Divider, Grid, IconButton, Typography } from '@mui/material';

function ArrowHeader({ title, opt = false, handleDownload, download = false }) {
  return (
    <>
      <Grid container justifyContent={'space-between'} alignItems={'center'} mb={2}>
        <Grid item>
          <Box display="flex" alignItems="center" gap={2} ml={-1}>
            <IconButton color="primary" onClick={() => window.history.back()}>
              <ArrowBack />
            </IconButton>
            <Typography
              variant="h5"
              sx={{
                fontSize: '1.3rem',
                lineHeight: '1.75rem',
                letterSpacing: '-0.05em'
              }}
            >
              {title}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          {download && (
            <Button
              variant="contained"
              onClick={handleDownload}
              startIcon={<Download />}
              style={{
                borderRadius: '10px',
                marginLeft: '100px'
              }}
            >
              Download
            </Button>
          )}
        </Grid>
      </Grid>

      <Divider sx={{ mb: 2, borderWidth: '1px' }} />
    </>
  );
}
export default ArrowHeader;
