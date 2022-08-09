import ProjectsGrid from './ProjectsGrid'
import { getPinnedProyectsArray } from '../lib/api/githubApiHandler'

export default function Projects () {
  return <ProjectsGrid projects={getPinnedProyectsArray()}/>
}
