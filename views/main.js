var html = require("choo/html");

var TITLE = "🚂🚋🚋";

module.exports = view;

function view(state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE);

  return html`
    <body>
      <div class="container">
        <div class="tree">
          <div class="star"></div>
          <div class="trunk"></div>
          <div class="ornaments -top">
            <div class="ornament -red -on"></div>
            <div class="ornament -yellow -off"></div>
          </div>
          <div class="ornaments -middle">
            <div class="ornament -purple -off"></div>
            <div class="ornament -blue -on"></div>
          </div>
          <div class="ornaments -bottom">
            <div class="ornament -yellow -on"></div>
            <div class="ornament -red -off"></div>
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
}
