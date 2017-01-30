import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id)
  }
  render() {
    console.log(this.props);

    return (
      <li className="Project">
        <strong>{this.props.project.title}: {this.props.project.category}{" "}
          <button onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</button>
        </strong>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func,
}

export default ProjectItem;