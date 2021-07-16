import React from 'react';
import AgentData from '../data';
import AgentCard from "./AgentCard";
import '../css/agents.css';

export default function Agents() {
    return (
        <main>
            <div className="wrapper">
                <div className="typing-demo">
                    <h1>Agents.</h1>
                </div>
            </div>
            {AgentData.map((agent, idx) => (
                <AgentCard
                    key={agent.id}
                    firstName={agent.firstName}
                    lastName={agent.lastName}
                    dob={agent.dob}
                    height={agent.height}
                    agencies={agent.agencies}
                    aliases={agent.aliases}/>
            ))}
        </main>
    )
}