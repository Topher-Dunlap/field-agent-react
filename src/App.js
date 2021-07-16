import React from 'react';
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import SwitchNavRoutes from "./Components/SwitchNavRoutes";
import ErrorBoundary from "./Components/ErrorBoundary";
import './css/main.css';

function App() {
  return (
      <div>
          <header>
              <Nav/>
          </header>
          <ErrorBoundary>
              <SwitchNavRoutes/>
          </ErrorBoundary>
          <Footer/>
      </div>
  );
}

export default App;