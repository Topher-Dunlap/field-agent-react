import config from '../config'

const AgentService = {
    getAgents(token, setAgents) {
        const init = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        // loading initial data for our component
        fetch(`${config.API_ENDPOINT}/agent`, init)
            .then(response => response.json())
            .then(data => setAgents(data))
            .catch(error => console.log(error));
    }

}

export default AgentService