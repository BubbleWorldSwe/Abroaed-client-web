import React, { useEffect, useState } from 'react';
import {
  IconButton,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography
} from '@mui/material';
import { FilterList } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ActiveFiltersPanel } from './ActiveFilters';
import FilterPopover from './FilterPopover';
import moment from 'moment';
import { formatAmount, isNumber } from '../../utils/commonUtils';

const CommonTable = ({
  columns,
  rows = [],
  sortField = '',
  sortOrder = 'asc',
  hideFilters = false,
  disableSort = false,
  disablePagination = false
}) => {
  const navigate = useNavigate();
  const [data, setData] = useState(rows);
  const [filters, setFilters] = useState({});
  const [activeFilter, setActiveFilter] = useState(null);
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [order, setOrder] = useState(sortOrder);
  const [orderBy, setOrderBy] = useState(sortField);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  // Handle pagination page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (field, order, tableData) => {
    const dataToSort = tableData || data;
    const sortedData = [...dataToSort].sort((a, b) => {
      let valueA = a[field];
      let valueB = b[field];
      if (
        typeof valueA === 'string' &&
        typeof valueB === 'string' &&
        isNumber(valueA.split('-')[1]) &&
        isNumber(valueB.split('-')[1])
      ) {
        valueA = Number(valueA.split('-')[1]);
        valueB = Number(valueB.split('-')[1]);
      }
      if (order === 'asc') {
        return valueA < valueB ? -1 : 1;
      } else {
        return valueA > valueB ? -1 : 1;
      }

    });
    setData(sortedData);
  };

  useEffect(() => {
    setData(rows);
    setTimeout(() => {
      handleSort(orderBy, order, rows);
    });
  }, [rows]);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    handleSort(property, isAsc ? 'desc' : 'asc');
  };

  const renderCell = (column, row) => {
    const value = row[column.field];
    if (column.renderCell) {
      return column.renderCell(row);
    }
    if (column.link) {
      return (
        <Link
          component="button"
          variant="body2"
          onClick={(event) => {
            event.preventDefault();
            const path = column.link.params ? column.link.path + '/' + column.link.params(row) : column.link.path;
            const state = column.link.state ? column.link.state(row) : {};
            navigate(path, { state });
          }}
        >
          {value}
        </Link>
      );
    }
    if (column.type == 'date') {
      return moment(value).format('D MMM, YYYY');
    }
    if (column.type == 'currency') {
      return formatAmount(value);
    }
    if (column.headerName == 'Pcs' || column.headerName == 'Available Pcs') {
      return `${value} Pcs`;
    }
    return value;
  };

  const openFilterPopover = (event, field) => {
    setActiveFilter(field);
    setPopoverAnchor(event.currentTarget);
  };

  const closeFilterPopover = () => {
    setActiveFilter(null);
    setPopoverAnchor(null);
  };

  const applyFilter = (field, filterValue) => {
    setFilters((prev) => ({
      ...prev,
      [field]: filterValue
    }));
    closeFilterPopover();
  };

  const filteredData = data.filter((row) => {
    return Object.entries(filters).every(([field, filter]) => {
      const value = row[field];
      const column = columns.find((col) => col.field === field);

      switch (column.type) {
        case 'number':
        case 'currency':
          if (filter.type === 'equals') return value === Number(filter.value);
          if (filter.type === 'greaterThan') return value > Number(filter.value);
          if (filter.type === 'lessThan') return value < Number(filter.value);
          break;
        case 'string':
          if (filter.type === 'contains') return value.toLowerCase().includes(filter.value.toLowerCase());
          if (filter.type === 'startsWith') return value.toLowerCase().startsWith(filter.value.toLowerCase());
          break;
        case 'date':
          const date = new Date(value);
          date.setHours(0, 0, 0, 0);
          if (filter.type === 'byDate') return date.toDateString() === new Date(filter.value).toDateString();
          if (filter.type === 'dateRange') {
            const start = new Date(filter.value[0]);
            const end = new Date(filter.value[1]);
            if (!filter.value[0]) return date <= end;
            if (!filter.value[1]) return date >= start;
            return date >= start && date <= end;
          }
          break;
        case 'boolean':
          const mappedValue = value ? 'resolved' : 'open';
          if (filter.type === 'contains') return mappedValue.includes(filter.value.toLowerCase());
          if (filter.type === 'startsWith') return mappedValue.toLowerCase().startsWith(filter.value.toLowerCase());
          break;
        default:
          return true;
      }
    });
  });

  const paginatedData = disablePagination
    ? filteredData
    : filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      <ActiveFiltersPanel activeFilters={filters} onFilterChange={(newFilters) => setFilters(newFilters)} />
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow style={{ backgroundColor: '#d5d6d7' }}>
              {columns?.map((column, columnIndex) =>
                column.type == 'actions' ? (
                  <TableCell key={columnIndex}>{column.headerName}</TableCell>
                ) : (
                  <TableCell key={columnIndex} width={column.width || 'auto'}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <TableSortLabel
                        active={orderBy === column.field}
                        direction={orderBy === column.field ? order : 'asc'}
                        onClick={() => handleRequestSort(column.field)}
                        disabled={disableSort}
                      >
                        {column.headerName}
                      </TableSortLabel>
                      {!hideFilters && (
                        <Tooltip title={`Filter by ${column.headerName}`} placement="top">
                          <IconButton size="small" onClick={(e) => openFilterPopover(e, column.field)}>
                            <FilterList fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      )}
                    </div>
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.length ? (
              paginatedData?.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns?.map((column, columnIndex) => (
                    <TableCell key={columnIndex}>{renderCell(column, row)}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell align="center" colSpan={8}>
                  <Typography>No Records Found</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {!disablePagination && filteredData.length > 15 && (
          <TablePagination
            component="div"
            count={filteredData.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 15, 25, 50]}
            labelRowsPerPage="Rows per page"
          />
        )}
        <FilterPopover
          column={columns.find((col) => col.field === activeFilter)}
          activeFilterValue={filters[activeFilter]}
          onApply={(filterValue) => applyFilter(activeFilter, filterValue)}
          onClose={closeFilterPopover}
          anchorEl={popoverAnchor}
        />
      </TableContainer>
    </>
  );
};

export default CommonTable;
