/*
Pure Functions- Function that always returns the same output given the same input.

Immutability- When you need to modify immutable data, return a different object with the changed data 
and unchanged. 

Entity State- application state, anything needing creation, updating, and deletion. Back-end.

View State- Front-end oriented.  Switch Box for preview or edit mode for example. 

Local State - also called internal component state. Bound to components. Lives in View layer.  
this.setState() manages it. Visible only to component. 

Sophisticated State- external state. Redux and or MobX. Globally accessible. 

Stateful Component- when state is used it becomes stateful.

Stateless Component- when state is not used for the component.

Functional Stateless Component- have no state and are only functions.  
They accept input as props and return output as JSX.

EXAMPLE OF FUNCTIONAL STATELESS COMPONENT:::::::   */

import React from "react";
function CounterPresenter(props) {
  return (
    <div>
      <p>{props.counter}</p>
      <button type="button" onClick={props.onIncrement}>
        Increment
      </button>
      <button type="button" onClick={props.onDecrement}>
        Decrement
      </button>
    </div>
  );
}

/* EXAMPLE OF PROPER STATE MANAGEMENT with Unidirectional Data Flow::::: */
import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    const { value } = event.target;
    this.setState({
      query: value
    });
  }
  onSubmit(event) {
    const { query } = this.state;
    // do something with the search value
    // e.g. propagate it up to the parent component
    this.props.onSearch(query);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input value={this.state.query} onChange={this.onChange} type="text" />
        <button type="submit">Search</button>
      </form>
    );
  }
}
/*

Action - a javacsript object which has a type and an optional payload. 
Executing an action is called dispatching in redux.

Reducer- Actions pass through reducers.  IS A PURE FUNCTION. IN/OUT Operation. Two inputs - state and action.
    It also always returns a newState Object without mutating the incoming prevState object. 
