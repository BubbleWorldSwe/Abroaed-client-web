import React, { useContext, useState, useEffect } from 'react';
import { Grid, Typography, Tooltip, Stack } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import FabricOrderService from './../../services/purchase/fabricOrdersService';
import PaperCard from '../common/PaperCard';
import PaperWrapper from '../paperWrapper/paperWrapper';
import ArrowHeader from '../common/ArrowHeader';
import TradingOrderService from '../../services/purchase/tradingOrderService';
import PurchaseRawMaterialService from '../../services/purchase/purchaseRawMaterialService';
import { toast } from 'react-toastify';
import CommonTable from '../common/CommonTable';
import TabSwitcher from '../common/TabSwitch';

const PurchaseHistory = () => {
  const [activeTab, setActiveTab] = useState('Fabrics');
  const location = useLocation();
  const user = useContext(UserContext);
  const purchaseRawMaterialService = new PurchaseRawMaterialService(user);
  const fabricOrderService = new FabricOrderService(user);
  const tradingOrderService = new TradingOrderService(user);
  const supplierData = location.state.supplierData;
  const [rawMaterialOrderData, setRawMaterialOrderData] = useState([]);
  const [fabricOrderData, setFabricOrderData] = useState([]);
  const [tradingOrderData, setTradingOrderData] = useState([]);
  const getRawMaterialBySupplierId = async () => {
    try {
      const response = await purchaseRawMaterialService.rowMaterialBySupplierId(supplierData?._id);
      setRawMaterialOrderData(response);
    } catch (error) {
      toast.error(error?.message);
    }
  };

  const getTradingBySupplierId = async () => {
    try {
      const response = await tradingOrderService.getTradingBySupplierId(supplierData?._id);
      setTradingOrderData(response);
    } catch (error) {
      toast.error(error?.message ?? error);
    }
  };

  const getHistoryBySupplierId = async () => {
    try {
      let result = await fabricOrderService.getFabricOrdersBySupplierId(supplierData._id);
      setFabricOrderData(result);
    } catch (error) {}
  };

  useEffect(() => {
    getHistoryBySupplierId();
    getTradingBySupplierId();
    getRawMaterialBySupplierId();
  }, []);

  useEffect(() => {
    if (fabricOrderData.length) setActiveTab('Fabrics');
    else if (tradingOrderData.length) setActiveTab('Tradings');
    else if (rawMaterialOrderData.length) setActiveTab('RawMaterial');
  }, [fabricOrderData, tradingOrderData, rawMaterialOrderData]);

  const fabricColumns = [
    {
      field: 'fabricOrderId',
      headerName: 'Order ID',
      link: {
        path: '/purchaseDetail',
        state: (row) => ({ fabricOrderId: row?._id })
      },
      type: 'string'
    },
    {
      field: 'orderDate',
      headerName: 'Date',
      type: 'date'
    },

    {
      field: 'fabrics',
      headerName: 'Fabrics',
      type: 'string',
      renderCell: (row) => row.fabrics.join(', ')
    },
    {
      field: 'rollCount',
      headerName: 'Rolls',
      type: 'number'
    },
    {
      field: 'amount',
      headerName: 'Amount',
      type: 'currency'
    }
  ];

  const tradingStockColumns = [
    {
      field: 'tradingOrderId',
      headerName: 'Order ID',
      link: {
        path: '/tradingStockView',
        params: (row) => row?._id
      },
      type: 'string'
    },
    {
      field: 'orderDate',
      headerName: 'Date',
      type: 'date'
    },
    {
      field: 'lotCount',
      headerName: 'Lot Count',
      type: 'number'
    },
    {
      field: 'totalPcs',
      headerName: 'Pcs',
      type: 'number'
    },
    {
      field: 'amount',
      headerName: 'Amount',
      type: 'currency'
    }
  ];

  const rawMaterialColumns = [
    {
      field: 'rawMaterialOrderId',
      headerName: 'Order ID',
      link: {
        path: '/purchaseRawMaterialDetail',
        state: (row) => ({ OrderId: row?._id })
      },
      type: 'string'
    },
    {
      field: 'orderDate',
      headerName: 'Date',
      type: 'date'
    },

    {
      field: 'items',
      headerName: 'Items',
      type: 'string',
      renderCell: (row) => (
        <Tooltip
          title={
            <div>
              <Typography variant="body2">
                <strong>{row?.items?.join(',')}</strong>
              </Typography>
            </div>
          }
          placement="right"
        >
          {row.items.length}
        </Tooltip>
      )
    },
    {
      field: 'amount',
      headerName: 'Amount',
      type: 'currency'
    }
  ];
  const tabs = [
    {
      label: 'Fabrics',
      value: 'Fabrics',
      condition: fabricOrderData?.length > 0,
      backgroundColor: '#28282B',
      hoverColor: '#1f1f1f'
    },
    {
      label: 'Trading Stock',
      value: 'Tradings',
      condition: tradingOrderData?.length > 0,
      backgroundColor: '#28282B',
      hoverColor: '#1f1f1f'
    },
    {
      label: 'Raw Material',
      value: 'RawMaterial',
      condition: rawMaterialOrderData?.length > 0,
      backgroundColor: '#28282B',
      hoverColor: '#1f1f1f'
    }
  ];

  return (
    <PaperWrapper md={12} lg={12} sm={12}>
      <ArrowHeader title={'Purchase History'} />
      <Grid container spacing={3} alignItems="center" marginTop={2}>
        <Grid item xs={4}>
          <PaperCard text={'Name'} value={supplierData.name} />
        </Grid>
        <Grid item xs={4}>
          <PaperCard text={'Contact'} value={supplierData.contact || "_"} />
        </Grid>
        <Grid item xs={4}>
          <PaperCard text={'Balance'} value={supplierData.balance} isRupee={true} />
        </Grid>
      </Grid>
      <Stack direction="row" spacing={0.3} justifyContent="center" alignItems="center" mt={2} mb={2}>
        <TabSwitcher
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          containerProps={{
            sx: {
              mt: 2,
              mb: 2
            }
          }}
        />
      </Stack>
      {activeTab === 'Fabrics' && fabricOrderData.length > 0 && (
        <CommonTable
          rows={fabricOrderData}
          columns={fabricColumns}
          sortField=""
          sortOrder="desc"
          hideFilters
          disableSort
        />
      )}
      {activeTab === 'Tradings' && tradingOrderData?.length > 0 && (
        <CommonTable
          rows={tradingOrderData}
          columns={tradingStockColumns}
          sortField=""
          sortOrder="desc"
          hideFilters
          disableSort
        />
      )}
      {activeTab === 'RawMaterial' && rawMaterialOrderData?.length > 0 && (
        <CommonTable
          rows={rawMaterialOrderData}
          columns={rawMaterialColumns}
          sortField=""
          sortOrder="desc"
          hideFilters
          disableSort
        />
      )}
    </PaperWrapper>
  );
};

export default PurchaseHistory;
