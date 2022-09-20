import React, { Component } from "react";
import "./App.css";
import Person from "./Components/Person";

class App extends Component {
  state = {
    //if state is changed then react re-renders the dom to check for changes
    people: [
      { name: "hari", age: 19 },
      { name: "romu", age: 20 },
      { name: "pooja", age: 23 },
    ],
    showpersons: true,
  };

  switchbutthandler = (abc) => {
    // this.state.people[0].name = 'abc'; --> this wont work as we cannot directly modify the state use setState method instead!
    this.setState({
      people: [
        { name: abc, age: 19 },
        { name: "romu", age: 20 },
        { name: "pooja", age: 23 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    // this.state.people[0].name = 'abc'; --> this wont work as we cannot directly modify the state use setState method instead!
    this.setState({
      people: [
        { name: "hari", age: 19 },
        { name: event.target.value, age: 20 },
        { name: "pooja", age: 23 },
      ],
    });
  };

  showpersonhandler = () => {
    const per = this.state.showpersons;
    this.setState({ showpersons: !per });
  };

  render() {
    let rend = null;
    if (this.state.showpersons) {
      rend = (
        <div>
          <Person
            name={this.state.people[0].name}
            age={this.state.people[0].age}
          />
          <Person
            name={this.state.people[1].name}
            age={this.state.people[1].age}
            // click={this.switchbutthandler.bind(this, "happy")}
            change={this.nameChangeHandler}
          >
            Hobbies: f1
          </Person>
          <Person
            name={this.state.people[2].name}
            age={this.state.people[2].age}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hello</h1>
        <button onClick={this.showpersonhandler}>Switch name</button>
        {rend}
      </div>
    );
  }
}

export default App;
