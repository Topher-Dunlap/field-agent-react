import React, {useContext, useState} from 'react';
import {useHistory} from "react-router-dom";
import Errors from "./Errors";
import AuthContext from "./AuthContext";
import config from "../config";
import '../css/registration.css';

export default function Registration() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const auth = useContext(AuthContext);

    const history = useHistory();

    const usernameOnChangeHandler = (event) => {
        setUsername(event.target.value);
    };

    const passwordOnChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const confirmPasswordOnChangeHandler = (event) => {
        setConfirmPassword(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        // clear my errors
        setErrors([]);

        // client side validation... make sure password and confirm password match
        if (password !== confirmPassword) {
            setErrors(['Password and confirm password don\'t match']);
            return;
        }

        const newUser = {
            username,
            password
        };

        const init = {
            method: 'POST', // GET by default
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        };

        fetch(`${config.API_ENDPOINT_NEW_USER}/create_account`, init)
            .then(response => {
                if (response.status === 201 || response.status === 400) {
                    return response.json();
                }
                return Promise.reject('Something unexpected went wrong :)');
            })
            .then(data => {
                if (data.id) {
                    const init = {
                        method: 'POST', // GET by default
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newUser)
                    };
                    fetch(`${config.API_ENDPOINT_NEW_USER}/authenticate`, init)
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
                } else {
                    // we have errors to display
                    setErrors(data.messages)
                }
            })
            .catch(error => console.log(error));
    };

    return (
        <main>
            <section>
                <div className="wrapper">
                    <div className="typing-demo-reg">
                        <h1>Register.</h1>
                    </div>
                </div>
                <Errors errors={errors}/>
                <form onSubmit={formSubmitHandler}>
                    <ul className="form-style-1">
                        <li>
                            <label>Email <span className="required">*</span></label>
                            <input type="email" name="username" className="field-long"
                                   onChange={usernameOnChangeHandler}/>
                        </li>
                        <li>
                            <label>Password <span className="required">*</span></label>
                            <input type="password" name="password" className="field-long"
                                   onChange={passwordOnChangeHandler}/>
                        </li>
                        <li>
                            <label>Confirm Password <span className="required">*</span></label>
                            <input type="password" name="password" className="field-long"
                                   onChange={confirmPasswordOnChangeHandler}/>
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