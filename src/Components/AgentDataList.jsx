import React from 'react';

export default function AgentDataList({dob, height, agencies, aliases}){
    return(
        <ul>
            <li><label className="cardLabel">DOB: </label> {dob}</li>
            <li><label className="cardLabel">Height: </label> {height}</li>
            <li><label className="cardLabel">Agencies: </label>
                <ul>
                    {agencies.map(agency => (<li key={agency}>{agency}</li>))}
                </ul>
            </li>
            <li><label className="cardLabel">Aliases: </label>
                <ul>
                    {aliases.map(alias => (<li key={alias.id}> {alias.name} {alias.persona}</li>))}
                </ul>
            </li>
        </ul>
    )
}