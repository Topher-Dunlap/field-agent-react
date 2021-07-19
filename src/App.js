import React, {useState, useEffect} from 'react';
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import SwitchNavRoutes from "./Components/SwitchNavRoutes";
import ErrorBoundary from "./Components/ErrorBoundary";
import './css/reset.css';
import './css/main.css';
import AgentData from "./data";
import AgentsContext from "./Components/AgentsContext";
import SelectAgentContext from "./Components/SelectAgentContext";

function App() {

    const [agents, setAgents] = useState(AgentData);
    const contextAgents = {agents, setAgents};

    const [agentToSelect, setAgentToSelect] = useState('');
    const contextSelectAgent = {agentToSelect, setAgentToSelect};

    return (
        <AgentsContext.Provider value={contextAgents}>
            <SelectAgentContext.Provider value={contextSelectAgent}>
                <header>
                    <Nav/>
                </header>
                <ErrorBoundary>
                    <SwitchNavRoutes/>
                </ErrorBoundary>
                <Footer/>
            </SelectAgentContext.Provider>
        </AgentsContext.Provider>
    );
}

export default App;