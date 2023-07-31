
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

export  class App extends Component {
    pageSize = 5 ;

    render() {
        return (
            <div>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/"><News key="general" pageSize={this.pageSize} country="in" category="general"/></Route>
                        <Route exact path="/Business"><News key="business" pageSize={this.pageSize} country="in" category="business"/></Route>
                        <Route exact path="/Entertainment"><News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/></Route>
                        <Route exact path="/Health"><News key="health" pageSize={this.pageSize} country="in" category="health"/></Route>
                        <Route exact path="/Science"><News key="science" pageSize={this.pageSize} country="in" category="science"/></Route>
                        <Route exact path="/Sports"><News key="sports" pageSize={this.pageSize} country="in" category="sports"/></Route>
                        <Route exact path="/Tech"><News key="tech" pageSize={this.pageSize} country="in" category="technology"/></Route>
                    </Switch>
                </Router>
              
            </div>
        )
    }
}

export default App;
