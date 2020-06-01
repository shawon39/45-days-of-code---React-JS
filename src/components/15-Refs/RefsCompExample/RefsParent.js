import React, { Component } from 'react'
import RefsChild from './RefsChild';

class RefsParent extends Component {
  constructor(props) {
    super(props)
    this.componentRef = React.createRef()
  }

  clickHandler = () => {
    this.componentRef.current.focusInput();
  }
  
  render() {
    return (
      <div>
        <h3 className="mb-4">Component Ref</h3>
        <RefsChild ref={this.componentRef} />
        <button className="btn btn-primary my-4" onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default RefsParent
