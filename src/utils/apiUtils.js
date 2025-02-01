import {
  ABORT_ERROR_MESSAGE,
  GET_REQUEST_TIMEOUT,
  constructFailureResponse,
  constructNetworkErrorResponse,
  NETWORK_REQUEST_FAILED,
  POST_REQUEST_TIMEOUT,
  constructGetRequestOptions,
  constructPostRequestOptions,
  RESPONSE_SUCCESS,
  RESPONSE_FAILURE,
  constructSuccessResponse,
  DELETE_REQUEST_TIMEOUT,
  constructDeleteRequestOptions,
  constructPutRequestOptions,
  constructPatchRequestOptions,
} from "./serviceUtils";

export const makeGetRequest = async (url) => {
  try {
    if (!url) {
      throw new Error("No URL");
    }
    console.log("make GET Final request = " + url);
    let controller = new AbortController();
    setTimeout(() => controller.abort(), GET_REQUEST_TIMEOUT);
    const response = await fetch(
      url,
      { signal: controller.signal },
      constructGetRequestOptions()
    );

    const json = await response.json();

    if (json) {
      if (json.status) return constructSuccessResponse(json);
      else return constructFailureResponse(json.msg);
    } else {
      return constructFailureResponse();
    }
  } catch (error) {
    if (
      error.message === ABORT_ERROR_MESSAGE ||
      error.message === NETWORK_REQUEST_FAILED
    ) {
      return constructNetworkErrorResponse();
    }
    return constructFailureResponse(error.message);
  }
};

export const makePostRequest = async (url, payload) => {
  try {
    console.log("make POST request FINAL= " + url);

    console.log(payload);
    let controller = new AbortController();
    setTimeout(() => controller.abort(), POST_REQUEST_TIMEOUT);
    const response = await fetch(url, constructPostRequestOptions(payload), {
      signal: controller.signal,
    });

    const json = await response.json();
    console.log(json);

    if (json.status) return constructSuccessResponse(json);
    else return constructFailureResponse(json.message);
  } catch (error) {
    if (
      error.message === ABORT_ERROR_MESSAGE ||
      error.message === NETWORK_REQUEST_FAILED
    ) {
      return constructNetworkErrorResponse();
    }
    return constructFailureResponse(error.message);
  }
};

export const makePatchRequest = async (url, payload) => {
  try {
    console.log("make PATCH request FINAL= " + url);

    console.log(payload);
    let controller = new AbortController();
    setTimeout(() => controller.abort(), POST_REQUEST_TIMEOUT);
    const response = await fetch(url, constructPatchRequestOptions(payload), {
      signal: controller.signal,
    });

    const json = await response.json();
    console.log(json);

    if (json.status) return constructSuccessResponse(json);
    else return constructFailureResponse(json.message);
  } catch (error) {
    if (
      error.message === ABORT_ERROR_MESSAGE ||
      error.message === NETWORK_REQUEST_FAILED
    ) {
      return constructNetworkErrorResponse();
    }
    return constructFailureResponse(error.message);
  }
};

export const makeDeleteRequest = async (url) => {
  try {
    console.log("make Delete request FINAL= " + url);

    let controller = new AbortController();
    setTimeout(() => controller.abort(), DELETE_REQUEST_TIMEOUT);
    const response = await fetch(url, constructDeleteRequestOptions(), {
      signal: controller.signal,
    });

    const json = await response.json();
    console.log(json);

    if (json.status) return constructSuccessResponse(json);
    else return constructFailureResponse(json.message);
  } catch (error) {
    if (
      error.message === ABORT_ERROR_MESSAGE ||
      error.message === NETWORK_REQUEST_FAILED
    ) {
      return constructNetworkErrorResponse();
    }
    return constructFailureResponse(error.message);
  }
};

export const makePutRequest = async (url, payload) => {
  try {
    console.log("make PUT request FINAL= " + url);

    console.log(payload);
    let controller = new AbortController();
    setTimeout(() => controller.abort(), POST_REQUEST_TIMEOUT);
    const response = await fetch(url, constructPutRequestOptions(payload), {
      signal: controller.signal,
    });

    const json = await response.json();
    console.log(json);

    if (json.status) return constructSuccessResponse(json);
    else return constructFailureResponse(json.message);
  } catch (error) {
    if (
      error.message === ABORT_ERROR_MESSAGE ||
      error.message === NETWORK_REQUEST_FAILED
    ) {
      return constructNetworkErrorResponse();
    }
    return constructFailureResponse(error.message);
  }
};
