import React, { Component } from 'react';
import Belt from './Belt/Belt'
import './Header.css';

function Button(props) {
  return (
    <div className={`menu__menu-button ${props.state === props.name ? "menu__menu-button--active" : ""}`} onClick={() => props.handler(props.name)}>
      <i className={`im im-${props.icon} ${props.doneList === true ? "im-data-validate" : ""}`}></i><p className="menu-button__name">{props.name}</p>
    </div>
  )
}

export class Header extends Component {

    serwys = this.props.service
    buttons = [1, 2, 3, 4]
    changeList = () => {
      this.props.mode();
      this.setState({
        isDoneActive: !this.state.isDoneActive
      })
    }

    handleClick = (name) => {
      if (name === this.state.activeBelt) {
        this.setState({
          activeBelt: "termino"
        })
      } else {
        this.setState({
          activeBelt: name,
        })
      }
    }
    state = {
      activeBelt: "termino",
      isDoneActive: false
    }

    render() {
      return (
        <header>
          <div className="container">
            <Button doneList={this.state.isDoneActive} name="termino" icon="data" handler={this.changeList}/>
            <Button state={this.state.activeBelt} name="dodaj" icon="plus" handler={this.handleClick}/>
            <Button state={this.state.activeBelt} name="sortuj" icon="filter" handler={this.handleClick}/>
            <Button state={this.state.activeBelt} name="szukaj" icon="magnifier" handler={this.handleClick}/>
            <Button state={this.state.activeBelt} name="tagi" icon="tag" handler={this.handleClick}/>
            <h3 className="menu__title" onClick={() => this.handleClick(this.state.activeBelt)}>{this.state.activeBelt}</h3>
          </div>
            <Belt activeBelt={this.state.activeBelt} add={this.props.add} sort={this.props.sort} tags={this.props.tags} searchInput={this.props.searchInput} searchTag={this.props.searchTag} list={this.props.list} service={this.props.service} mode={this.props.mode}/>
        </header>
      );
    }
  }