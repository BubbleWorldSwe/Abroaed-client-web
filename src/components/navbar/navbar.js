import * as React from 'react';
import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { ExpandMore } from '@mui/icons-material';
import { UserContext } from '../../contexts/userContext';
import FactorySwitcher from '../factorySwitcher/factorySwitcher';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const { logout, currentUser, currentFactoryUser } = useContext(UserContext);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isExpanded, setIsExpanded] = React.useState(false);
  let factoryUsers = currentUser.factories.map(({ fid }) => {
    return fid;
  });
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getUsernameInitials = () => {
    let name = currentUser?.name ?? '';

    return name
      .split(' ')
      .map((x) => x[0])
      .join('');
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        height: isExpanded ? 'auto' : '55px',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container>
            {/* Everything other than ManageFactory */}
            <Grid item container xs={11} alignItems={'strech'} justifyContent={'space-between'}>
              {/* Expand Arrow and Logo */}
              <Grid item container xs={12} sm={6} alignItems={'center'} wrap="nowrap" justifyContent={'flex-start'}>
                {/* Expand arrow */}
                <Grid item xs={1} pb={1} sx={{ display: { sm: 'none' } }}>
                  <IconButton size="large" edge="start" color="inherit" onClick={() => setIsExpanded(!isExpanded)}>
                    <ExpandMore />
                  </IconButton>
                </Grid>

                {/* App Logo */}
                <Grid container item xs={11} alignItems={'center'} gap={1}>
                  <Grid item xs={1} textAlign={'right'}>
                    <img
                      alt={'Vastrika'}
                      style={{ width: '23px', height: '23px' }}
                      src="https://d3euaht4t57wqt.cloudfront.net/images/favicon.ico"
                    ></img>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography
                      variant="h6"
                      component="a"
                      href="/"
                      sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        flexGrow: 1 // Add this line
                      }}
                    >
                      Vastrika - Boiler
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              {/* Factory Switcher and Connection String */}
              <Grid item container xs={12} sm={6} alignItems={'strech'} wrap="nowrap" justifyContent={'space-between'}>
                {/* Factory Switcher */}
                <Grid item xs={6} sm={2}>
                  <FactorySwitcher factories={factoryUsers} />
                </Grid>
              </Grid>
            </Grid>

            {/* ManageFactory */}
            <Grid xs={1} item container alignItems={'flex-start'} pt={'6px'} justifyContent={'end'}>
              <Grid item mb={'10px'}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{ bgcolor: '#fff', color: 'rgb(0 0 0 / 87%)', fontWeight: 500, fontFamily: 'sans-serif,unset' }}
                  >
                    {getUsernameInitials()}
                  </Avatar>
                </IconButton>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {currentFactoryUser?.modules?.includes('Factory Management') && (
                    <MenuItem
                      onClick={() => {
                        handleCloseUserMenu();
                        navigate('/manageFactory');
                      }}
                    >
                      <ListItemText sx={{ padding: '5px 10px' }}>Manage Factory</ListItemText>
                    </MenuItem>
                  )}
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                      logout();
                    }}
                  >
                    <ListItemText sx={{ padding: '5px 10px' }}>Logout</ListItemText>
                  </MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
