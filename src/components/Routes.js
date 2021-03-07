import {Switch, Route} from "react-router-dom";  
import ServicePage from '../pages/ServicePage';
import AboutPage from '../pages/AboutPage';
import NINpage from '../pages/NINpage';



function Routes(){
    return (<Switch>
                <Route path="/">
                    <NINpage />
                </Route>

                <Route path="/about">
                    <AboutPage />
                </Route>

                <Route path="/services">
                    <ServicePage />
                </Route>

            </Switch>
            )}

export default Routes;