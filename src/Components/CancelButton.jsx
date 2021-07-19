import React from 'react';
import {Link, useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export default function CancelButton(){

    let history = useHistory();
    function handleBack() {
        history.push("/agents");
    }

    return(
        <div className="cancelButton">
            <Link onClick={handleBack}><FontAwesomeIcon icon={faTimes}/> Cancel</Link>
        </div>
    )
}