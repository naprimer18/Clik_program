import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import New_component1 from './New_component1.js'

const i = 10;

class CreateGame extends Component {

  constructor(props) {
  		super(props);
      this.state={ball:0};
      this.state = {value:10};
  	}

    increment(sum) {
	     this.setState({ball:sum});
    }

     decrement() {
       this.setState({value: this.state.value - 1});
       if(this.state.value<=0) {
         alert("start again !!! ");
    	   window.location.reload();
       }
     }

     componentDidMount() {
       setInterval(() => this.decrement(), 1000);
     }

     render() {
	      let condition = <h1 className="name1"> Набери 7 кликов , Осталось: {this.state.value} секунд </h1>
        let win;
        if(this.state.ball >= 7) {
        win=<h1 className="name2"> Ez win !!!  </h1>
    }
    let newPoint = <h1 className="name3"> Click : {this.state.ball}</h1>
	   return(
		     <div>
			      <h1 >{condition}</h1>
			         <New_component1 onClick={this.increment.bind(this)} />
               {newPoint}
               {win}
		    </div>
          );
    }
}
export default CreateGame;
