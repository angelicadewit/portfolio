"use strict";

var hover = document.querySelector(".border");

hover.addEventListener("mouseover", function (e) {
    x: e.offset.x;
    y: e.offset.y;

    hover.transform.x = x + 100 + "px";
});
//# sourceMappingURL=workhover.js.map
