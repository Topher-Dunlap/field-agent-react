import React from 'react';

export default function CardFooter() {
    return (
        <div className="cardFooter">
            <p>
                <a href="edit-agent.html" className="fa fa-edit">Edit</a>
            </p>
            <hr/>
            <p>
                <a href="delete-agent.html" className="fa fa-trash">Delete</a>
            </p>
        </div>
    )
}