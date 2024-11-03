import _ from 'lodash';
import { SIZE_WEIGHTAGE, TRANSACTION_TYPES } from '../constants/appConstants';
import dayjs from 'dayjs';

export const isEmpty = (value, falseStrings = ['']) =>
  value instanceof File
    ? false
    : typeof value === 'undefined' ||
      value === null ||
      Number.isNaN(value) ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      (typeof value === 'string' && value.trim().length === 0) ||
      (typeof value === 'string' && falseStrings.includes(value));

export const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const dayFormatter = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', day: 'numeric' });
  const monthFormatter = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', month: 'short' });
  const yearFormatter = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', year: 'numeric' });

  const day = dayFormatter.format(date);
  const month = monthFormatter.format(date);
  const year = yearFormatter.format(date);

  return `${day} ${month}, ${year}`;
};

export const formatName = (name) => {
  return name.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const getStatusColor = (status, isFabricIssue = false) => {
  if (isFabricIssue) {
    return status === 'Open' ? 'INITIAL' : status === 'Resolved' ? 'PENDING' : 'FINAL';
  }
  return status ? 'FINAL' : 'INITIAL';
};
export const formatTransactionDescription = (transData) => {
  switch (transData.transactionType) {
    case TRANSACTION_TYPES.DUE_CLEARANCE:
      return transData.txnId ? `${transData.paymentMode}-${transData.txnId}` : transData.paymentMode;
    case TRANSACTION_TYPES.LABOUR_CHARGES:
      return transData.orderId ? `Job Cost-${transData.orderId}` : 'Job Cost';
    case TRANSACTION_TYPES.OPENING_BALANCE:
      return transData.transactionType ? transData.transactionType : '';
    default:
      return `${transData.transactionType}${transData.orderId ? '-' + transData.orderId : ''}`;
  }
};

export const formatAmount = (value = 0, symbol = '₹') => {
  if (isNaN(value)) return `${symbol} 0`;
  const formattedValue = Number(value).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return `${symbol} ${formattedValue}`;
};

export const formatDateToISO = (data) => {
  if (!data) return null;
  const date = new Date(data);
  if (isNaN(date.getTime())) return null;
  return date.toISOString();
};

export const formatTodayDate = () => {
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  return formattedDate;
};

export const sortBySizeWeight = (data, sizePath) => {
  return data?.sort((a, b) => {
    if (typeof a == 'string') return SIZE_WEIGHTAGE[a] - SIZE_WEIGHTAGE[b]; // ['M', 'L', 'S']
    let aSize = a,
      bSize = b;
    const keys = sizePath.split('.');
    keys.forEach((key) => {
      aSize = aSize[key];
      bSize = bSize[key];
    });
    return SIZE_WEIGHTAGE[aSize] - SIZE_WEIGHTAGE[bSize];
  });
};

export const sortByColorName = (data = [], colorNamePath) => {
  let groupedData = _.groupBy(data, 'key');
  for (let key in groupedData) {
    groupedData[key] = groupedData[key].sort((a, b) => {
      let aColor = a,
        bColor = b;
      const keys = colorNamePath.split('.');
      keys.forEach((key) => {
        aColor = aColor[key];
        bColor = bColor[key];
      });
      if (aColor === bColor) {
        return SIZE_WEIGHTAGE[a.size] - SIZE_WEIGHTAGE[b.size];
      } else {
        return aColor.localeCompare(bColor);
      }
    });
  }

  let sortedData = [];
  for (let key in groupedData) {
    sortedData = sortedData.concat(groupedData[key]);
  }
  return sortedData;
};

export const groupedColorData = (bundles) => {
  const sizeSet = new Set();
  const groupedPcsByColor = {};
  bundles?.forEach((bundle) => {
    const {
      shade: { name },
      size,
      pcs,
      key
    } = bundle;
    const colorKey = name + '-' + key;
    if (!groupedPcsByColor[colorKey]) {
      groupedPcsByColor[colorKey] = {
        color: name,
        sizes: {}
      };
    }
    if (!groupedPcsByColor[colorKey].sizes[size]) {
      groupedPcsByColor[colorKey].sizes[size] = 0;
    }
    groupedPcsByColor[colorKey].sizes[size] += pcs;
    sizeSet.add(size);
  });
  const sizesArray = Array.from(sizeSet);
  return {
    sizes: sortBySizeWeight(sizesArray, ''),
    data: Object.values(groupedPcsByColor)
  };
};

const getFromAndToDates = (fromDate, toDate) => {
  let fromDateUTC = null,
    toDateUTC = null;
  if (fromDate) {
    const formattedDateFrom = dayjs(fromDate).format('YYYY-MM-DD');
    fromDateUTC = dayjs(formattedDateFrom)
      .subtract(1, 'day')
      .set('hour', 18)
      .set('minute', 30)
      .set('second', 0)
      .set('millisecond', 0)
      .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  }
  if (toDate) {
    const formattedDateTo = dayjs(toDate).format('YYYY-MM-DD');
    toDateUTC = dayjs(formattedDateTo)
      .set('hour', 18)
      .set('minute', 30)
      .set('second', 0)
      .set('millisecond', 0)
      .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  }
  return { fromDateUTC, toDateUTC };
};
export const buildDateQueryString = (fromDate = null, onDate = null, toDate = null) => {
  let queryString = '';
  if (onDate) {
    const { fromDateUTC, toDateUTC } = getFromAndToDates(onDate, onDate);
    queryString += `fromDate=${fromDateUTC}&toDate=${toDateUTC}`;
    return queryString;
  } else {
    const { fromDateUTC, toDateUTC } = getFromAndToDates(fromDate, toDate);
    if (fromDate) {
      queryString += `fromDate=${fromDateUTC}&`;
    }
    if (toDate) {
      queryString += `toDate=${toDateUTC}`;
    }
  }

  return queryString;
};

export const isNumber = (value) => {
  return !isNaN(value);
};
