import React, {useContext, useState} from 'react';
import AgentCard from "./AgentCard";
import '../css/agents.css';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import AgentsContext from "./AgentsContext";
// import AgentData from "../data";

export default function Agents() {

    const contextAgents = useContext(AgentsContext);
    let {agents, setAgents} = contextAgents;

    // const [agents, setAgents] = useState(AgentData);

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
                        key={agent.id}
                        agentId={agent.id}
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