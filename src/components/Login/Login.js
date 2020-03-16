import React, {Component} from 'react';
import './Login.scss';

class Login extends Component {
    
    state = {
        username: '',
        password: ''
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
            </div>
        );
    }
}

export default Login;