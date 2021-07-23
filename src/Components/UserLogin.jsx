import React, {useContext, useState} from 'react';
import {useHistory} from "react-router-dom";
import Errors from "./Errors";
import AuthContext from "./AuthContext";

export default function UserLogin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const auth = useContext(AuthContext);

    const history = useHistory();

    const usernameOnChangeHandler = (event) => {
        setUsername(event.target.value);
    };

    const passwordOnChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const authAttempt = {
            username,
            password
        };

        const init = {
            method: 'POST', // GET by default
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authAttempt)
        };

        fetch('http://localhost:5000/authenticate', init)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else if (response.status === 403) {
                    return null;
                }
                return Promise.reject('Something unexpected went wrong :)');
            })
            .then(data => {
                if (data) {
                    auth.login(data.jwt_token);
                    history.push('/');
                } else {
                    // we have error messages
                    setErrors(['Login failure.']);
                }
            })
            .catch(error => console.log(error));
    };

    return(
        <main>
            <section>
                <div className="wrapper">
                    <div className="typing-demo-login">
                        <h1>Login.</h1>
                    </div>
                </div>
                <Errors errors={errors} />
                <form onSubmit={formSubmitHandler}>
                    <ul className="form-style-1">
                        <li>
                            <label>Username: <span className="required">*</span></label>
                            <input
                                type="email"
                                name="username"
                                className="field-long"
                                value={username}
                                onChange={usernameOnChangeHandler}/>
                        </li>
                        <li>
                            <label>Password: <span className="required">*</span></label>
                            <input
                                type="password"
                                name="password"
                                className="field-long"
                                value={password}
                                onChange={passwordOnChangeHandler}/>
                        </li>
                        <li>
                            <input className="buttonSubmit" type="submit" value="Submit"/>
                        </li>
                    </ul>
                </form>
            </section>
        </main>
    )
}