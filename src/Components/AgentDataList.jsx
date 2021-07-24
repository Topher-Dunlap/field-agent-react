import React from 'react';

export default function AgentDataList({agentId, dob, heightInInches, agencies, aliases}){
    return(
        <ul>
            <li><label className="cardLabel">DOB: </label> {dob}</li>
            <li><label className="cardLabel">Height: </label> {heightInInches}</li>
            <li><label className="cardLabel">Agencies: </label>
                <ul>
                    {agencies.map(a => (<li key={`${agentId}-${a.agencyId}`}>{a.shortName}</li>))}
                </ul>
            </li>
            <li><label className="cardLabel">Aliases: </label>
                <ul>
                    {aliases.map(alias => (<li key={`${agentId}-${alias.aliasId}`}> {alias.name} {alias.persona}</li>))}
                </ul>
            </li>
        </ul>
    )
}