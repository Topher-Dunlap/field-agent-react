import React, {useContext, useState, useEffect} from 'react';
import {useHistory, useParams} from "react-router-dom";
import BackButton from "./BackButton";
import AgentsContext from "./AgentsContext";
import DEFAULT_AGENT from "../default_values/default_agent";
import '../css/edit-agent.css';
import '../css/form.css';
import AuthContext from "./AuthContext";
import Errors from "./Errors";
import config from '../config'

export default function EditAgent() {
    ///context for agents
    const {agents, setAgents} = useContext(AgentsContext);
    const auth = useContext(AuthContext);

    ///agentToEdit State
    const [agentToEdit, setAgentToEdit] = useState(DEFAULT_AGENT);
    const [errors, setErrors] = useState([]);

    //for redirect after submit
    let history = useHistory();

    //agent_id from dynamic route
    let { agent_id } = useParams();
    agent_id = parseInt(agent_id, 10);

    useEffect(() => {
        const editAgent = agents.find(agent => agent.agentId === agent_id);
        ///deep copy
        // const tempAgent = {...editAgent, agencies:[...editAgent.agencies], aliases:[...editAgent.aliases]}
        const tempAgent = {...editAgent}

        setAgentToEdit(tempAgent);
    }, [agent_id]);

    const editInputOnChangeHandler = (event) => {
        const nextAgent = { ...agentToEdit };
        // this updates the property on the object
        nextAgent[event.target.name] = event.target.value;
        // update the state variable
        setAgentToEdit(nextAgent);
    }

    const editAgentFormSubmitHandler = (event) => {
        event.preventDefault();

        const init = {
            method: 'PUT', // GET by default
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.user.token}`
            },
            body: JSON.stringify(agentToEdit)
        };

        fetch(`${config.API_ENDPOINT}/agent/${agentToEdit.agentId}`, init)
            .then(response => {
                if (response.status === 204) {
                    return null;
                } else if (response.status === 400) {
                    return response.json();
                }
                return Promise.reject('Something unexpected went wrong :)');
            })
            .then(data => {
                if (!data) {
                    // redirect the user back to the /agents route
                    history.push('/agents');
                } else {
                    // we have errors to display
                    setErrors(data);
                }
            })
            .catch(error => console.log(error));
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
            <Errors errors={errors} />
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
                        <input type="text" name="height" className="field-long" value={agentToEdit.heightInInches} onChange={editInputOnChangeHandler}/>
                    </li>
                    <li>
                        <input className="buttonSubmit" type="submit" value="Submit Changes"/>
                    </li>
                </ul>
            </form>
        </main>
    )
}