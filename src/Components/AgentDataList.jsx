import React from 'react';

export default function AgentDataList({dob, height, agencies, aliases}){
    return(
        <ul>
            <li><label className="cardLabel">DOB: </label> {dob}</li>
            <li><label className="cardLabel">Height: </label> {height}</li>
            <li><label className="cardLabel">Agencies: </label>
                <ul>
                    {agencies.map(a => (<li key={a.agencyId}>{a.shortName}</li>))}
                </ul>
            </li>
            <li><label className="cardLabel">Aliases: </label>
                <ul>
                    {aliases.map(alias => (<li key={alias.aliasId}> {alias.name} {alias.persona}</li>))}
                </ul>
            </li>
        </ul>
    )
}