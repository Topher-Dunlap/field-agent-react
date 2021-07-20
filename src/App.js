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
import DefaultAgentContext from "./Components/DefaultAgentContext";
import FormAgentContext from "./Components/FormAgentContext";

function App() {

    const DEFAULT_AGENT = {
        agentId: 0,
        firstName: '',
        lastName: '',
        dob: '',
        height: '',
        agencies: [{shortName: ''}],
        aliases: [{
            name: '',
            persona: ''
        }],
    }

    const [agents, setAgents] = useState(AgentData);
    const contextAgents = {agents, setAgents};

    const [agentToSelect, setAgentToSelect] = useState('');
    const contextSelectAgent = {agentToSelect, setAgentToSelect};

    const [defaultAgent, setDefaultAgent] = useState(DEFAULT_AGENT)
    const contextDefaultAgent = {defaultAgent, setDefaultAgent}

    const [formAgent, setFormAgent] = useState(defaultAgent)
    const contextFormAgent = {formAgent, setFormAgent}

    return (
        <AgentsContext.Provider value={contextAgents}>
            <SelectAgentContext.Provider value={contextSelectAgent}>
                <DefaultAgentContext.Provider value={contextDefaultAgent}>
                    <FormAgentContext.Provider value={contextFormAgent}>
                        <header>
                            <Nav/>
                        </header>
                        <ErrorBoundary>
                            <SwitchNavRoutes/>
                        </ErrorBoundary>
                        <Footer/>
                    </FormAgentContext.Provider>
                </DefaultAgentContext.Provider>
            </SelectAgentContext.Provider>
        </AgentsContext.Provider>
    );
}

export default App;