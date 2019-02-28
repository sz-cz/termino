import React, { Component } from 'react'
import './../Belt.css';

export default class Tags extends Component {

  tags = this.props.tags;
  tagsTable = this.tags().map((tag, index) => <span className="tag" key={index} onClick={() => this.props.searchTag(tag)}>{tag} </span>)

  render() {
    return (
      <>
        {this.tagsTable}
      </>
    )
  }
}

