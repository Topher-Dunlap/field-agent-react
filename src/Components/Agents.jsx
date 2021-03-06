import React, {useContext} from 'react';
import AgentCard from "./AgentCard";
import '../css/agents.css';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import AgentsContext from "./AgentsContext";

export default function Agents() {

    const contextAgents = useContext(AgentsContext);
    let {agents, setAgents} = contextAgents;

    return (
        <main>
            <div className="wrapper">
                <div className="typing-demo-agent">
                    <h1>Agents.</h1>
                </div>
            </div>
            <div className="addButtonDiv">
                <Link to={"/add_agent"}>
                    <FontAwesomeIcon icon={faPlus}/> Add Agent
                </Link>
            </div>
            <section className={"cards"}>
                {agents.map((agent, idx) => (
                    <AgentCard
                        key={idx}
                        agentId={agent.agentId}
                        firstName={agent.firstName}
                        lastName={agent.lastName}
                        dob={agent.dob}
                        height={agent.height}
                        agencies={agent.agencies}
                        aliases={agent.aliases}/>
                ))}
            </section>
        </main>
    )
}