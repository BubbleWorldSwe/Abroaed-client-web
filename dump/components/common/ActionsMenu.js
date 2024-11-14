import { MoreVert } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

const ActionsMenu = ({ actionItems = [] }) => {
  const [menuAnchor, setMenuAnchor] = useState(null);

  return actionItems.length ? (
    <>
      <IconButton size="small" sx={{ paddingY: '3.5px' }} onClick={(event) => setMenuAnchor(event.currentTarget)}>
        <MoreVert fontSize="small" />
      </IconButton>
      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={() => setMenuAnchor(null)}>
        {actionItems.map((item, index) => (
          <MenuItem
            //   dense
            sx={{ paddingY: '2px' }}
            key={index}
            onClick={() => {
              setMenuAnchor(null);
              item.action();
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  ) : (
    <IconButton sx={{ visibility: 'hidden' }} size="small">
      <MoreVert fontSize="small" />
    </IconButton>
  );
};

export default ActionsMenu;
