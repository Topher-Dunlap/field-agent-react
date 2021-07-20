import React, {useContext} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import '../css/delete-agent.css';
import CancelButton from "./CancelButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import AgentsContext from "./AgentsContext";

export default function DeleteAgent() {

    const {agents, setAgents} = useContext(AgentsContext);

    //agent to delete data
    const agentToDelete = agents.filter(agent => agent.agentId === agent_id);

    //for redirect after submit
    let history = useHistory();

    //agent_id from dynamic route
    const { agent_id } = useParams();

    //delete agent
    function agentDeleteOnClick() {
        setAgents(agents.filter(agent => agent.agentId !== agent_id));

        //direct back to agents page
        history.push("/agents");
    }

    return (
        <div>
            <header>
                <div className="wrapper">
                    <div className="typing-demo-delete">
                        <h1>Delete Agent.</h1>
                    </div>
                </div>
            </header>
            <main>
                <div className="bottomButtonDiv">
                    <h3>Are you sure you want to delete?</h3>
                    <h2>{agentToDelete[0].firstName} {agentToDelete[0].lastName}</h2>
                    <div className="deleteAgentButtons">
                        <CancelButton className="cancelButton"/>
                        <div className="confirmButton">
                            <Link onClick={agentDeleteOnClick}>
                                <FontAwesomeIcon icon={faCheck}/> Confirm
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}