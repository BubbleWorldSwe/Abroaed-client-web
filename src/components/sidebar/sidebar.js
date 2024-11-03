import { useContext, useState } from 'react';
import { Drawer, IconButton, List, Toolbar } from '@mui/material';
import {
  ChevronLeftRounded,
  ChevronRightRounded,
  CurrencyExchangeTwoTone,
  FactoryOutlined,
  Group,
  GroupAddTwoTone
} from '@mui/icons-material';
import Box from '@mui/material/Box';
import SidebarItem from './sidebarItem';
import { UserContext } from '../../contexts/userContext';
import { styled, useTheme } from '@mui/material/styles';

const ArrowContainer = styled(Box, {
  shouldForwardProp: (prop) => !['isSidebarExpanded', 'isHovered', 'isSmallerScreen'].includes(prop)
})(({ isSidebarExpanded, isHovered, isSmallerScreen }) => ({
  bottom: '0px',
  position: 'fixed',
  top: '56px',
  width: '24px',
  zIndex: 1200,
  left: isSidebarExpanded ? '248px' : '59px',
  transition: 'opacity 0.5s ease, left 0.5s ease',
  opacity: isHovered || isSmallerScreen ? 1 : 0
}));

const ArrowIconButton = styled(IconButton)(({ theme }) => ({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  backgroundColor: '#F1F5FC',
  position: 'absolute',
  top: '50px',
  cursor: 'pointer',
  transform: 'translateX(-50%)',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: '#fff'
  }
}));

const Separator = styled('div')({
  backgroundColor: '#2c476347',
  opacity: '0.6',
  position: 'relative',
  left: '0',
  width: '2px',
  height: '100%'
});

const Sidebar = ({ isSidebarExpanded, setIsSidebarExpanded, isSmallerScreen }) => {
  const theme = useTheme();
  const { currentFactoryUser } = useContext(UserContext);
  const [isHovered, setIsHovered] = useState(false);

  const allItems = [
    {
      label: 'Suppliers',
      icon: <GroupAddTwoTone />,
      modules: ['Suppliers'],
      link: '/suppliers',
      isMainItem: true
    },
    {
      label: 'Transactions',
      icon: <CurrencyExchangeTwoTone />,
      modules: ['Transactions'],
      subitems: [{ label: 'Make Payment', link: '/makePayment' }],
      isMainItem: true
    },

    {
      label: 'Factories',
      icon: <FactoryOutlined />,
      subitems: [{ label: 'All Factories', link: '/factories' }],
      modules: ['Super Admin'],
      isMainItem: true
    },
    {
      label: 'Team/Staff',
      icon: <Group />,
      modules: ['User Management'],
      subitems: [
        { label: 'All Users', link: '/users', additionalLinks: ['edit-user'] },
        { label: 'Add User', link: '/add-user' }
      ],
      isMainItem: true
    }
  ];

  const userItems = currentFactoryUser
    ? allItems.filter((item) => item.modules.some((module) => currentFactoryUser.modules.includes(module)))
    : allItems;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ background: theme.palette.background.default, height: '100%' }}
    >
      <Drawer
        variant="permanent"
        open={isSidebarExpanded}
        PaperProps={{
          sx: {
            background: theme.palette.background.default
          }
        }}
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: isSidebarExpanded ? 250 : 60,
            transition: 'width 0.5s ease',
            boxSizing: 'border-box'
          }
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', background: theme.palette.background.paper }}>
          <List sx={{ pt: 0 }}>
            {userItems.map(({ label, icon, link, subitems, isMainItem }, index) => (
              <SidebarItem
                key={index + 1}
                label={label}
                link={link}
                isSidebarExpanded={isSidebarExpanded}
                setIsSidebarExpanded={setIsSidebarExpanded}
                subitems={subitems}
                isMainItem={isMainItem}
                currentFactoryUser={currentFactoryUser}
              >
                {icon}
              </SidebarItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <ArrowContainer isSidebarExpanded={isSidebarExpanded} isHovered={isHovered} isSmallerScreen={isSmallerScreen}>
        {!isSmallerScreen && <Separator />}
        {isSidebarExpanded ? (
          <ArrowIconButton onClick={() => setIsSidebarExpanded(false)}>
            <ChevronLeftRounded />
          </ArrowIconButton>
        ) : (
          <ArrowIconButton onClick={() => setIsSidebarExpanded(true)}>
            <ChevronRightRounded />
          </ArrowIconButton>
        )}
      </ArrowContainer>
    </div>
  );
};

export default Sidebar;
