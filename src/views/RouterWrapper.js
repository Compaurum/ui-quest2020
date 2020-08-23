/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';


import { fetchMyTeam } from '../redux/team/actions';
import { compose } from 'redux';

const RouterWrapper = ({
    children,
    fetchMyTeam,
    isLoggedIn,
    getMe,
}) => {

    return (
        <>
            {children}
        </>
    );
}

export default compose(
    connect(
        (state) => ({
            isLoggedIn: state.auth.currentUser ? true : false,
        }),
        { fetchMyTeam },
    )
)(RouterWrapper);
