import React, { Component } from 'react';
import ProjectItem from './project-item';

class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    console.log(this.props);
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.id} project={project} />
        );
      });
    }
    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  project: React.PropTypes.array,
  onDelete: React.PropTypes.func,
}

export default Projects;
