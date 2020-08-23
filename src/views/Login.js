import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { Image, Form, FormField, FormInput, Button, Label } from 'semantic-ui-react';

import LogoMedium from '../assets/images/logo-medium.jpg';
import { REQUEST_NAMES } from '../settings/requests';
import './index.css';

import { login } from '../redux/auth/actions'

const Login = (props) => {
    const { loginRequest, requestError } = props;
    console.log(props)
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        loginRequest(login, password)
    }

    return (
      <div className="wrapper-container">
        <div className="ui container grid middle aligned">
            <div className="login__container ui column centered grid">
                <div className="ui row">
                    <span className="ui centered login__title">ProЖарка разума</span>
                </div>
                <div className="row">
                    <Image className="login__logo" src={LogoMedium} rounded="true"></Image>
                </div>

                <Form>
                    <FormField>
                        <FormInput type="login" placeholder='Логин' value={login} onChange={(e) => (setLogin(e.target.value))} />
                    </FormField>
                    <FormField>
                        <FormInput type="password" placeholder='Пароль' value={password} onChange={(e) => (setPassword(e.target.value))} />
                    </FormField>
                    <FormField>
                        {requestError && <Label style={{ color: 'red', background: 'transparent' }}>Invalid email or password</Label>}
                    </FormField>
                    <Button type='submit' color="primary" onClick={handleSubmit}>Submit</Button>
                </Form>
            </div>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser,
        requestError: _.get(state, `requests.${REQUEST_NAMES.LOGIN}.error`, '')
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, { loginRequest: login })
)(Login);