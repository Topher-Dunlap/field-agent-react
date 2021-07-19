import React from 'react'

const EditAgentContext = React.createContext({
    agentToEdit: '',
    setAgentToEdit: () => {}
})

export default EditAgentContext