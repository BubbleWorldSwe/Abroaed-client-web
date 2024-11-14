import React from 'react';
import { Stack, Button } from '@mui/material';

const TabSwitcher = ({ tabs, activeTab, onTabChange, containerProps }) => {
  return (
    <Stack direction="row" spacing={0.3} justifyContent="center" alignItems="center" {...containerProps}>
      {tabs.map(
        (tab) =>
          tab.condition !== false && (
            <Button
              key={tab.value}
              sx={{
                backgroundColor: activeTab === tab.value ? tab.backgroundColor : '#f5f5f5',
                color: activeTab === tab.value ? '#fff' : 'inherit',
                padding: '10px 35px',
                borderRadius: '30px',
                textTransform: 'capitalize',
                transition: 'background-color 0.3s, color 0.3s',
                '&:hover': {
                  backgroundColor: activeTab === tab.value ? tab.backgroundColor : '#e0e0e0'
                },
                ml: tab.value === 'labours' ? '3px' : '0'
              }}
              onClick={() => onTabChange(tab.value)}
            >
              {tab.label}
            </Button>
          )
      )}
    </Stack>
  );
};

export default TabSwitcher;
