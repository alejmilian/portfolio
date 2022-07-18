import Project from './Project'

function Projects () {
  return (
    <section id="projects" className="section is-medium">
      <div className="container block">
        <h2 className="has-text-centered title is-3">Some projects I have made</h2>
      </div>
      <div className="container">
        <div className="columns is-centered is-5">
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </section>
  )
}

export default Projects
