import React, { Component } from 'react';
import './../Belt.css';

export default class Sort extends Component {
  render() {
    return (
        <>
            <button name="abc+" className="search__button" onClick={this.props.sort}><i className="belt__icon">A</i><span className="button__name">alfabetycznie: rosnąco</span></button>
            <button name="abc-" className="search__button" onClick={this.props.sort}><i className="belt__icon">Z</i><span className="button__name">alfabetycznie: malejąco</span></button>
            <button name="start+" className="search__button" onClick={this.props.sort}><i className={`im im-clock-o`}></i><span className="button__name">utworzone: najwcześniej</span></button>
            <button name="start-" className="search__button" onClick={this.props.sort}><i className={`im im-history`}></i><span className="button__name">utworzone: najpóźniej</span></button>
            <button name="end+" className="search__button" onClick={this.props.sort}><i className="belt__icon">0</i><span className="button__name">termin: najbliższe</span></button>
            <button name="end-" className="search__button" onClick={this.props.sort}><i className="belt__icon">9</i><span className="button__name">termin: najdalsze</span></button>
        </>
    )
  }
}
