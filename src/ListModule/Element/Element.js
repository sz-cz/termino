import React, { Component } from 'react'
import './Element.css';

export default class Element extends Component {
  state = {
    belt: null
  }

  handleClick = (id) => {
    if (!this.state.belt) {
      this.setState({
        belt:
        <div className="text__belt">
          <p><span className="belt__subtitle">Utworzono:</span> {this.props.task.startDate}</p>
          {this.props.task.endDate ? <p><span className="belt__subtitle">Termin:</span> {this.props.task.endDate}</p> : null }
          <p><span className="belt__subtitle">Tagi:</span> {this.props.task.tags.join(", ")}</p>
        </div>,
        button: <div className="element__button--delete" onClick={() => this.props.delete(this.props.index)}><i className="im im-x-mark"></i></div>
      })
    } else {
      this.setState({
        belt: null,
        button: null
      })
    }
}

  render() {
  return (
    <li className="list__element" onClick={() => this.handleClick(this.props.index)}>
    <div className="element__text">
      <h4 className="text__title">{this.props.task.name}</h4>
      {this.state.belt}
    </div>
    <div className="element__buttons">
      <div className="element__button" onClick={() => this.props.move(this.props.index)}><i className="im im-check-mark"></i></div>
      {this.state.button}
    </div>

    </li>
  )
}
}