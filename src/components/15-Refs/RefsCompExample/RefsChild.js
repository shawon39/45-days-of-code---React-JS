import React, { Component } from 'react'

class RefsChild extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  focusInput = () => {
    this.inputRef.current.focus();
  }
  
  render() {
    return (
      <div>
        <input className="form-control" type="text" ref={this.inputRef}/>
      </div>
    )
  }
}

export default RefsChild
