import React from 'react';
import {
    DropdownButton,
    PulldownMenu,
    Home,
    About,
    Projects,
    Contact,
    Backdrop,
} from './';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <nav className="nav-menu">
                <PulldownMenu />
                <Backdrop name="pulldownMenu" />
            </nav>
            <DropdownButton />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
