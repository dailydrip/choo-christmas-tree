var css = require("sheetify");
var choo = require("choo");
var store = require("./stores/lights");

css("tachyons");
css("./css/normalize.css");
css("./css/container.css");
css("./css/tree.css");
css("./css/white-decoration.css");
css("./css/ornaments.css");

var app = choo();
if (process.env.NODE_ENV !== "production") {
  app.use(require("choo-devtools")());
} else {
  // Enable once you want service workers support. At the moment you'll
  // need to insert the file names yourself & bump the dep version by hand.
  // app.use(require('choo-service-worker')())
}

app.use(store);
app.use(require("choo-audio")());
app.use(loadSounds);

app.route("/", require("./views/main"));
app.route("/*", require("./views/404"));

if (!module.parent) app.mount("body");
else module.exports = app;

function loadSounds(state, emitter, app) {
  emitter.on("DOMContentLoaded", function() {
    emitter.emit("audio:load", "assets/jingle_bell.wav");
    emitter.on("audio:load-complete", function() {
      emitter.emit("audio:play");
    });
  });
}
