import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var summa=0;

export default class New_component1 extends React.Component
 {

   constructor(props) {
     super(props);
     this.add_one = this.add_one.bind(this);
   }

	random(min, max) {
	   return Math.floor(Math.random()* (max - min) + min);
	}

	add_one() {
     summa+=1;
	   this.props.onClick(summa);
	}

  render() {

  	var style = {
      position: 'absolute',
      left: this.random(0, 80) + '%',
      top: this.random(0, 80) + '%',
      fontSize: 30,
      cursor: 'pointer',
      color:'red'

 	 };

    return (
      <div>
        <button style={style} onClick={this.add_one}>
      ◄►
        </button>
      </div>
    );
  }
}
