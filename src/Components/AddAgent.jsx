import React, {useContext, useState} from 'react';
import '../css/add-agent.css';
import '../css/form.css';
import AgentsContext from "./AgentsContext";
import {useHistory} from "react-router-dom";

export default function AddAgent() {

    ///context for agents
    const {agents, setAgents} = useContext(AgentsContext);

    ///state for form
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [height, setHeight] = useState('');
    const [agency, setAgency] = useState('');
    const [alias, setAlias] = useState('');
    const [aliasPersona, setAliasPersona] = useState('');

    //for redirect after submit
    let history = useHistory();

    const firstNameOnChangeHandler = (event) => {
        setFirstName(event.target.value);
    }
    const lastNameOnChangeHandler = (event) => {
        setLastName(event.target.value);
    }
    const dobOnChangeHandler = (event) => {
        setDob(event.target.value);
    }
    const heightOnChangeHandler = (event) => {
        setHeight(event.target.value);
    }
    const agencyOnChangeHandler = (event) => {
        setAgency(event.target.value);
    }
    const aliasOnChangeHandler = (event) => {
        setAlias(event.target.value);
    }
    const aliasPersonaOnChangeHandler = (event) => {
        setAliasPersona(event.target.value);
    }

    const addAgentFormSubmitHandler = (event) => {
        event.preventDefault();
        const nextId = agents.length > 0 ? Math.max(...agents.map(a => a.id)) + 1 : 1;

        const newAgent = {
            agentId: nextId,
            firstName: firstName,
            lastName: lastName,
            dob: dob,
            height: height,
            agency: agency,
            alias: alias,
            aliasPersona: aliasPersona
        };

        setAgents([...agents, newAgent]);

        // reset the form
        setFirstName('');
        setLastName('');
        setDob('');
        setHeight('');
        setAgency('');
        setAlias('');
        setAliasPersona('');

        //direct back to agents page
        history.push("/agents");
    }

    return (
        <main>
            <div className="wrapper">
                <div className="typing-demo-add">
                    <h1>Add Agent.</h1>
                </div>
            </div>
            <form onSubmit={addAgentFormSubmitHandler}>
                <ul className="form-style-1">
                    <li>
                        <label>First Name <span className="required">*</span></label>
                        <input type="text" name="firstName" className="field-divided" onChange={firstNameOnChangeHandler}/>
                    </li>
                    <li>
                        <label>Last Name <span className="required">*</span></label>
                        <input type="text" name="lastName" className="field-divided" onChange={lastNameOnChangeHandler}/>
                    </li>
                    <li>
                        <label htmlFor="date">Birth Date <span className="required">*</span></label>
                        <input type="date" name="date" id="date" onChange={dobOnChangeHandler}/>
                    </li>
                    <li>
                        <label>Height (inches)<span className="required">*</span></label>
                        <input type="text" name="field3" className="field-long" onChange={heightOnChangeHandler}/>
                    </li>
                    <li>
                        <label>Agency</label>
                        <select name="field4" className="field-select" onChange={agencyOnChangeHandler}>
                            <option value="default">--</option>
                            <option value="CIA">CIA</option>
                            <option value="Scotland Yard">Scotland Yard</option>
                            <option value="MI6">MI6</option>
                        </select>
                    </li>
                    <li>
                        <label>Alias Name</label>
                        <input type="text" name="field6" className="field-divided" placeholder="optional..." onChange={aliasOnChangeHandler}/>
                    </li>
                    <li>
                        <label>Alias Persona</label>
                        <textarea name="field5" id="field5" className="field-long field-textarea" placeholder="optional..." onChange={aliasPersonaOnChangeHandler}/>
                    </li>
                    <li>
                        <input className="buttonSubmit" type="submit" value="Add Agent"/>
                    </li>
                </ul>
            </form>
        </main>
    )
}