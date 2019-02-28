import React, { Component } from 'react';
import Task from '../../../SharedModule/Task'
import './../Belt.css';

export default class Add extends Component {
  idCounter = 7
  state = {
    name: "",
    tags: null,
    endDate: new Date().toISOString().slice(0, 10)
  }

  addTask = () => {
    const {name, tags, endDate} = this.state
    const task = new Task(this.idCounter, name, tags, endDate)
    this.props.add(task)
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleTags = (e) => {
    let tags = e.target.value.split(", ")
    this.setState({
      tags
    })
  }

  handleDate = (e) => {
    this.setState({
      endDate: e.target.value
    })
  }

  render() {
    return (
      <>
        <input autoFocus className="add__input" type="text" placeholder="wpisz nazwę" onChange={this.handleName}/>
        <input className="add__input" type="text" placeholder="wpisz tagi (oddziel przecinkiem)" onChange={this.handleTags}/>
        <input className="date__input" type="date" value={this.state.endDate} min={this.state.endDate} onChange={this.handleDate}/>
        <button className="search__button" onClick={this.addTask}><i className={`im im-plus`}></i></button>
      </>
    )
  }
}
