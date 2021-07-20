import React, {useContext, useState, useEffect} from 'react';
import {useHistory, useParams} from "react-router-dom";
import BackButton from "./BackButton";
import AgentsContext from "./AgentsContext";
import DEFAULT_AGENT from "../default_values/default_agent";
import '../css/edit-agent.css';
import '../css/form.css';

export default function EditAgent() {
    ///context for agents
    const {agents, setAgents} = useContext(AgentsContext);

    ///agentToEdit State
    const [agentToEdit, setAgentToEdit] = useState(DEFAULT_AGENT);

    //for redirect after submit
    let history = useHistory();

    //agent_id from dynamic route
    let { agent_id } = useParams();
    agent_id = parseInt(agent_id, 10);

    useEffect(() => {
        const editAgent = agents.find(agent => agent.agentId === agent_id);
        ///deep copy
        const tempAgent = {...editAgent, agencies:[...editAgent.agencies], aliases:[...editAgent.aliases]}
        setAgentToEdit(tempAgent);
    }, [agent_id]);

    const resetForm = () => {
        setAgentToEdit(DEFAULT_AGENT);
    };

    const editInputOnChangeHandler = (event) => {
        const nextAgent = { ...agentToEdit };
        // this updates the property on the object
        nextAgent[event.target.name] = event.target.value;
        // update the state variable
        setAgentToEdit(nextAgent);
    }

    const editAgentFormSubmitHandler = (event) => {
        event.preventDefault();

        const newAgent = { ...agentToEdit, agentId: agent_id }

        const newAgents = [...agents];

        const newAgentIndex = newAgents.findIndex(agent => agent.agentId === agent_id);

        newAgents[newAgentIndex] = newAgent;

        //update agent data with new agent
        setAgents(newAgents);

        //reset form state
        resetForm();

        //direct back to agents page
        history.push("/agents");
    };

    if(!agentToEdit){
        return null;
    }

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
                        <label>First Name <span className="required">*</span></label>
                        <input type="text" name="firstName" className="field-divided" value={agentToEdit.firstName} onChange={editInputOnChangeHandler}/>
                        <label>Last Name <span className="required">*</span></label>
                        <input type="text" name="lastName" className="field-divided" value={agentToEdit.lastName} onChange={editInputOnChangeHandler}/>
                    </li>
                    <li>
                        <label htmlFor="date">Birth Date <span className="required">*</span></label>
                        <input type="date" name="dob" id="date" value={agentToEdit.dob} onChange={editInputOnChangeHandler}/>
                    </li>
                    <li>
                        <label>Height (inches)<span className="required">*</span></label>
                        <input type="text" name="height" className="field-long" value={agentToEdit.height} onChange={editInputOnChangeHandler}/>
                    </li>
                    <li>
                        <label>Agency</label>
                        <select name="agencies[0].shortName" className="field-select" onChange={editInputOnChangeHandler}>
                            <option value="default">{agentToEdit.agencies[0].shortName}</option>
                            <option value="Partnership">CIA</option>
                            <option value="Partnership">Scotland Yard</option>
                            <option value="General Question">MI6</option>
                        </select>
                    </li>
                    <li>
                        <label>Alias Name</label>
                        <input type="text" name="aliases[0].name" className="field-divided" value={agentToEdit.aliases[0].name} onChange={editInputOnChangeHandler}/>
                    </li>
                    <li>
                        <label>Alias Persona</label>
                        <textarea name="aliases[0].persona" id="field5" className="field-long field-textarea"
                                  value={agentToEdit.aliases[0].persona} onChange={editInputOnChangeHandler}/>
                    </li>
                    <li>
                        <input className="buttonSubmit" type="submit" value="Submit Changes"/>
                    </li>
                </ul>
            </form>
        </main>
    )
}