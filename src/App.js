import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Forecast from './Forecast';
import Moon from './Moon';
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
          <Router basename="MAVIS/">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/forecast" component={Forecast}/>
              <Route path="/moon" component={Moon}/>
              <Route component={ NoMatch }/>
            </Switch>
          </Router>
        </Layout>  
      </React.Fragment>
        );
    }
};

export default App;