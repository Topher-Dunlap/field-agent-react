import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import SelectAgentContext from "./SelectAgentContext";

export default function CardFooter({agentId}) {

    //context
    const {agentToSelect, setAgentToSelect} = useContext(SelectAgentContext);

    //update context with agentID to update
    function agentToSelectOnClick() {
        setAgentToSelect(agentId)
    }

    return (
        <div className="cardFooter">
            <p>
                <Link to={"/agents/edit"} className="fa fa-edit" onClick={agentToSelectOnClick}>
                    <FontAwesomeIcon icon={faEdit} />
                </Link>
            </p>
            <hr/>
            <p>
                <Link to={"/agents/delete"} className="fa fa-trash" onClick={agentToSelectOnClick}>
                    <FontAwesomeIcon icon={faTrash} />
                </Link>
            </p>
        </div>
    )
}