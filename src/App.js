import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Person from "./Components/Person";

class App extends Component {
  state = {
    //if state is changed then react re-renders the dom to check for changes
    people: [
      { id: "1", name: "hari", age: 19 },
      { id: "2", name: "romu", age: 20 },
      { id: "3", name: "pooja", age: 23 },
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

  showpersonhandler = () => {
    const per = this.state.showpersons;
    this.setState({ showpersons: !per });
  };

  deleteNameHandler = (peopleIndex) => {
    // const people = this.state.people; this is not a good practice as we are directly changing the original state(mutate same state) inorder to avoid to that we have to copy the contents from the state first and then change it afterwards using spread operator
    const people = [...this.state.people];
    people.splice(peopleIndex, 1);
    this.setState({ people });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      width: "100px",
      height: "50px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let rend = null;
    if (this.state.showpersons) {
      rend = (
        <div>
          {this.state.people.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deleteNameHandler(index)}
                key={person.id}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "#d6006b",
        color: "white",
      };
    }

    const classes = [];
    if (this.state.people.length <= 2) {
      classes.push("color");
    }
    if (this.state.people.length <= 1) {
      classes.push("bold");
    }

    return (
      <StyleRoot>
        <div className="App">
          <p className={classes.join(" ")}>Hello</p>
          <button style={style} onClick={this.showpersonhandler}>
            Switch name
          </button>
          {rend}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
