import React from 'react';
import { DropdownButton, PulldownMenu, Home, About } from './';
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <nav className="nav-menu">
                <PulldownMenu />
            </nav>
            <DropdownButton />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </div>
    );
}

export default App;
