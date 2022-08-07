import Project from './Project'
import PropTypes from 'prop-types'

import { splitArrayInArrays } from '../lib/utilities'

function createArrayOfProject (inputArray) {
  const arraysFixedSize = splitArrayInArrays(inputArray)

  return arraysFixedSize.reduce((resultArray, item, index) => {
    resultArray[index] = (
      <div className="tile is-ancestor is-horizontal">
       {
        item.map((project) => {
          return (
            <Project key={project.name} {...project} />
          )
        })
        }
      </div>
    )
    return resultArray
  }, [])
}
function Projects ({ projects }) {
  return (
    <section id="projects" className="section is-medium">
      <div className="container block">
        <h2 className="has-text-centered title is-3">Some projects I have made</h2>
      </div>
      <div className="container">
        {
          createArrayOfProject(projects)
        }
      </div>
    </section>
  )
}

Projects.propTypes = {
  projects: PropTypes.array
}

export default Projects
