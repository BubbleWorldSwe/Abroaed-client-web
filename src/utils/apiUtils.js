import axios from 'axios';
import { BASE_API_PATH } from '../constants/appConstants';

function getHeaders() {
  return { 'Content-Type': 'application/json' };
}

// any status code inside response.data.status that lies within the range of [200...299] will be a valid response
const handleResponse = (response, resolve, reject) => {
  if (!response?.status || typeof response.status !== 'number' || (response.status >= 200 && response.status < 300)) {
    resolve(response);
  } else {
    reject(response);
  }
};

function apiGet(url, options = {}) {
  const finalUrl = BASE_API_PATH + url;
  return new Promise((resolve, reject) => {
    axios
      .get(finalUrl, {
        headers: getHeaders(),
        ...options,
        withCredentials: true
      })
      .then((response) => handleResponse(response?.data, resolve, reject))
      .catch((error) => {
        reject(error.response?.data);
      });
  });
}

function apiPost(url, body, options = {}) {
  const finalUrl = BASE_API_PATH + url;
  return new Promise((resolve, reject) => {
    return axios
      .post(finalUrl, body, {
        headers: getHeaders(),
        ...options,
        withCredentials: true
      })
      .then((response) => handleResponse(response?.data, resolve, reject))
      .catch((error) => {
        reject(error.response?.data);
      });
  });
}

function apiPut(url, body, options = {}) {
  const finalUrl = BASE_API_PATH + url;
  return new Promise((resolve, reject) => {
    axios
      .put(finalUrl, body, {
        headers: getHeaders(),
        ...options,
        withCredentials: true
      })
      .then((response) => handleResponse(response?.data, resolve, reject))
      .catch((error) => {
        reject(error.response?.data);
      });
  });
}

function apiPutWithoutBody(url, options = {}) {
  const finalUrl = BASE_API_PATH + url;
  return new Promise((resolve, reject) => {
    axios({
      url: finalUrl,
      method: 'put',
      headers: getHeaders(),
      ...options,
      withCredentials: true
    })
      .then((response) => handleResponse(response?.data, resolve, reject))
      .catch((error) => {
        reject(error.response?.data);
      });
  });
}

function apiDelete(url, options = {}) {
  const finalUrl = BASE_API_PATH + url;
  return new Promise((resolve, reject) => {
    axios
      .delete(finalUrl, {
        headers: getHeaders(),
        ...options,
        withCredentials: true
      })
      .then((response) => handleResponse(response?.data, resolve, reject))
      .catch((error) => {
        reject(error.response?.data);
      });
  });
}

function apiDeleteWithBody(url, data, options = {}) {
  const finalUrl = BASE_API_PATH + url;
  return new Promise((resolve, reject) => {
    axios({
      url: finalUrl,
      method: 'delete',
      responseType: 'json',
      withCredentials: true,
      headers: getHeaders(),
      data,
      ...options
    })
      .then((response) => handleResponse(response?.data, resolve, reject))
      .catch((error) => {
        reject(error.response?.data);
      });
  });
}

export { getHeaders, apiGet, apiPost, apiPut, apiDelete, apiDeleteWithBody, apiPutWithoutBody };
