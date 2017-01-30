import React, { Component } from 'react';
import Projects from './components/projects';
import AddProject from './components/add-project';
import Todos from './components/todos';
import uuid from 'uuid';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: [],
    }
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({ todos: data }, () => {
          console.log('todos state', this.state);
        })
      },
      error: (xhr, status, error) => {
        console.log(error);
      }
    })
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design',
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development',
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Card',
          category: 'Web Development',
        },
      ]
    });
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }

  handleAddProject(project) {
    const projects = this.state.projects;
    projects.push(project);
    this.setState({ projects });
  }

  handleDeleteProject(id) {
    const projects = this.state.projects;
    const index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects });
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
