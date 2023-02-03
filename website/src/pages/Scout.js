import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import PurpleOFF from '../artifacts/images/Box/PurpleOFF.png';
import PurpleON from '../artifacts/images/Box/PurpleON.png';
import ConeOFF from '../artifacts/images/Box/ConeOFF.png';
import ConeON from '../artifacts/images/Box/ConeON.png';
import Empty from '../artifacts/images/Box/Blank.png';

const imagesPath = {
    PurpleOFF: PurpleOFF,
    PurpleON: PurpleON,
    Bottom: Empty,    
  }

  const imagesPath1 = {   
    ConeOFF: ConeOFF,
    ConeON: ConeON
  }

  class Scout extends React.Component {
    state = {
      open: true,
      opent: true
    }

    toggleImage = () => {
      this.setState(state => ({ open: !state.open }))
    }
    togglet = () => {
      this.setState(state => ({ open: !state.open }))
    }
  
    getPurple = () => this.state.open ? "PurpleOFF" : "PurpleON"
    getYellow = () => this.state.opent ? "ConeOFF" : "ConeON"
    /*getBottom = () => this.state.open2 ? "Empty" : "PurpleON" */

    render() {
      const BOX = this.getPurple();
      const CONE = this.getYellow();
      /*const TestB = this.getBottom();*/

console.log(BOX)
console.log(CONE)

      return (
        <div>
          <img style={{maxWidth: '100px'}} alt={"Box"} src={imagesPath[BOX]} onClick={this.toggleImage} />
          <img style={{maxWidth: '100px'}} alt={"Cone"} src={imagesPath1[CONE]} onClick={this.togglet} />
        </div>
      );
    }
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<Scout />, rootElement);

export default Scout;
