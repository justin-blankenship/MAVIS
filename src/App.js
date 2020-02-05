import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Forecast from './Forecast';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

    render() {
        return (
            <React.Fragment>
      
        <NavigationBar/>
        <Jumbotron/>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/forecast" component={Forecast}/>
              <Route path="/contact" component={Contact}/>
              <Route component={ NoMatch }/>
            </Switch>
          </Router>
        </Layout>  
      </React.Fragment>
        );
    }
};

export default App;