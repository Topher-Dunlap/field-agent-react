import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

export default function CardFooter({agentId}) {
    return (
        <div className="cardFooter">
            <p>
                <Link to={`/agents/edit/${agentId}`} className="fa fa-edit">
                    <FontAwesomeIcon icon={faEdit} />
                </Link>
            </p>
            <hr/>
            <p>
                <Link to={`/agents/delete/${agentId}`} className="fa fa-trash">
                    <FontAwesomeIcon icon={faTrash} />
                </Link>
            </p>
        </div>
    )
}