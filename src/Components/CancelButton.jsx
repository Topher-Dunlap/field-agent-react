import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export default function CancelButton(){
    return(
        <div className="cancelButton">
            <Link to="/agents"><FontAwesomeIcon icon={faTimes}/> Cancel</Link>
        </div>
    )
}