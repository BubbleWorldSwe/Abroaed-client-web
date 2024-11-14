import React, { useEffect, useState } from 'react';
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const SidebarItem = ({
  label,
  link,
  additionalLinks = [],
  children,
  isSidebarExpanded,
  setIsSidebarExpanded,
  subitems = [],
  isMainItem,
  currentFactoryUser
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [subItemsExpanded, setSubItemsExpanded] = useState(false);
  const isHighlighted = () => {
    if (isMainItem) {
      if (location.pathname === link) return true;
      if (subitems.find((s) => s.link === location.pathname) && !isSidebarExpanded) return true;
    } else {
      if (
        isSidebarExpanded &&
        (location.pathname === link || additionalLinks.includes(location.pathname.split('/')[1]))
      )
        return true;
    }
  };

  useEffect(() => {
    if (isSidebarExpanded) {
      if (
        isMainItem &&
        subitems.find(
          (s) =>
            s.link == location.pathname ||
            subitems.flatMap((x) => x.additionalLinks).includes(location.pathname.split('/')[1])
        )
      ) {
        setSubItemsExpanded(true);
      }
    } else {
      setSubItemsExpanded(false);
    }
  }, [isSidebarExpanded]);
  return (
    <>
      <ListItem
        sx={{
          padding: 0,
          backgroundColor: isHighlighted() ? '#dfdfdf87' : 'unset',
          borderLeft: isHighlighted() ? '4px solid #3f51b5' : 'unset'
        }}
      >
        <ListItemButton
          dense
          sx={{ padding: isMainItem ? '12px' : '8px', overflowX: 'hidden' }}
          onClick={() => {
            if (subitems && subitems.length > 0) {
              setSubItemsExpanded(!subItemsExpanded);
              setIsSidebarExpanded(true);
            } else {
              navigate(link);
              if (isSmallerScreen) {
                setIsSidebarExpanded(false);
              }
            }
          }}
        >
          <ListItemIcon>{children}</ListItemIcon>
          {isSidebarExpanded && (
            <>
              <ListItemText primary={label} style={{ whiteSpace: 'nowrap' }} />
              {isSidebarExpanded && isMainItem && subitems.length && subItemsExpanded ? <ExpandLess /> : ''}
              {isSidebarExpanded && isMainItem && subitems.length && !subItemsExpanded ? <ExpandMore /> : ''}
            </>
          )}
        </ListItemButton>
      </ListItem>
      {subitems && subitems.length > 0 && (
        <Collapse in={subItemsExpanded} timeout="auto" unmountOnExit>
          <List sx={{ paddingLeft: 0, paddingBottom: 0 }}>
            {subitems
              .filter((s) => !s.module || currentFactoryUser.modules.includes(s.module))
              .map((subitem, index) => (
                <SidebarItem
                  key={index + 1}
                  label={subitem.label}
                  link={subitem.link}
                  additionalLinks={subitem.additionalLinks}
                  isSidebarExpanded={isSidebarExpanded}
                  setIsSidebarExpanded={setIsSidebarExpanded}
                >
                  {subitem.icon}
                </SidebarItem>
              ))}
          </List>
        </Collapse>
      )}
      {/* <Divider /> */}
    </>
  );
};

export default SidebarItem;
