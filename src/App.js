import React, {useState, useEffect} from 'react';
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import SwitchNavRoutes from "./Components/SwitchNavRoutes";
import ErrorBoundary from "./Components/ErrorBoundary";
import './css/reset.css';
import './css/main.css';
import AgentData from "./default_values/data";
import DEFAULT_USER from "./default_values/default_user";
import AgentsContext from "./Components/AgentsContext";
import AuthContext from "./Components/AuthContext";
import jwt_decode from 'jwt-decode';

function App() {

    const [user, setUser] = useState(null);
    const [agents, setAgents] = useState(AgentData);
    const [initialized, setInitialized] = useState(false);
    const contextAgents = {agents, setAgents};

    const TOKEN_KEY = 'user-api-token';

    useEffect(() => {
        const token = localStorage.getItem(TOKEN_KEY);

        if (token) {
            login(token);
        }

        setInitialized(true);
    }, []);

    const login = (token) => {
        console.log(token);

        // store the token away to persist the user's login
        localStorage.setItem(TOKEN_KEY, token);

        // example of token payload:
        // {
        //   "iss": "dev10-users-api",
        //   "sub": "john@smith.com",
        //   "id": "983f1224-af4f-11eb-8368-0242ac110002",
        //   "roles": "ADMIN",
        //   "exp": 1620495306
        // }

        // decode the token string into a JavaScript object
        const tokenObj = jwt_decode(token);
        console.log(tokenObj);

        // short form using destructuring...
        const { id, sub: username, roles: rolesString } = jwt_decode(token);

        // Split the roles string into an array of roles.
        const roles = rolesString.split(',');

        // create the "user" object
        const user = {
            id,
            username,
            roles,
            token,
            hasRole(role) {
                return this.roles.includes(role);
            }
        };

        console.log(user);

        // update the user state
        setUser(user);

        return user;
    };

    const logout = () => {
        localStorage.removeItem(TOKEN_KEY);
        setUser(null);
    };

    const auth = {
        user: user ? {...user} : null,
        login,
        logout
    };

    // prevent routing until we've prevented restoring the user's login state...
    if (!initialized) {
        return null;
    }

    return (
        <AgentsContext.Provider value={contextAgents}>
            <AuthContext.Provider value={auth}>
                <header>
                    <Nav/>
                </header>
                <ErrorBoundary>
                    <SwitchNavRoutes/>
                </ErrorBoundary>
                <Footer/>
            </AuthContext.Provider>
        </AgentsContext.Provider>
    );
}

export default App;