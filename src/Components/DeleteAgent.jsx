import React from 'react';
import '../css/delete-agent.css';
import CancelButton from "./CancelButton";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

export default function DeleteAgent() {
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
                    <h2>James Bond</h2>
                    <div className="deleteAgentButtons">
                        <CancelButton className="cancelButton"/>
                        <div className="confirmButton">
                            <Link><FontAwesomeIcon icon={faCheck}/> Confirm</Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}