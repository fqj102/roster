requirejs.config({
    appDir: './js',
    baseUrl: './lib',
    paths: {
      app: '../app',
      jquery: 'jquery-2.2.0',
      socketio: 'socket.io'
    },
    dir: './dist',
    removeCombined: true,
    optimize: "uglify2",
    generateSourceMaps: false,
    preserveLicenseComments: false,
    fileExclusionRegExp: /^\.|^node_modules|Gruntfile.js|Gulpfile.js|package.json|.*bat$|3rdpartybackup|uploads|.*scss$|.*eps$|.*log$/i,
    modules: [{
        name: '../config'
    }]
  }
);

var EVENT_BUS = {};

requirejs([
  'jquery',
  'app/app'
], function($, App) {
  
  App.getInstance();
});
