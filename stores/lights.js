module.exports = store;

function store(state, emitter) {
  state.lights = true;

  emitter.on("DOMContentLoaded", function() {
    emitter.on("lights:toggle", function() {
      console.log("toggle");
      state.lights = !state.lights;
      emitter.emit(state.events.RENDER);
    });
  });
}
