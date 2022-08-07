module.exports = function (grunt) {
  // load plugins
  [
    'grunt-eslint',
    'grunt-exec'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task)
  })
  // configure plugins
  grunt.initConfig({
    eslint: {
      target: [
        'src/**/*.js',
        'src/**/*.jsx',
        'public/js/**/*.js',
        'lib/**/*.js',
        'test/**/*.js'
      ]
    },
    exec: {
      compile: {
        cmd: 'npm run build'
      },
      deploy: {
        cmd: 'firebase deploy'
      }
    }
  })
  // register tasks
  grunt.registerTask('default', ['eslint', 'exec'])
}
