import React, { useState } from 'react';
import { Image, Form, FormField, FormInput, Button } from 'semantic-ui-react';

import LogoMedium from '../assets/images/logo-medium.jpg';
import './index.css';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        console.log(`login: ${login}, password: ${password}`)
    }
    return (
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
                    <Button type='submit' color="primary" onClick={handleSubmit}>Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default Login;