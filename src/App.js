import React, { Component } from 'react';
import './App.css';

let allChecklists = [
{
  name: 'Secure Cabin Checklist',
  checklist: [
    {
      name: "Parking Break",
      value: "Set"
    },
    {
      name: "Battery (OHP)",
      value: "On & Covered"
    },
    {
      name: "Standy PWR",
      value: "Auto & Covered"
    }
  ]
},
{
  name: 'Engine S/U & Pushback',
  checklist: [
    {
      name: "Pushback",
      value: "Start"
    }
  ]
}
]

class ChecklistName extends Component {
  render() {
    return (
      <div className="checklistnamebox">
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

class Check extends Component {
  render() {
    return (
      <li className={this.props.index === this.props.activecheck && 'activecheck'}>
        <div className="checkname">
          {this.props.data.name}
        </div>
        <div className="checkvalue">
          {this.props.data.value}
        </div>
      </li>
    );
  }
}

class NextCheckButton extends Component {
  render() {
    return (
      <div>
        <button>Next check</button>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      checkLists: allChecklists,
      activeList: 0,
      activeCheck: 0
    } 
  }
  render() {
    return (
      <div className="App">
        <ChecklistName name={this.state.checkLists[this.state.activeList].name}/>
        <div className="checkscontainer">
          <ul>
            {this.state.checkLists[this.state.activeList].checklist.map((check,index) =>
              <Check data={check} index={index} activecheck={this.state.activeCheck}/>
            )}
            
          </ul>
          <div className="buttonswrapper">
            <NextCheckButton/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
