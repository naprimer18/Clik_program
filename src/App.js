import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import New_component1 from './New_component1.js'
import CreateGame from './CreateGame.js'

class App extends Component {
		render() {
    	return (
     	  <div>
       		<CreateGame/>
			 </div>
    				);
  	}
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
