import ProjectsGrid from './ProjectsGrid'

import cute from '../img/cute.jpg'

const fakedProject = {
  name: 'fake',
  image: cute,
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit aspernatur eveniet deleniti ab similique voluptates quas omnis nulla eligendi quidem vitae sunt nostrum atque magnam maxime, incidunt pariatur laborum.',
  codeurl: '#',
  previewurl: '#'
}

export default function Projects () {
  return <ProjectsGrid projects={[fakedProject, fakedProject, fakedProject, fakedProject, fakedProject, fakedProject, fakedProject, fakedProject, fakedProject, fakedProject]}/>
}
