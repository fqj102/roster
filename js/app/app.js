/**
 * App module
 */
define([
  'jquery',
  'app/roster/rosteredit'
], function($, RosterEdit) {
  var instance = null;
  
  function App(){
    if(instance !== null){
      throw new Error("Cannot instantiate more than one App, use App.getInstance()");
    }
  }

  App.prototype = {
    init: function() {
      console.log('Initialize app');
      
      if($('html').hasClass('roster')) {
        RosterEdit.getInstance();
      }
    },
    
    getInstance: function() {
      if(instance === null) {
        instance = new App();
        this.init();
      }
      return instance;
    }
    
  };
  
  return instance||new App();
});
