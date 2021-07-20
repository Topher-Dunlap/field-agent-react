import React from 'react';

export default function UserLogin() {
    return(
        <main>
            <section>
                <div className="wrapper">
                    <div className="typing-demo-login">
                        <h1>Login.</h1>
                    </div>
                </div>
                <form>
                    <ul className="form-style-1">
                        <li>
                            <label>Email <span className="required">*</span></label>
                            <input type="email" name="email" className="field-long"/>
                        </li>
                        <li>
                            <label>Password <span className="required">*</span></label>
                            <input type="password" name="password" className="field-long"/>
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