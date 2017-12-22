var html = require("choo/html");

var TITLE = "🚂🚋🚋";

module.exports = view;

function view(state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE);

  return html`
    <body>
      <div class="container">
        <button onclick=${() => emit("lights:toggle")}>
          Toggle Lights
        </button>
        <div class="tree">
          <div class="star"></div>
          <div class="trunk"></div>
          <div class="ornaments -top">
            <div class="ornament -red -${lightStatus(state, 1)}"></div>
            <div class="ornament -yellow -${lightStatus(state, 1)}"></div>
          </div>
          <div class="ornaments -middle">
            <div class="ornament -purple -${lightStatus(state, 1)}"></div>
            <div class="ornament -blue -${lightStatus(state, 1)}"></div>
          </div>
          <div class="ornaments -bottom">
            <div class="ornament -yellow -${lightStatus(state, 1)}"></div>
            <div class="ornament -red -${lightStatus(state, 1)}"></div>
          </div>
          <div class="white-decoration -top">
          </div>
          <div class="white-decoration -middle -one">
          </div>
          <div class="white-decoration -middle -two">
          </div>
          <div class="white-decoration -bottom">
          </div>
        </div>
    </div>
  </body>
  `;

  function lightStatus(state, lightNumber) {
    if (state.lights) {
      return "on";
    } else {
      return "off";
    }
  }
}
