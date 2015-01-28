module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
     requirejs: {
          compile: {
              options: {
                  paths: {
                      collections : 'collections',
                      models : 'models',
                      views : 'views',
                      util:'util',
                      templatePath: '../templates',
                      jquery:'lib/jquery',
                      backbone:'lib/backbone',
                      underscore:'lib/underscore',
                      handlebars:'lib/handlebars',
                      text:'lib/text'
                  },
                  shim: {
                      'backbone': {
                          deps: ['underscore', 'jquery'],
                          exports: 'Backbone'
                      },


                      'underscore': {
                          exports: '_'
                      }
                  },

                  baseUrl: 'javascripts',
                  mainConfigFile: "public/javascripts/main.js",
                  name: 'main',
                  appDir: "public",
                  dir: "public/newDir",
                  removeCombined: true,
                  findNestedDependencies: true,
                  optimizeCss: "standard"
                   //cssIn: "public/player/stylesheets/main.css"
                  }
              }
          },
      replace: {
          ejsJavaScriptPath: {
              src: ['views/index.ejs'],
              overwrite: true,
              replacements: [
                  {
                      from: 'javascripts/',
                      to: 'newDir/javascripts/'
                  },
                  {
                      from: 'stylesheets/',
                      to: 'newDir/stylesheets/'
                  }
              ]
          }

      },
      clean: ["public/javascripts","public/stylesheets","public/templates"]

  });

  // Load the plugin that provides the "uglify" task.

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['requirejs','replace','clean']);

};