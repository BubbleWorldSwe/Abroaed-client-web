import * as requestManager from '../../utils/apiUtils';
import { buildDateQueryString } from '../../utils/commonUtils';

export default class DashboardService {
  constructor(userContext) {
    this._currentFactory = userContext.currentFactory;
  }

  async getSaleSummary({ fromDate = null, onDate = null, toDate = null } = {}) {
    try {
      const response = await requestManager.apiGet(
        `dashboard/f/${this._currentFactory._id}/sale?${buildDateQueryString(fromDate, onDate, toDate)}`
      );
      const modifiedData = response?.data?.data.map((item) => ({
        ...item,
        buyer: item.buyerId.name
      }));
      return {
        ...response?.data,
        data: modifiedData
      };
    } catch (error) {
      throw error;
    }
  }

  async getPurchaseSummary({ fromDate = null, onDate = null, toDate = null } = {}) {
    try {
      const response = await requestManager.apiGet(
        `dashboard/f/${this._currentFactory._id}/purchase?${buildDateQueryString(fromDate, onDate, toDate)}`
      );
      const modifiedData = response?.data?.data.map((item) => ({
        ...item
      }));
      return {
        ...response?.data,
        data: modifiedData
      };
    } catch (error) {
      throw error;
    }
  }

  async getCollectionSummary({ fromDate = null, onDate = null, toDate = null } = {}) {
    try {
      const response = await requestManager.apiGet(
        `dashboard/f/${this._currentFactory._id}/collections?${buildDateQueryString(fromDate, onDate, toDate)}`
      );
      const modifiedData = response?.data?.data.map((item) => ({
        ...item
      }));
      return {
        ...response?.data,
        data: modifiedData
      };
    } catch (error) {
      throw error;
    }
  }

  async getPaymentSummary({ fromDate = null, onDate = null, toDate = null } = {}) {
    try {
      const response = await requestManager.apiGet(
        `dashboard/f/${this._currentFactory._id}/payments?${buildDateQueryString(fromDate, onDate, toDate)}`
      );
      const modifiedData = response?.data?.data.map((item) => ({
        ...item
      }));
      return {
        ...response?.data,
        data: modifiedData
      };
    } catch (error) {
      throw error;
    }
  }
}
