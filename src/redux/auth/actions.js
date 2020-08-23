import HttpService from '../../services/HttpService';
import { history } from '../store';
import {
    setRequestInProgress,
    setRequestSuccessful,
    setRequestError,
    clearRequests,
} from '../requests/actions';
import { REQUEST_NAMES } from '../../settings/requests';

export const ACTION_NAMES = {
    SET_AUTH_TOKEN: 'SET_AUTH_TOKEN',
    REMOVE_AUTH_TOKEN: 'REMOVE_AUTH_TOKEN',
    SET_CURRENT_USER: 'SET_CURRENT_USER',
    REMOVE_CURRENT_USER: 'REMOVE_CURRENT_USER',
    SET_MY_COMPANY: 'SET_MY_COMPANY',
    REMOVE_MY_COMPANY: 'REMOVE_MY_COMPANY',
};

export const login = (email, password) => async (dispatch) => {
    const REQUEST = REQUEST_NAMES.LOGIN;
    dispatch(setRequestInProgress(REQUEST, true));

    let response;
    const httpService = new HttpService(null, dispatch);

    try {
        response = await httpService.post(
            '/auth/local',
            {
                identifier: email,
                password,
            },
        );
    } catch (err) {
        dispatch(setRequestError(REQUEST, err.toString()));
        dispatch(setRequestInProgress(REQUEST, false));
        return;
    }

    dispatch(setRequestSuccessful(REQUEST, true));
    dispatch(setRequestInProgress(REQUEST, false));

    dispatch(setAuthToken(response.data.jwt));
    dispatch(setCurrentUser(response.data.user));
    history.push('/welcome')
    // if (isUserCompanyAdmin(response.data.user)) {
    //     dispatch(fetchMyCompany());
    // }
};

export const removeAuthToken = () => ({
    type: ACTION_NAMES.REMOVE_AUTH_TOKEN,
});

export const setAuthToken = (token) => ({
    type: ACTION_NAMES.SET_AUTH_TOKEN,
    token,
});

export const setCurrentUser = (user) => ({
    type: ACTION_NAMES.SET_CURRENT_USER,
    user,
});

export const removeCurrentUser = () => ({
    type: ACTION_NAMES.REMOVE_CURRENT_USER,
});

export const logout = () => (dispatch) => {
    dispatch(removeAuthToken());
    dispatch(removeCurrentUser());
    // dispatch(removeMyCompany());
    // dispatch(clearOrders());
    // dispatch(clearCompanies());
    // dispatch(clearInstallers());
    // dispatch(clearForms());
    dispatch(clearRequests());
};
