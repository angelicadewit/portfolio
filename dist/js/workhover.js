"use strict";

var hover = document.querySelector(".border");

hover.addEventListener("mouseover", function (e) {
    var x = e.offsetX;
    var y = e.offsetY;

    console.log(x, y);
});
//# sourceMappingURL=workhover.js.map
