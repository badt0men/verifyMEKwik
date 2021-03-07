import React from 'react';
//import HomePage from './pages/HomePage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";  
import BVNpage from './pages/BVNpage';
import NINpage from './pages/NINpage';
import Passportpage from "./pages/Passportpage";
import VINpage from "./pages/VINpage";
import FRSCpage from "./pages/FRSCpage";

function App(){
        return (<Router>
                <Switch>
                <Route path="/" exact component={ NINpage } />
                <Route path="/nin" component={NINpage} />
                <Route path="/bvn" component={BVNpage} />
                <Route path="/passport" component={Passportpage} />
                <Route path="/vin" component={VINpage} />
                <Route path="/frsc" component={FRSCpage} />
                <Route path="" component={Error} />
                </Switch>
                </Router>);
}

export default App;