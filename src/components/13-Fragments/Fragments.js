import React, { Component } from 'react'

class Fragments extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>I am h1 Tag</h1>
        <p>I am P Tag</p>
      </React.Fragment>
      // So we don't need a new elements(div)
      // We can render multiple elements
    )
  }
}

export default Fragments
