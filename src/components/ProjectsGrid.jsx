import Project from './Project'
import PropTypes from 'prop-types'

function Projects ({ projects }) {
  return (
    <section id="projects" className="section is-medium">
      <div className="container block">
        <h2 className="has-text-centered title is-3">Some projects I have made</h2>
      </div>
      <div className="container">
        <div className="columns is-centered is-5">
          {
            projects.map((project) => { return (<Project key={project.name} {...project} />) })
          }
        </div>
      </div>
    </section>
  )
}

Projects.propTypes = {
  projects: PropTypes.array
}

export default Projects
