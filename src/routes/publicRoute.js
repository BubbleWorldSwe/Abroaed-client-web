import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/userContext.js";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { Dna } from "react-loader-spinner";
import { isEmpty } from "../utils/commonUtils.js";

const PublicRoute = ({ component: Component }) => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isEmpty(currentUser)) {
      navigate("/");
    }
  }, [currentUser]);

  if (currentUser != null) {
    return (
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        minHeight={"100vh"}
      >
        <Dna
          visible={true}
          height="100"
          width="100"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </Grid>
    );
  }
  return <Component />;
};

export default PublicRoute;
