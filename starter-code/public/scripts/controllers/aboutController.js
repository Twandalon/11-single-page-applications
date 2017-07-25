'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.init = function (){
    $('.tab-content').hide();
    $('#articles').hide();
    $('#about').show();
    console.log('about');
    // app.Article.fetchAll(articleView.initIndexPage);
  }

  module.aboutController = aboutController;
})(app);
