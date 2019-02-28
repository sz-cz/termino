import React, { Component } from 'react';
import Element from './Element/Element';
import Statistic from './Statistics';
import './List.css';


export default class List extends Component {
  props = this.props

  renderTaskList = tasks => {
    return tasks.map((task, index) => <Element key={task.id} task={task} index={index} delete={this.props.delete} move={this.props.move}/>)
  }


  render() {
    return (
      <>
        <div className="list">
          <ul>
            {this.renderTaskList(this.props.state.list)}
          </ul>
        </div>
        <Statistic toDoLength={this.props.toDoLength} doneLength={this.props.doneLength} doneList={this.props.state.doneList} />
      </>
    )
  }
}

