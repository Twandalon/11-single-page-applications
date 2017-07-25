'use strict';
// var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.init = function (){
    $('.tab-content').hide();
    $('#about').show();
  }

  module.aboutController = aboutController;
})(window);
