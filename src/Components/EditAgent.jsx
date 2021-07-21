import React, {useContext, useState, useEffect} from 'react';
import '../css/edit-agent.css';
import '../css/form.css';
import BackButton from "./BackButton";
import AgentsContext from "./AgentsContext";
import SelectAgentContext from "./SelectAgentContext";
import {useHistory} from "react-router-dom";

export default function EditAgent() {
    ///context for agents
    const {agents, setAgents} = useContext(AgentsContext);
    const {agentToSelect, setAgentToSelect} = useContext(SelectAgentContext);

    useEffect(() => {
        const editAgent = agents.find(agent => agent.agentId === agentToSelect);
        // edit description and category state variables
        setFirstName(editAgent.firstName);
        setLastName(editAgent.lastName);
        setDob(editAgent.dob);
        setHeight(editAgent.height);
        setAgencyShortName(editAgent.agencies[0].shortName);
        setAliasName(editAgent.aliases[0].name);
        setAliasPersona(editAgent.aliases[0].persona);
    }, []);

    ///state for form
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [height, setHeight] = useState('');
    const [agencyShortName, setAgencyShortName] = useState('');
    const [aliasName, setAliasName] = useState('');
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
        setAgencyShortName(event.target.value);
    }
    const aliasOnChangeHandler = (event) => {
        setAliasName(event.target.value);
    }
    const aliasPersonaOnChangeHandler = (event) => {
        setAliasPersona(event.target.value);
    }

    const editAgentFormSubmitHandler = (event) => {
        event.preventDefault();

        const newAgent = {
            agentId: agentToSelect,
            firstName: firstName,
            lastName: lastName,
            dob: dob,
            height: height,
            agencies: [{shortName: agencyShortName}],
            aliases: [{
                name: aliasName,
                persona: aliasPersona
            }],
        };

        const newAgents = [...agents];
        const newAgentIndex = newAgents.findIndex(agent => agent.agentId === agentToSelect);
        newAgents[newAgentIndex] = newAgent;
        setAgents(newAgents);

        // reset the form
        setFirstName('');
        setLastName('');
        setDob('');
        setHeight('');
        setAgencyShortName('');
        setAliasName('');
        setAliasPersona('');

        //reset select agent state
        setAgentToSelect('');

        //direct back to agents page
        history.push("/agents");
    };

    return (
        <main>
            <div className="wrapper">
                <div className="typing-demo-edit">
                    <h1>Edit Agent.</h1>
                </div>
            </div>
            <BackButton/>
            <form onSubmit={editAgentFormSubmitHandler}>
                <ul className="form-style-1">
                    <li>
                        <label>Full Name <span className="required">*</span></label>
                        <input type="text" name="field1" className="field-divided" placeholder={firstName} onChange={firstNameOnChangeHandler}/>
                        <input type="text" name="field2" className="field-divided" placeholder={lastName} onChange={lastNameOnChangeHandler}/>
                    </li>
                    <li>
                        <label htmlFor="date">Birth Date <span className="required">*</span></label>
                        <input type="date" name="date" id="date" onFocus={`this.type=${dob}`} onBlur="(this.type='text')" onChange={dobOnChangeHandler}/>
                    </li>
                    <li>
                        <label>Height (inches)<span className="required">*</span></label>
                        <input type="text" name="field3" className="field-long" placeholder={height} onChange={heightOnChangeHandler}/>
                    </li>
                    <li>
                        <label>Agency</label>
                        <select name="field4" className="field-select" onChange={agencyOnChangeHandler}>
                            <option value="default">{agencyShortName}</option>
                            <option value="Partnership">CIA</option>
                            <option value="Partnership">Scotland Yard</option>
                            <option value="General Question">MI6</option>
                        </select>
                    </li>
                    <li>
                        <label>Alias Name</label>
                        <input type="text" name="field6" className="field-divided" placeholder={aliasName} onChange={aliasOnChangeHandler}/>
                    </li>
                    <li>
                        <label>Alias Persona</label>
                        <textarea name="field5" id="field5" className="field-long field-textarea"
                                  placeholder={aliasPersona} onChange={aliasPersonaOnChangeHandler}/>
                    </li>
                    <li>
                        <input className="buttonSubmit" type="submit" value="Submit Changes"/>
                    </li>
                </ul>
            </form>
        </main>
    )
}