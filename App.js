import React, { Component } from 'react';
import './App.css';
import SearchPage from './components/SearchPage';
import ResultsPage from './components/ResultsPage';

class App extends Component {
  state = {
    FormSubmitted: false,
  };

  submitted = () => {
    console.log('Form Submitted');
    this.setState({ FormSubmitted: true });
  };

  render() {
    if (this.state.FormSubmitted) {
      return (
        <div className="App">
          <ResultsPage />
        </div>
      );
    }
    console.log(this.state.FormSubmitted);
    return (
      <div className="App">
        <SearchPage submitted={this.submitted} />
      </div>
    );
  }
}

export default App;
