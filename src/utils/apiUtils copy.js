import {
  ABORT_ERROR_MESSAGE,
  GET_REQUEST_TIMEOUT,
  constructFailureResponse,
  constructNetworkErrorResponse,
  NETWORK_REQUEST_FAILED,
  POST_REQUEST_TIMEOUT,
  constructGetRequestOptions,
  constructPostRequestOptions,
  constructSuccessResponse,
  DELETE_REQUEST_TIMEOUT,
  constructDeleteRequestOptions,
  constructPutRequestOptions,
  constructPatchRequestOptions,
  constructPostRequestWithTokenOptions,
  constructPutRequestWithTokenOptions,
  constructPutRequestOptionsWithFormData,
  PUT_REQUEST_TIMEOUT,
  constructPostRequestOptionsWithFormData,
  constructPatchRequestOptionsWithToken,
  constructDeleteRequestOptionsWithPayload,
  constructGetRequestOptionsWithToken,
  constructPatchRequestOptionsWithFormData,
} from "./serviceUtils";

export const makeGetRequest = async (url, token) => {
  try {
    if (!url) {
      throw new Error("No URL");
    }
    console.log("make GET request = " + url);
    let controller = new AbortController();
    setTimeout(() => controller.abort(), GET_REQUEST_TIMEOUT);

    let response;

    if (token) {
      response = await fetch(url, constructGetRequestOptionsWithToken(token), {
        signal: controller.signal,
      });
    } else {
      response = await fetch(
        url,

        constructGetRequestOptions(),
        { signal: controller.signal }
      );
    }

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
    console.log("make POST request = " + url);

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

export const makePostRequestWithToken = async (url, payload, token) => {
  try {
    console.log("make POST request with TOKEN= " + url, token);

    let controller = new AbortController();
    setTimeout(() => controller.abort(), POST_REQUEST_TIMEOUT);
    const response = await fetch(
      url,
      constructPostRequestWithTokenOptions(payload, token),
      {
        signal: controller.signal,
      }
    );

    const json = await response.json();

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

export const makePutRequestWithToken = async (url, payload, token) => {
  try {
    console.log("make PUT request = " + url);

    let controller = new AbortController();
    setTimeout(() => controller.abort(), POST_REQUEST_TIMEOUT);
    const response = await fetch(
      url,
      constructPutRequestWithTokenOptions(payload, token),
      {
        signal: controller.signal,
      }
    );

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
    console.log("make PATCH request = " + url);

    let controller = new AbortController();
    setTimeout(() => controller.abort(), POST_REQUEST_TIMEOUT);
    const response = await fetch(url, constructPatchRequestOptions(payload), {
      signal: controller.signal,
    });

    const json = await response.json();

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

export const makePatchRequestWithToken = async (url, payload, token) => {
  try {
    console.log("make PATCH TOKEN request = " + url);

    let controller = new AbortController();
    setTimeout(() => controller.abort(), POST_REQUEST_TIMEOUT);
    const response = await fetch(
      url,
      constructPatchRequestOptionsWithToken(payload, token),
      {
        signal: controller.signal,
      }
    );

    const json = await response.json();

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

export const makeDeleteRequest = async (url, payload) => {
  try {
    console.log("make Delete request = " + url);

    let controller = new AbortController();
    setTimeout(() => controller.abort(), DELETE_REQUEST_TIMEOUT);

    let response;

    if (payload) {
      response = await fetch(
        url,
        constructDeleteRequestOptionsWithPayload(payload),
        {
          signal: controller.signal,
        }
      );
    } else {
      response = await fetch(url, constructDeleteRequestOptions(), {
        signal: controller.signal,
      });
    }

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
    console.log("make PUT request = " + url);

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

export const makePutRequestWithFormData = async (url, payload, token) => {
  try {
    console.log("make PUT request = " + url);

    let controller = new AbortController();
    setTimeout(() => controller.abort(), PUT_REQUEST_TIMEOUT);
    const response = await fetch(
      url,
      constructPutRequestOptionsWithFormData(payload, token),
      {
        signal: controller.signal,
      }
    );

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

export const makePostRequestWithFormData = async (url, payload) => {
  try {
    console.log("make POST request FORMDATA= " + url);

    let controller = new AbortController();
    setTimeout(() => controller.abort(), POST_REQUEST_TIMEOUT);

    const response = await fetch(
      url,
      constructPostRequestOptionsWithFormData(payload),
      {
        signal: controller.signal,
      }
    );

    console.log(response);

    const json = await response.json();
    console.log(json);

    // 🔥 New Success Logic
    if ((json && json.status) || response.status === 200) {
      return constructSuccessResponse({ ...json, status: response.status });
    } else {
      return constructFailureResponse(json?.message || "Unknown error");
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

export const makePatchRequestWithFormData = async (url, payload) => {
  try {
    console.log("make PATCH request FORMDATA= " + url);

    let controller = new AbortController();
    setTimeout(() => controller.abort(), POST_REQUEST_TIMEOUT);
    const response = await fetch(
      url,
      constructPatchRequestOptionsWithFormData(payload),
      {
        signal: controller.signal,
      }
    );

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
