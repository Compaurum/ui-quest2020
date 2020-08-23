import axios from 'axios';
import { get } from 'lodash';

import { logout } from '../redux/auth/actions';
const API_URL = 'http://ec2-35-158-5-231.eu-central-1.compute.amazonaws.com:1337'
// const API_URL = 'http://localhost'

/**
 * Helper function, needed in case we need to send
 * multiple query parameter values with the same key. In this case
 * we put this values in queryParams argument as an array,
 * then convert this object to URLSearchParams, which allows to
 * have multiple query parameter values of the same key.
 *
 * @param {} queryParams Object, containing query params
 */
const getURLSearchParams = (queryParams) => {
  const searchParams = new URLSearchParams();

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(queryParams)) {
    if (Array.isArray(value)) {
      // eslint-disable-next-line no-restricted-syntax
      for (const arrayValue of value) {
        searchParams.append(key, arrayValue);
      }
    } else {
      searchParams.append(key, value);
    }
  }

  return searchParams;
};

// Extract just one first error or return generic error message
const getErrorMessage = (response) => get(response, ['data', 'message', 0, 'messages', 0, 'message'], 'An error occured');

export default class HttpService {
  constructor(authToken, dispatch) {
    this.dispatch = dispatch;
    this.authToken = authToken;
  }

  async makeRequest(requestPromise) {
    let response;

    try {
      response = await requestPromise;
    } catch (err) {
      if (get(err, ['response', 'status']) === 401) {
        this.dispatch(logout());
        throw new Error('Unauthorized');
      } else {
        throw new Error(getErrorMessage(err.response));
      }
    }

    return response;
  }

  get(path, queryParams = {}) {
    const headers = this.authToken
      ? { Authorization: `Bearer ${this.authToken}` }
      : {};

    return this.makeRequest(axios.get(
      `${API_URL}${path}`,
      {
        params: getURLSearchParams(queryParams),
        headers,
      },
    ));
  }

  post(path, data = {}) {
    const headers = this.authToken
      ? { Authorization: `Bearer ${this.authToken}` }
      : {};

    return this.makeRequest(axios.post(
      `${API_URL}${path}`,
      data,
      { headers },
    ));
  }

  put(path, data = {}) {
    const headers = this.authToken
      ? { Authorization: `Bearer ${this.authToken}` }
      : {};

    return this.makeRequest(axios.put(
      `${API_URL}${path}`,
      data,
      { headers },
    ));
  }
}
