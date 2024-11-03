import React, { useState } from 'react';
import {
  Popover,
  Box,
  TextField,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const FilterPopover = ({ column, onApply, onClose, anchorEl, activeFilterValue = {} }) => {
  if (!column) return null;

  const filterOptions = () => {
    switch (column.type) {
      case 'number':
      case 'currency':
        return [
          { value: 'equals', label: 'Equals', defaultChecked: true },
          { value: 'greaterThan', label: 'Greater Than' },
          { value: 'lessThan', label: 'Less Than' }
        ];
      case 'string':
        return [
          { value: 'contains', label: 'Contains', defaultChecked: true },
          { value: 'startsWith', label: 'Starts With' }
        ];
      case 'date':
        return [
          { value: 'byDate', label: 'By Date', defaultChecked: true },
          { value: 'dateRange', label: 'Date Range' }
        ];
      case 'boolean':
        return [
          { value: 'contains', label: 'Contains', defaultChecked: true },
          { value: 'startsWith', label: 'Starts With' }
        ];
      default:
        return null;
    }
  };

  const filterTypes = filterOptions();
  const defaultFilterType = filterTypes.find((option) => option.defaultChecked)?.value;

  const [filterType, setFilterType] = useState(activeFilterValue?.type || defaultFilterType);
  const [filterValue, setFilterValue] = useState(activeFilterValue?.value || '');

  const handleApply = () => {
    onApply({
      type: filterType || defaultFilterType,
      value: filterValue,
      headerName: column.headerName,
      field: column.field
    });
    onClose();
  };
  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
    >
      <Box sx={{ p: 2, width: 300 }}>
        {column.headerName && (
          <Box sx={{ mb: 1 }}>
            <Typography variant="subtitle2" fontSize={16}>
              {column.headerName}
            </Typography>
          </Box>
        )}
        <FormControl component="fieldset" fullWidth sx={{ mb: 1 }}>
          <RadioGroup
            name="filter-type"
            value={filterType}
            defaultValue={defaultFilterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            {filterTypes.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio size="small" />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl>

        {column.type !== 'date' && (
          <TextField
            required
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleApply();
              }
            }}
            size="small"
            fullWidth
            placeholder="Type here..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            sx={{ mb: 2 }}
          />
        )}

        {column.type === 'date' && filterType === 'byDate' && (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Date"
              value={filterValue ? dayjs(filterValue) : null}
              onChange={(e) => setFilterValue(new Date(e))}
              sx={{ mb: 2 }}
              format="DD/MM/YYYY"
              autoFocus
              slotProps={{ textField: { size: 'small' } }}
            />
          </LocalizationProvider>
        )}

        {column.type === 'date' && filterType === 'dateRange' && (
          <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Start Date"
                value={filterValue?.[0] ? dayjs(filterValue[0]) : null}
                onChange={(e) => setFilterValue([new Date(e), filterValue[1]])}
                sx={{ mb: 2 }}
                format="DD/MM/YYYY"
                autoFocus
                slotProps={{ textField: { size: 'small' } }}
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="End Date"
                value={filterValue?.[1] ? dayjs(filterValue[1]) : null}
                onChange={(e) => setFilterValue([filterValue[0], new Date(e)])}
                sx={{ mb: 2 }}
                format="DD/MM/YYYY"
                slotProps={{ textField: { size: 'small' } }}
              />
            </LocalizationProvider>
          </>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onClose} sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button onClick={handleApply} variant="contained" disabled={!filterValue}>
            Apply
          </Button>
        </Box>
      </Box>
    </Popover>
  );
};

export default FilterPopover;
