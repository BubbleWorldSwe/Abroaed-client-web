import React from 'react';
import { Cancel } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { isEmpty } from '../../utils/commonUtils';
import moment from 'moment';

export function ActiveFiltersPanel({ activeFilters = {}, onFilterChange }) {
  const getOperatorText = (selectedField) => {
    if (selectedField.type === 'startsWith') {
      return '(Starts with)';
    }
    if (selectedField.type === 'contains') {
      return '(Contains)';
    }
    if (selectedField.type === 'byDate') {
      return '(By date)';
    }
    if (selectedField.type === 'dateRange') {
      if (selectedField.value[0] && selectedField.value[1]) {
        return '(Between)';
      }
      if (selectedField.value[0]) {
        return '(On or After)';
      }
      if (selectedField.value[1]) {
        return '(On or Before)';
      }
    }
    if (selectedField.type === 'equals') {
      return '(Equals)';
    }
    if (selectedField.type === 'greaterThan') {
      return '(Greater than)';
    }
    if (selectedField.type === 'lessThan') {
      return '(Less than)';
    }
    return '';
  };

  const dateFormatter = (date) => {
    return moment(date).format('MMM DD, YYYY');
  };

  const displayValue = (item) => {
    if (item?.type === 'byDate') {
      return dateFormatter(item?.value);
    }
    if (item?.type === 'dateRange') {
      if (!item?.value[0]) {
        return dateFormatter(item?.value?.[1]);
      }
      if (!item?.value[1]) {
        return dateFormatter(item?.value?.[0]);
      }
      return `${dateFormatter(item?.value?.[0])} - ${dateFormatter(item?.value?.[1])}`;
    }
    return item?.value;
  };

  const onResetFilters = () => {
    onFilterChange({});
  };

  const onCancelFilter = (item) => {
    const filters = { ...activeFilters };
    delete filters[item.field];
    onFilterChange(filters);
  };

  return (
    <div>
      {!isEmpty(activeFilters) && (
        <div style={{ padding: '16px 0px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '8px',
              alignItems: 'center'
            }}
          >
            <Typography fontSize="14px" fontWeight={500} lineHeight="20px" color={'black'}>
              Filtered By:
            </Typography>
            {Object.keys(activeFilters)?.map((field, index) => {
              const selectedField = activeFilters[field];
              if (selectedField.value !== '') {
                return (
                  <div
                    key={index}
                    style={{
                      paddingLeft: '8px',
                      display: 'flex',
                      backgroundColor: '#dedede',
                      alignItems: 'center',
                      height: '30px',
                      borderRadius: '4px'
                    }}
                  >
                    <Typography
                      style={{
                        color: 'black',
                        fontSize: '13px',
                        fontWeight: 400,
                        lineHeight: '20px'
                      }}
                    >
                      {selectedField?.headerName} {getOperatorText(selectedField)}:{' '}
                      <span
                        style={{
                          color: 'black',
                          fontSize: '14px',
                          fontWeight: 500,
                          lineHeight: '21px'
                        }}
                      >
                        {displayValue(selectedField)}
                      </span>
                    </Typography>
                    <IconButton onClick={() => onCancelFilter(selectedField)}>
                      <Cancel sx={{ color: '#414447', fontSize: '16px' }} />
                    </IconButton>
                  </div>
                );
              } else {
                return null;
              }
            })}
            <div
              style={{
                cursor: 'pointer',
                padding: '4px 12px'
              }}
            >
              <Typography
                onClick={onResetFilters}
                style={{
                  textDecorationLine: 'underline',
                  color: 'black',
                  lineHeight: '21px',
                  fontSize: '14px',
                  fontWeight: 500
                }}
              >
                Reset
              </Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
