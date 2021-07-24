import React, {useContext} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import '../css/delete-agent.css';
import CancelButton from "./CancelButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import AgentService from "../service/agent-service";
import AuthContext from "./AuthContext";
import AgentsContext from "./AgentsContext";
import config from '../config'

export default function DeleteAgent() {

    const auth = useContext(AuthContext);
    const {agents, setAgents} = useContext(AgentsContext);

    let history = useHistory();

    //agent_id from dynamic route
    let { agent_id } = useParams();
    agent_id = parseInt(agent_id, 10);

    //delete agent
    function agentDeleteOnClick() {
        const init = {
            method: 'DELETE', // GET by default
            headers: {
                'Authorization': `Bearer ${auth.user.token}`
            }
        };

        fetch(`${config.API_ENDPOINT}/agent/${agent_id}`, init)
            .then(response => {
                if (response.status === 204) {
                    AgentService.getAgents(auth.user.token, setAgents);
                    history.push("/agents");
                } else if (response.status === 404) {
                    Promise.reject(`Agent ID ${agent_id} not found`);
                } else {
                    Promise.reject('Something unexpected went wrong :)');
                }
            })
            .catch(error => console.log(error));
    }

    //agent to delete data
    const agentToDelete = agents.find(agent => agent.agentId === agent_id);

    if(!agentToDelete) {
        return null;
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
                    <h2>{agentToDelete.firstName} {agentToDelete.lastName}</h2>
                    <div className="deleteAgentButtons">
                        <CancelButton className="cancelButton"/>
                        <div className="confirmButton">
                            <Link
                                onClick={agentDeleteOnClick}
                                to={'/agents'}>
                                <FontAwesomeIcon icon={faCheck}/> Confirm
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}