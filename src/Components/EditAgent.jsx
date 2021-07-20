import React, {useContext, useState, useEffect} from 'react';
import {useHistory, useParams} from "react-router-dom";
import BackButton from "./BackButton";
import AgentsContext from "./AgentsContext";
import DefaultAgentContext from "./DefaultAgentContext";
import FormAgentContext from "./FormAgentContext";
import '../css/edit-agent.css';
import '../css/form.css';

export default function EditAgent() {
    ///context for agents
    const {agents, setAgents} = useContext(AgentsContext);
    const {defaultAgent, setDefaultAgent} = useContext(DefaultAgentContext);
    const {formAgent, setFormAgent} = useContext(FormAgentContext);

    ///agentToEdit State
    const [agentToEdit, setAgentToEdit] = useState([])

    //for redirect after submit
    let history = useHistory();

    //agent_id from dynamic route
    const { agent_id } = useParams();

    useEffect(() => {
        const editAgent = agents.find(agent => agent.agentId === agent_id);
        const tempAgent = {...editAgent}
        setAgentToEdit(tempAgent);
        debugger;
    }, []);

    const resetForm = () => {
        setFormAgent(defaultAgent);
    };

    const editInputOnChangeHandler = (event) => {
        const nextAgent = { ...formAgent };
        // this updates the property on the object
        nextAgent[event.target.name] = event.target.value;
        // update the state variable
        setFormAgent(nextAgent);
    }

    const editAgentFormSubmitHandler = (event) => {
        event.preventDefault();

        const newAgent = { ...formAgent, agentId: agent_id }

        const newAgents = [...agents];

        const newAgentIndex = newAgents.findIndex(agent => agent.agentId === agent_id);

        newAgents[newAgentIndex] = newAgent;

        //update agent data with new agent
        setAgents(newAgents);

        //reset form state
        resetForm();

        // //reset select agent state
        // setAgentToSelect('');

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
                        <input type="text" name="firstName" className="field-divided" placeholder={agentToEdit.firstName} onChange={editInputOnChangeHandler}/>
                        <input type="text" name="lastName" className="field-divided" placeholder={agentToEdit.lastName} onChange={editInputOnChangeHandler}/>
                    </li>
                    <li>
                        <label htmlFor="date">Birth Date <span className="required">*</span></label>
                        <input type="date" name="dob" id="date" onFocus={`this.type=${agentToEdit.dob}`} onBlur="(this.type='text')" onChange={editInputOnChangeHandler}/>
                    </li>
                    <li>
                        <label>Height (inches)<span className="required">*</span></label>
                        <input type="text" name="height" className="field-long" placeholder={agentToEdit.height} onChange={editInputOnChangeHandler}/>
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
                        <input type="text" name="aliases[0].name" className="field-divided" placeholder={agentToEdit.aliases[0].name} onChange={editInputOnChangeHandler}/>
                    </li>
                    <li>
                        <label>Alias Persona</label>
                        <textarea name="aliases[0].persona" id="field5" className="field-long field-textarea"
                                  placeholder={agentToEdit.aliases[0].persona} onChange={editInputOnChangeHandler}/>
                    </li>
                    <li>
                        <input className="buttonSubmit" type="submit" value="Submit Changes"/>
                    </li>
                </ul>
            </form>
        </main>
    )
}