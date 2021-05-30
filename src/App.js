import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import { UserContext } from './UserContext';
import { InfoContext } from './InfoContext';

function App() {

    const [value, setValue] = useState(null);
    const [info, setInfo] = useState([null]);

    return (
        <Router>
        <div className="app">
            <UserContext.Provider value={[value, setValue]} >
                <InfoContext.Provider value={[info, setInfo]} >
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </InfoContext.Provider >
            </UserContext.Provider>
        </div>
        </Router>
    );
}

export default App;
