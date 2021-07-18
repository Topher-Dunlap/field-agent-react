import React from 'react';
import {Link, useHistory} from "react-router-dom";

export default function EditAgent() {

    let history = useHistory();
    function handleBack() {
        history.push("/agents");
    }

    return (
        <main>
            <div className="wrapper">
                <div className="typing-demo">
                    <h1>Edit Agent.</h1>
                </div>
            </div>
            <Link onClick={handleBack}>Back</Link>
            <form>
                <ul className="form-style-1">
                    <li>
                        <label>Full Name <span className="required">*</span></label>
                        <input type="text" name="field1" className="field-divided" placeholder="James"/>
                        <input type="text" name="field2" className="field-divided" placeholder="Bond"/>
                    </li>
                    <li>
                        <label htmlFor="date">Birth Date <span className="required">*</span></label>
                        <input type="date" name="date" id="date"/>
                    </li>
                    <li>
                        <label>Height (inches)<span className="required">*</span></label>
                        <input type="text" name="field3" className="field-long" placeholder="72"/>
                    </li>
                    <li>
                        <label>Agency</label>
                        <select name="field4" className="field-select">
                            <option value="default">--</option>
                            <option value="Partnership">CIA</option>
                            <option value="Partnership">Scotland Yard</option>
                            <option value="General Question">MI6</option>
                        </select>
                    </li>
                    <li>
                        <label>Alias Name</label>
                        <input type="text" name="field6" className="field-divided" placeholder="007"/>
                    </li>
                    <li>
                        <label>Alias Description</label>
                        <textarea name="field5" id="field5" className="field-long field-textarea"
                                  placeholder="Secret agent that likes long walks on the beach..."/>
                    </li>
                    <li>
                        <input className="buttonSubmit" type="submit" value="Submit Changes"/>
                    </li>
                </ul>
            </form>
        </main>
    )
}