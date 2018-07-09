import React, { Component } from 'react';
import FormContainer from './containers/FormContainer';

class App extends Component {
  render() {
    return (
        <div className="container">
            <div className="project-title">Test</div>
            <div className="form-container">
              <FormContainer />
            </div>
        </div>
    );
  }
}

export default App;
