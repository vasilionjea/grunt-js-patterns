(function(window, undefined) { 

  var app = {
    init: function () {
      console.log('Ready to Grunt!');
      return this;
    }
  };

  window.app = app.init();
}(this));