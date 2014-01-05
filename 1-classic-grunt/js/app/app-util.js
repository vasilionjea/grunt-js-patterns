(function(window, app, undefined) { 

  app.util = app.util || {};

  app.util.inspect = function(obj) {
    console.dir(obj);
  };

}(this, this.app));