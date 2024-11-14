import React from 'react';
import PaperWrapper from '../paperWrapper/paperWrapper';
import { Button, Grid, Tab, Tabs, Typography } from '@mui/material';
import CommonTable from './CommonTable';
import CommonModal from '../commonModal/commonModal';
import { Add, Download } from '@mui/icons-material';

function ListView({
  header,
  setIsModalOpen,
  columnData,
  rowdata,
  isModalOpen,
  download = true,
  addNew = true,
  handleDelete,
  handleAddClick,
  handleDownload,
  isSubmitting = false,
  buttonText = '',
  tab = null,
  activeTab,
  handleTabChange = {},
  sortField = '',
  sortOrder = 'asc'
}) {
  return (
    <PaperWrapper md={12} lg={12} sm={12}>
      <Grid container justifyContent={'space-between'} alignItems={'center'} mb={4}>
        <Grid item xs={6}>
          <Typography component="h1" variant="h5">
            {header}
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          {addNew && (
            <Button
              onClick={handleAddClick}
              variant="outlined"
              startIcon={<Add />}
              style={{
                borderRadius: '30px',
                marginRight: '10px'
              }}
            >
              {buttonText}
            </Button>
          )}
          {download && (
            <Button
              variant="contained"
              onClick={handleDownload}
              startIcon={<Download />}
              style={{
                borderRadius: '30px'
              }}
            >
              Download
            </Button>
          )}
        </Grid>
        {tab && (
          <Grid item xs={12}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="fullWidth"
              textColor="primary"
              indicatorColor="primary"
              aria-label="supplier tabs"
              sx={{ mt: '20px' }}
            >
              <Tab label={tab.labelFrist} />
              <Tab label={tab.labelSecond} />
            </Tabs>
          </Grid>
        )}
        <Grid item></Grid>
      </Grid>
      <CommonTable rows={rowdata} columns={columnData} sortField={sortField} sortOrder={sortOrder} />
      <CommonModal
        closeIcon
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        handleSubmit={handleDelete}
        title="Do you want to proceed?"
        submitText="PROCEED"
        cancelText="CANCEL"
        isSubmitting={isSubmitting}
      >
        Are you sure you want to Delete ?
        <br />
      </CommonModal>
    </PaperWrapper>
  );
}

export default ListView;
