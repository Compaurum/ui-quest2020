export const ACTION_NAMES = {
  SET_REQUEST_IN_PROGRESS: 'SET_REQUEST_IN_PROGRESS',
  SET_REQUEST_SUCCESSFUL: 'SET_REQUEST_SUCCESSFUL',
  SET_REQUEST_ERROR: 'SET_REQUEST_ERROR',
  CLEAR_REQUESTS: 'CLEAR_REQUESTS',
};

export const setRequestInProgress = (requestName, value) => ({
  type: ACTION_NAMES.SET_REQUEST_IN_PROGRESS,
  name: requestName,
  value,
});

export const setRequestSuccessful = (requestName, value) => ({
  type: ACTION_NAMES.SET_REQUEST_SUCCESSFUL,
  name: requestName,
  value,
});

export const setRequestError = (requestName, error) => ({
  type: ACTION_NAMES.SET_REQUEST_ERROR,
  name: requestName,
  error,
});

export const clearRequests = () => ({
  type: ACTION_NAMES.CLEAR_REQUESTS,
});

export const resetRequest = (requestName) => (dispatch) => {
  dispatch(setRequestInProgress(requestName, false));
  dispatch(setRequestSuccessful(requestName, false));
  dispatch(setRequestError(requestName, null));
};
