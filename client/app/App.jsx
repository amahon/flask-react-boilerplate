import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import Navigation from './navigation';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container-fluid'>
          <div className="row">
            <div className="col">
              <h1>App</h1>
              <Navigation />
            </div>
            <div className="col-10">
              <Route exact path="/" component={Home}/>
            </div>
          </div>
        </div>
      </Router>);
  }
}

export default App;
