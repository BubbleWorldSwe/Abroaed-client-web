import React from 'react';
import CommonTable from './CommonTable';
import ActionsMenu from './ActionsMenu';
import { toast } from 'react-toastify';

const CommonTableExample = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York', dob: '2024-07-21', balance: 1000, status: 'Active' },
    { id: 2, name: 'Jane Doe', age: 30, city: 'Los Angeles', dob: '2024-07-22', balance: 2000, status: 'Inactive' },
    { id: 3, name: 'Alice', age: 35, city: 'Chicago', dob: '1986-01-01', balance: 7000, status: 'Inactive' },
    { id: 4, name: 'Bob', age: 40, city: 'Houston', dob: '1981-01-01', balance: 600, status: 'Active' },
    { id: 5, name: 'Charlie', age: 45, city: 'Phoenix', dob: '1976-01-01', balance: 400, status: 'Pending' }
  ];

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 120,
      link: {
        path: '/userDetail',
        state: (row) => ({ userId: row.id })
      },
      type: 'number'
    },
    { field: 'name', headerName: 'Name', type: 'string' },
    { field: 'age', headerName: 'Age', width: 120, type: 'number' },
    { field: 'city', headerName: 'City', type: 'string' },
    { field: 'dob', headerName: 'Date of Birth', type: 'date' },
    { field: 'balance', headerName: 'Balance', type: 'currency' },
    {
      field: 'status',
      headerName: 'Status',
      type: 'string',
      renderCell: (row) => (
        <span
          style={{ color: row.status === 'Active' ? 'green' : row.status === 'Inactive' ? 'indianred' : 'darkorange' }}
        >
          {row.status}
        </span>
      )
    },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      renderCell: (row) => {
        const actionItems = [];
        if (row.status === 'Active') {
          actionItems.push({ label: 'Deactivate', action: () => toast.success('Deactivate clicked!') });
          actionItems.push({ label: 'Edit', action: () => toast.success('Edit clicked!') });
        }
        if (row.status === 'Inactive') {
          actionItems.push({ label: 'Activate', action: () => toast.success('Activate clicked!') });
          actionItems.push({ label: 'Delete', action: () => toast.success('Delete clicked!') });
        }

        return <ActionsMenu actionItems={actionItems} />;
      }
    }
  ];

  return <CommonTable rows={data} columns={columns} sortField="name" sortOrder="desc" />;
};

export default CommonTableExample;
