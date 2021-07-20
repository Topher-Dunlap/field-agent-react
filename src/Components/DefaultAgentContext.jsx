import React from 'react'

const DefaultAgentContext = React.createContext({
    defaultAgent: '',
    setDefaultAgent: () => {}
})

export default DefaultAgentContext