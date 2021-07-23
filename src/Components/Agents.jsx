import React, {useContext, useEffect, useState} from 'react';
import AgentCard from "./AgentCard";
import '../css/agents.css';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "./AuthContext";
import AgentsContext from "./AgentsContext";

export default function Agents() {

    // const contextAgents = useContext(AgentsContext);
    const auth = useContext(AuthContext);

    let [agents, setAgents] = useState([]);
    const contextAgents = {agents, setAgents};

    const getAgents = (token) => {
        const init = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        // loading initial data for our component
        fetch('http://localhost:8080/api/agent', init)
            .then(response => response.json())
            .then(data => setAgents(data))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getAgents(auth.user.token);
    }, [auth.user.token]);

    if(!agents){
        return null
    }

    return (
        <AgentsContext.Provider value={contextAgents}>
            <main>
                <div className="wrapper">
                    <div className="typing-demo-agent">
                        <h1>Agents.</h1>
                    </div>
                </div>
                <div className="addButtonDiv">
                    <Link to={"/agents/add"}>
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
        </AgentsContext.Provider>
    )
}