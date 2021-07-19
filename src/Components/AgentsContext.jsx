import React from 'react'

const AgentsContext = React.createContext({
    agents: [],
    setAgents: () => {}
})

export default AgentsContext