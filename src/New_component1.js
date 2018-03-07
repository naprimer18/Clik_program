import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var summa=0;

 class New_component1 extends React.Component {

   constructor(props) {
     super(props);
   }

	random(min, max) {
	   let r = Math.random();
	   return Math.floor(r * (max - min) + min);
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
        <button style={style} onClick={this.add_one.bind(this)}>
      ◄►
        </button>
      </div>
    );
  }
}
export default New_component1;
