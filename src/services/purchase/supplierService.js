import * as requestManager from '../../utils/apiUtils';

export default class SupplierService {
  constructor(userContext) {
    this._currentFactory = userContext.currentFactory;
  }

  async getAllSuppliers() {
    const response = await requestManager.apiGet(`/f/${this._currentFactory._id}/supplier?all=true`);
    return response?.data?.map((supplier) => ({ ...supplier, id: supplier._id })) ?? [];
  }
  async getSuppliers() {
    const response = await requestManager.apiGet(`/f/${this._currentFactory._id}/supplier`);
    return response?.data?.map((supplier) => ({ ...supplier, id: supplier._id })) ?? [];
  }

  async addSupplier(newSupplierData) {
    try {
      const response = await requestManager.apiPost(`/f/${this._currentFactory._id}/supplier`, newSupplierData);
      return response?.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteSupplier(supplierId) {
    try {
      const response = await requestManager.apiDelete(`/f/${this._currentFactory._id}/supplier/${supplierId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async updateSupplier(supplierId, updatedSupplierData) {
    try {
      const response = await requestManager.apiPut(
        `/f/${this._currentFactory._id}/supplier/${supplierId}`,
        updatedSupplierData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getSupplierById(supplierId) {
    try {
      const response = await requestManager.apiGet(`/f/${this._currentFactory._id}/supplier/${supplierId}`);

      return response?.data;
    } catch (error) {
      throw error;
    }
  }
  async getSupplierTransaction(supplierId) {
    try {
      const response = await requestManager.apiGet(
        `/f/${this._currentFactory._id}/supplier/${supplierId}/transactions`
      );
      return response?.data;
    } catch (error) {
      throw error;
    }
  }

  async clearDues(clearDueData, supplierId) {
    try {
      const response = await requestManager.apiPost(
        `/f/${this._currentFactory._id}/supplier/${supplierId}/clear-dues`,
        clearDueData
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
  async deleteSupplierTransaction(supplierId, transactionId) {
    try {
      const response = await requestManager.apiDelete(
        `/f/${this._currentFactory._id}/supplier/${supplierId}/transactions/${transactionId}`
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
  async updateSupplierTransaction(updateData, supplierId, transactionId) {
    try {
      const response = await requestManager.apiPut(
        `/f/${this._currentFactory._id}/supplier/${supplierId}/transactions/${transactionId}`,
        updateData
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}
