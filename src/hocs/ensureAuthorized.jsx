/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


const ensureAuthorized = (Component) => {
  const WrappedComponent = (props) => {
    const { isLoggedIn } = props;

    return isLoggedIn
      ? <Component {...props} />
      : <Redirect to="/" />;
  };

  return connect(
    (state) => ({
      isLoggedIn: (state.auth.user ? true : false),
    }),
    null,
  )(WrappedComponent);
};

export default ensureAuthorized;
