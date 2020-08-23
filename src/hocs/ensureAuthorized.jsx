/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';

import { fetchMe } from '../redux/auth/actions';
import { fetchMyTeam } from '../redux/team/actions';

import { REQUEST_NAMES } from '../settings/requests';

const ensureAuthorized = (Component) => {
  const WrappedComponent = (props) => {
    const { user, team, isFetchMeInProgress, isFetchMeError, isFetchTeamInProgress, isFetchTeamError, fetchMe, fetchMyTeam } = props;

    const shouldFetchUser = !user && !isFetchMeInProgress && !isFetchMeError
    const shouldFetchTeam = user && !team && (!isFetchTeamInProgress) && !isFetchTeamError

    // console.log(shouldFetchUser, shouldFetchTeam, user, team, isFetchMeInProgress, isFetchMeError, isFetchTeamInProgress, isFetchTeamError)
    // useEffect(() => {
    //   fetchMe()
    // }, [fetchMe])
    // useEffect(() => {
    //   if (user) {
    //     fetchMyTeam()
    //   }
    // }, [fetchMyTeam, user])

    useEffect(() => {
      if (shouldFetchUser) {
        console.log("shouldFetchUser")
        fetchMe()
      }
    }, [fetchMe, shouldFetchUser])

    useEffect(() => {
      if (shouldFetchTeam) {
        console.log("shouldFetchTeam")
        fetchMyTeam()
      }
    }, [fetchMyTeam, shouldFetchTeam])

    // return <Component {...props} />
    return user && team
      ? <Component {...props} />
      : <></>
    //<Redirect to="/" />;
  };

  return connect(
    (state) => ({
      user: (state.auth.currentUser ? true : false),
      team: (state.teams.myTeam ? true : false),
      isFetchMeInProgress: _.get(state, `requests.${REQUEST_NAMES.FETCH_ME}.isInProgress`, null),
      isFetchMeError: _.get(state, `requests.${REQUEST_NAMES.FETCH_ME}.error`, ''),
      isFetchTeamInProgress: _.get(state, `requests.${REQUEST_NAMES.FETCH_MY_TEAM}.isInProgress`, null),
      isFetchTeamError: _.get(state, `requests.${REQUEST_NAMES.FETCH_MY_TEAM}.error`, ''),
    }),
    { fetchMe, fetchMyTeam },
  )(WrappedComponent);
};

export default ensureAuthorized;
