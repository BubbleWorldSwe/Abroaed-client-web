import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Dna } from 'react-loader-spinner';
import { isEmpty } from '../utils/commonUtils';

const PrivateRoute = ({ component: Component }) => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate('/landingPage');
    }
  }, [currentUser]);
  if (isEmpty(currentUser)) {
    return (
      <Grid container justifyContent={'center'} alignItems={'center'} minHeight={'100vh'}>
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

export default PrivateRoute;
