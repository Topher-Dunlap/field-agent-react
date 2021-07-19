import React, {useState} from 'react';
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import SwitchNavRoutes from "./Components/SwitchNavRoutes";
import ErrorBoundary from "./Components/ErrorBoundary";
import './css/reset.css';
import './css/main.css';
import AgentData from "./data";
import AgentsContext from "./Components/AgentsContext";
import EditAgentContext from "./Components/EditAgentContext";

function App() {

    const [agents, setAgents] = useState(AgentData);
    const contextAgents = {agents, setAgents};

    const [agentToEdit, setAgentToEdit] = useState('');
    const contextEditAgent = {agentToEdit, setAgentToEdit};

    return (
        <AgentsContext.Provider value={contextAgents}>
            <EditAgentContext.Provider value={contextEditAgent}>
                <header>
                    <Nav/>
                </header>
                <ErrorBoundary>
                    <SwitchNavRoutes/>
                </ErrorBoundary>
                <Footer/>
            </EditAgentContext.Provider>
        </AgentsContext.Provider>
    );
}

export default App;