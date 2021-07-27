import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Home from "./components/pages/Home/Home";
import Components from "./components/pages/ReactComponents/Components";
import Figma from "./components/pages/Figma/Figma";
import Patterns from "./components/pages/Patterns/Patterns";
import UX from "./components/pages/UX/UX";
import Research from "./components/pages/Research/Research";
import Articles from "./components/pages/Articles/Articles";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/components/React' component={Components}/>
                    <Route path='/components/Figma' component={Figma}/>
                    <Route path='/patterns' component={Patterns}/>
                    <Route path='/UX' component={UX}/>
                    <Route path='/research' component={Research}/>
                    <Route path='/articles' component={Articles}/>

                    <Redirect from='/components' to='/components/React'/>
                    <Redirect from='/' to='/home'/>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
