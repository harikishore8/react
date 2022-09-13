import React, { Component } from "react";
import "./App.css";
import Person from "./Components/Person";

class App extends Component {
  state = {
    //is state is changed then react re-renders the dom to check for changes
    people: [
      { name: "hari", age: 19 },
      { name: "romu", age: 20 },
      { nmae: "pooja", age: 23 },
    ],
  };

  switchbutthandler = () => {
    console.log(this);
    alert(this.state.people[0].name);
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <button onClick={this.switchbutthandler}>Switch name</button>
        <Person
          name={this.state.people[0].name}
          age={this.state.people[0].age}
        />
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>
          Hobbies: f1
        </Person>
        <Person
          name={this.state.people[2].name}
          age={this.state.people[2].age}
        />
      </div>
    );
  }
}

export default App;
