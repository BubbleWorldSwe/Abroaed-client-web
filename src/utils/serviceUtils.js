export const GET_REQUEST_TIMEOUT = 20000;
export const POST_REQUEST_TIMEOUT = 20000;
export const DELETE_REQUEST_TIMEOUT = 20000;
export const RESPONSE_SUCCESS = true;
export const RESPONSE_FAILURE = false;
export const RESPONSE_NETWORK_ERROR = -1;
export const ABORT_ERROR_MESSAGE = "Aborted";
export const NETWORK_REQUEST_FAILED = "Network request failed";
const REQUEST_METHOD_GET = "GET";
const REQUEST_METHOD_POST = "POST";
const REQUEST_METHOD_PUT = "PUT";
const REQUEST_METHOD_DELETE = "DELETE";
const REQUEST_HEADER_JSON = "application/json";
const REQUEST_HEADER_CONTENT_KEY = "Content-Type";

export const constructGetRequestOptions = () => {
  var requestHeaders = new Headers();
  requestHeaders.append(REQUEST_HEADER_CONTENT_KEY, REQUEST_HEADER_JSON);
  return {
    method: REQUEST_METHOD_GET,
    headers: requestHeaders,
  };
};

export const constructPostRequestOptions = (payload) => {
  var requestHeaders = new Headers();
  requestHeaders.append(REQUEST_HEADER_CONTENT_KEY, REQUEST_HEADER_JSON);

  var raw = JSON.stringify(payload);

  return {
    method: REQUEST_METHOD_POST,
    headers: requestHeaders,
    body: raw,
  };
};

export const constructPutRequestOptions = (payload) => {
  var requestHeaders = new Headers();
  requestHeaders.append(REQUEST_HEADER_CONTENT_KEY, REQUEST_HEADER_JSON);

  var raw = JSON.stringify(payload);

  return {
    method: REQUEST_METHOD_PUT,
    headers: requestHeaders,
    body: raw,
  };
};

export const constructDeleteRequestOptions = () => {
  var requestHeaders = new Headers();

  return {
    method: REQUEST_METHOD_DELETE,
    headers: requestHeaders,
  };
};

export const constructSuccessResponse = (payload) => {
  return {
    success: RESPONSE_SUCCESS,
    data: payload,
  };
};

export const constructFailureResponse = (message) => {
  return {
    success: RESPONSE_FAILURE,
    message: message ? message : "Something went wrong! Try again Later ..",
  };
};

export const constructNetworkErrorResponse = () => {
  console.log("Please check your Internet Connection");
  return {
    status: RESPONSE_NETWORK_ERROR,
    success: RESPONSE_FAILURE,
    message: NETWORK_REQUEST_FAILED,
  };
};
