import React, {useContext, useState} from 'react';
import {useHistory} from "react-router-dom";
import '../css/add-agent.css';
import '../css/form.css';
import AgentsContext from "./AgentsContext";
import DEFAULT_AGENT from "../default_values/default_agent";


export default function AddAgent() {

    ///context for agents
    const {agents, setAgents} = useContext(AgentsContext);

    //state for new agent
    const [newAgentValues, setNewAgentValues] = useState(null);

    //for redirect after submit
    let history = useHistory();

    const resetForm = () => {
        setNewAgentValues(DEFAULT_AGENT);
    };

    const formInputOnChangeHandler = (event) => {
        const nextAgent = { ...newAgentValues };
        // this updates the property on the object
        nextAgent[event.target.name] = event.target.value;
        // update the state variable
        setNewAgentValues(nextAgent);
    }

    const addAgentFormSubmitHandler = (event) => {
        event.preventDefault();
        const nextId = agents.length > 0 ? Math.max(...agents.map(a => a.agentId)) + 1 : 1;

        const newAgent = { ...newAgentValues, agentId: nextId}

        setAgents([...agents, newAgent]);

        // reset the form
        resetForm();

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
                        <input type="text" name="firstName" className="field-divided" onChange={formInputOnChangeHandler}/>
                    </li>
                    <li>
                        <label>Last Name <span className="required">*</span></label>
                        <input type="text" name="lastName" className="field-divided" onChange={formInputOnChangeHandler}/>
                    </li>
                    <li>
                        <label htmlFor="date">Birth Date <span className="required">*</span></label>
                        <input type="date" name="dob" id="date" onChange={formInputOnChangeHandler}/>
                    </li>
                    <li>
                        <label>Height (inches)<span className="required">*</span></label>
                        <input type="text" name="height" className="field-long" onChange={formInputOnChangeHandler}/>
                    </li>
                    <li>
                        <label>Agency</label>
                        <select name="agencies[0].shortName" className="field-select" onChange={formInputOnChangeHandler}>
                            <option value="default">--</option>
                            <option value="CIA">CIA</option>
                            <option value="Scotland Yard">Scotland Yard</option>
                            <option value="MI6">MI6</option>
                        </select>
                    </li>
                    <li>
                        <label>Alias Name</label>
                        <input type="text" name="alias[0].name" className="field-divided" placeholder="optional..." onChange={formInputOnChangeHandler}/>
                    </li>
                    <li>
                        <label>Alias Persona</label>
                        <textarea name="field5" id="alias[0].persona" className="field-long field-textarea" placeholder="optional..." onChange={formInputOnChangeHandler}/>
                    </li>
                    <li>
                        <input className="buttonSubmit" type="submit" value="Add Agent"/>
                    </li>
                </ul>
            </form>
        </main>
    )
}