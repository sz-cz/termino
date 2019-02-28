import React, { Component } from 'react';
import './List.css';

export default class Statistics extends Component {
    doneTasksSpn = "zrobionych zadań";
    toDoTasksSpn = "zadań";

    state = {
      toDoLength: this.props.toDoLength,
      doneLength: this.props.doneLength
    }

    setStatistics = () => {
        switch (this.props.toDoLength) {
            case 1:
              this.toDoTasksSpn = "zadanie";
              break;
            case 2:
            case 3:
            case 4:
            this.toDoTasksSpn = "zadania";
              break;
            default:
            this.toDoTasksSpn = "zadań";
        }
        switch (this.props.doneLength) {
            case 1:
              this.doneTasksSpn = "zrobione zadanie";
              break;
            case 2:
            case 3:
            case 4:
              this.doneTasksSpn = "zrobione zadania";
                break;
            default:
              this.doneTasksSpn = "zrobionych zadań";
        }
    }


  render() {
    this.setStatistics();
    return (
      <div className="statistics">
        <h3>Statystyki</h3>
        <p>Masz {this.props.toDoLength} {this.toDoTasksSpn} do zrobienia oraz {this.props.doneLength} {this.doneTasksSpn}.</p>
      </div>
    )
  }
}
