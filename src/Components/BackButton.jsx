import React from 'react';
import {Link, useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export default function BackButton(){

    let history = useHistory();
    function handleBack() {
        history.push("/agents");
    }

    return(
        <div className="backButton">
            <Link onClick={handleBack}><FontAwesomeIcon icon={faTimes}/> Close</Link>
        </div>
    )
}