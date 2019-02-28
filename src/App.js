import React, { Component } from 'react';
import './App.css';
import {Header} from './HeaderModule/Header'
import List from './ListModule/List'

class App extends Component {
  toDoList = [
    {
        id: 0,
        name: "Nakarmić psa",
        tags: ["domowe", "zwierzęta"],
        startDate: "2019-03-10",
        endDate: null
    },
    {
        id: 1,
        name: "Zapłacić czynsz",
        tags: ["finanse"],
        startDate: "2019-03-12",
        endDate: "2019-03-30"
    },
    {
        id: 2,
        name: "Oddać książkę do biblioteki",
        tags: ["instytucje"],
        startDate: "2019-03-02",
        endDate: "2019-03-18"
    },
    {
        id: 3,
        name: "Przemyśleć rozpoczęcie nowej diety",
        tags: ["żywienie", "finanse", "sport"],
        startDate: "2019-01-05",
        endDate: null
    },
    {
        id: 4,
        name: "Zapisać się na siłownię",
        tags: ["sport"],
        startDate: "2019-03-03",
        endDate: "2019-03-22"
    }
]
  doneList = [
    {
        id: 5,
        name: "Obejrzeć dobry film",
        tags: ["rozrywka"],
        startDate: "2019-01-05",
        endDate: "2019-02-19"
    },
    {
        id: 6,
        name: "Odśnieżyć ten cholerny podjazd",
        tags: ["domowe", "sport"],
        startDate: "2019-01-02",
        endDate: null
    },
]    
  activeTag = "";
  state = {
      list: this.getTasks()
  };
  mode = true

  getTasks () {
      if (!this.state){ 
        return this.toDoList;}
      else{
        return this.mode ? this.toDoList : this.doneList;}
  }
  
  changeMode = () => {
    this.mode = !this.mode
    this.setState({
      list: this.getTasks(),
    })
  }

  searchTag = (name) => {
    let filteredTasks = []
    if (name !== this.activeTag) {
      filteredTasks = this.toDoList.filter(task =>
        task.tags.findIndex(tag => tag === name) !== -1 
      )
      this.setState({
        list: filteredTasks
    })
    this.activeTag = name;
    } else {
      this.setState({
        list: this.getTasks()
    })
    }
  }
  searchInput = (e) => {
    let filteredTasks;
    filteredTasks = this.getTasks().filter(task => task.name.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({
      list: filteredTasks
    })
  }

  getTagsList = () => {
    const allTagsArray = [];
    let tempArray = []
    this.getTasks().forEach(task => {
      tempArray = task.tags.filter(tag => allTagsArray.indexOf(tag) === -1)
        allTagsArray.push(...tempArray)
    })
    return allTagsArray
  }

  delete = index => {
    this.mode ? this.toDoList.splice(index, 1) : this.doneList.splice(index, 1);
    this.setState({
      list: this.getTasks()
    })
  }

  move = index => {
     this.doneList.push(this.toDoList[index]);
     this.toDoList.splice(index, 1);
     this.setState({
      list: this.getTasks()
    })
    }

  add = task => {
    this.toDoList.push(task)
    this.setState({
      list: this.getTasks(),
    })
  }

  sort = (e) => {
    switch (e.target.name) {
      case "abc+":
        this.getTasks().sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0
        });
      break
      case "abc-":
        this.getTasks().sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
          return 0
        });
      break
      case "start+":
        this.getTasks().sort((a, b) => {
          a = +new Date(a.startDate)
          b = +new Date(b.startDate)
          if (a < b) return -1;
          if (a > b) return 1;
          return 0
        });
      break
      case "start-":
        this.getTasks().sort((a, b) => {
          a = +new Date(a.startDate)
          b = +new Date(b.startDate)
          if (a < b) return 1;
          if (a > b) return -1;
          return 0
        });
      break
      case "end+":
        this.getTasks().sort((a, b) => {
          a = +new Date(a.endDate)
          b = +new Date(b.endDate)
          if (a < b) return -1;
          if (a > b) return 1;
          return 0
        });
      break
      case "end-":
      this.getTasks().sort((a, b) => {
        a = +new Date(a.endDate)
        b = +new Date(b.endDate)
        if (a < b) return 1;
        if (a > b) return -1;
        return 0
      });
      break
      default: console.log('dupa')
    }
    this.setState({
      list: this.getTasks(),
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Header add={this.add} tags={this.getTagsList} sort={this.sort} searchInput={this.searchInput} searchTag={this.searchTag} mode={this.changeMode}/>
        <List toDoLength={this.toDoList.length} doneLength={this.doneList.length} state={this.state} delete={this.delete} move={this.move}/>
      </div>
    );
  }
}

export default App;