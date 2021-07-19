import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import AgentsContext from "./AgentsContext";
import EditAgentContext from "./EditAgentContext";

export default function CardFooter({agentId}) {

    //context
    const {agents, setAgents} = useContext(AgentsContext);
    const {agentToEdit, setAgentToEdit} = useContext(EditAgentContext);

    //for redirect after submit
    let history = useHistory();

    //delete agent
    function agentToDeleteOnClick() {
        setAgents(agents.filter(agent => agent.agentId !== agentId));

        //direct back to agents page
        history.push("/agents");
    }

    //update context with agentID to update
    function agentToUpdateOnClick() {
        setAgentToEdit(agentId)
    }

    return (
        <div className="cardFooter">
            <p>
                <Link to={"/edit_agent"} className="fa fa-edit" onClick={agentToUpdateOnClick}>
                    <FontAwesomeIcon icon={faEdit} />
                </Link>
            </p>
            <hr/>
            <p>
                <Link to={"/delete_agent"} className="fa fa-trash" onClick={agentToDeleteOnClick}>
                    <FontAwesomeIcon icon={faTrash} />
                </Link>
            </p>
        </div>
    )
}