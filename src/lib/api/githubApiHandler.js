
const portfolio = [
  {
    name: 'Portfolio',
    image: '../img/portfolio-logo-500x500.svg',
    description: 'My portfolio of projects that can be used as a template',
    codeurl: 'https://github.com/alejmilian/portfolio',
    previewurl: 'https://portfolio-8c187.web.app/'
  },
  {
    name: 'ToDo',
    image: '../img/todo-logo-500x500.svg',
    description: 'Todo web app which includes sessions and user authentication',
    codeurl: 'https://github.com/alejmilian/secure-todo',
    previewurl: undefined
  }
]
// TODO:
export function getPinnedProyectsArray () {
  return portfolio
}
