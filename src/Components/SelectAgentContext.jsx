import React from 'react'

const SelectAgentContext = React.createContext({
    agentToSelect: '',
    setAgentToSelect: () => {}
})

export default SelectAgentContext