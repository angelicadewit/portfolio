"use strict";

var hover = document.querySelector(".border");

hover.addEventListener("mouseover", function (e) {
    var offsetX = e.offsetX;
    var offsetY = e.offsetY;

    TweenMax.to(hover, 2, {
        x: offsetX + 5,
        y: offsetY + 5
    });
});

hover.addEventListener("mouseout", function (e) {
    console.log("mouseout");
    var offsetX = e.offsetX;
    var offsetY = e.offsetY;

    TweenMax.to(hover, 2, {
        x: 0,
        y: 0
    });
});
//# sourceMappingURL=workhover.js.map
