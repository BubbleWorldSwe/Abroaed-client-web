import { Grid, Paper } from "@mui/material";

const PaperWrapper = ({ children, xs = 12, sm = 9, md = 8, lg = 7,bgc }) => {
  return (
    <Grid container justifyContent={"start"}>
      <Grid item xs={xs} sm={sm} md={md} lg={lg} sx={{ padding: 0 }}>
        <Paper style={{ padding: "25px", backgroundColor:bgc }}>{children}</Paper>
      </Grid>
    </Grid>
  );
};

export default PaperWrapper;
