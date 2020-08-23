import { get } from 'lodash';

export const selectIsRequestInProgress = (state, requestName) => get(
  state,
  ['requests', requestName, 'isInProgress'],
);

export const selectIsRequestSuccessful = (state, requestName) => get(
  state,
  ['requests', requestName, 'isSuccessful'],
);

export const selectRequestError = (state, requestName) => get(
  state,
  ['requests', requestName, 'error'],
);
