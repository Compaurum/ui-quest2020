import HttpService from '../../services/HttpService';
import { history, store } from '../store';
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
    SET_QUESTIONS: 'SET_QUESTIONS',
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
export const fetchPhotoTasks = () => async (dispatch, getState) => {
    const REQUEST = REQUEST_NAMES.UPLOAD_PUZZLE_PHOTO;
    dispatch(setRequestInProgress(REQUEST, true));

    let response;
    const httpService = new HttpService(localStorage.getItem('auth_token'), dispatch);

    try {
        response = await httpService.get(
            `/questions?type=photo`
        );
    } catch (err) {
        dispatch(setRequestError(REQUEST, err.toString()));
        dispatch(setRequestInProgress(REQUEST, false));
        return;
    }
    dispatch(setRequestSuccessful(REQUEST, true));
    dispatch(setRequestInProgress(REQUEST, false));
    dispatch(setQuestions(response.data));
}

export const uploadPuzzlePhoto = (file, puzzleIndex, data = {}) => async (dispatch, getState) => {
    const REQUEST = REQUEST_NAMES.UPLOAD_PUZZLE_PHOTO;
    dispatch(setRequestInProgress(REQUEST, true));

    let response;
    const httpService = new HttpService(localStorage.getItem('auth_token'), dispatch);

    var formData = new FormData();
    if (file) {
        formData.append(`files.progress[${puzzleIndex}].photo`, file, file.name);
    }
    formData.append(`data`, JSON.stringify(data));
    // formData.append("files", file);
    // formData.append("ref", 'team.progress[0].photo');
    // formData.append("refId", store.getState().teams.myTeam.id); //
    // formData.append("field", 'photo');
    //'team.progress' 1
    try {
        response = await httpService.put(
            `/teams/${store.getState().teams.myTeam.id}`,
            formData,
            { 'Content-Type': 'multipart/form-data' }
        );
    } catch (err) {
        dispatch(setRequestError(REQUEST, err.toString()));
        dispatch(setRequestInProgress(REQUEST, false));
        return;
    }
    dispatch(setRequestSuccessful(REQUEST, true));
    dispatch(setRequestInProgress(REQUEST, false));
    dispatch(setMyTeam(response.data));

    console.log(file)
}

export const setQuestions = (tasks) => ({
    type: ACTION_NAMES.SET_QUESTIONS,
    tasks,
});
export const setMyTeam = (team) => ({
    type: ACTION_NAMES.SET_MY_TEAM,
    team,
});