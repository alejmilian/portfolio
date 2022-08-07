import ProjectsGrid from './ProjectsGrid'
import { getPinnedProyectsArray } from '../lib/githubApiHandler'

export default function Projects () {
  return <ProjectsGrid projects={getPinnedProyectsArray()}/>
}
