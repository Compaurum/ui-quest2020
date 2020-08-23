import HttpService from '../../services/HttpService';
import { history } from '../store';
import _ from 'lodash';
import {
    setRequestInProgress,
    setRequestSuccessful,
    setRequestError,
    clearRequests,
} from '../requests/actions';
import { REQUEST_NAMES } from '../../settings/requests';

export const ACTION_NAMES = {
    FETCH_MY_TEAM: 'GET_MY_TEAM',
    SET_MY_TEAM: 'UPDATE_MY_TEAM',
};

export const fetchMyTeam = () => async (dispatch, getState) => {
    const REQUEST = REQUEST_NAMES.FETCH_MY_TEAM;
    dispatch(setRequestInProgress(REQUEST, true));

    let response;
    const httpService = new HttpService(localStorage.getItem('auth_token'), dispatch);
    console.log(getState())
    const teamId = _.get(getState(), 'auth.currentUser.team')
    try {
        response = await httpService.get(
            `/teams/${teamId}`
        );
    } catch (err) {
        dispatch(setRequestError(REQUEST, err.toString()));
        dispatch(setRequestInProgress(REQUEST, false));
        return;
    }

    dispatch(setRequestSuccessful(REQUEST, true));
    dispatch(setRequestInProgress(REQUEST, false));

    // console.log(response.data)

    dispatch(setMyTeam(response.data));
    // dispatch(setAuthToken(response.data.jwt));
    // dispatch(setCurrentUser(response.data.user));
    // history.push('/welcome')
    // if (isUserCompanyAdmin(response.data.user)) {
    //     dispatch(fetchMyCompany());
    // }
};

export const setMyTeam = (team) => ({
    type: ACTION_NAMES.SET_MY_TEAM,
    team,
});