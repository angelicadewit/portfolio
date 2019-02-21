"use strict";

var app = new PIXI.Application({
    view: document.getElementById("backgroundCanvas"),
    width: 1280,
    height: 720,
    transparent: true
});

var container = new PIXI.Container();
// emitter.emit = true;

var manifest = [{
    "key": "fox",
    "url": "dist/img/fox-1.png"
}, {
    "key": "foxTwo",
    "url": "dist/img/fox.png"
}, {
    "key": "treeOne",
    "url": "dist/img/tree1.png"
}, {
    "key": "treeTwo",
    "url": "dist/img/tree2.png"
}, {
    "key": "treeThree",
    "url": "dist/img/tree3.png"
}, {
    "key": "background",
    "url": "dist/img/background.jpg"
}];

// let treeOne = new PIXI.Sprite(app.loader.resources.treeOne.texture)
// let treeTwo = new PIXI.Sprite(app.loader.resources.treeTwo.texture)
// let treeThree = new PIXI.Sprite(app.loader.resources.treeThree.texture)

function loadAssets() {
    app.loader.add(manifest);
    app.loader.load(onAssetsLoaded);
}

function onAssetsLoaded(loader, resources) {
    console.log(resources);

    setupBackground();

    setupTreesRowTwo();

    setupTreeRowOne();

    app.ticker.add(function (e) {
        return update(e);
    });
}

function setupBackground() {
    var bg = new PIXI.Sprite(app.loader.resources.background.texture);
    // bg.height = 1000;
    bg.mask = mask;
}

function setupTreesRowOne() {

    var tree = void 0;
    for (var i = 0; i < 10; i++) {
        tree = new PIXI.Sprite(app.loader.resources.treeThree.texture);

        tree.x = 150 + i * 100;
        tree.y = 100;
        app.stage.addChild(tree);
    }
}

function setupTreesRowTwo() {

    var tree = void 0;
    for (var i = 0; i < 15; i++) {
        tree = new PIXI.Sprite(app.loader.resources.treeThree.texture);

        tree.x = 150 + i * 70;
        tree.y = 60;
        app.stage.addChild(tree);
    }
}

function update(e) {}

function resize(e) {
    var canvasAspect = app.screen.width / app.screen.height;
    var screenAspect = window.innerWidth / window.innerHeight;
    var scale = 1;

    if (screenAspect > canvasAspect) {
        //screen is wider than canvas. we need to match the width of the screen
        scale = window.innerWidth / app.screen.width;
    } else {
        //screen is taller than canvas. we need to match the height of the screen
        scale = window.innerHeight / app.screen.height;
    }

    app.view.style.transform = "scale(" + scale + ")";
}

window.onload = function () {
    window.addEventListener("resize", resize);
    resize();
    loadAssets();
};

var emitter = new PIXI.particles.Emitter(container, [PIXI.Texture.fromImage('dist/img/snow100.png')], {
    "alpha": {
        "start": 1,
        "end": 0
    },
    "scale": {
        "start": 0.07,
        "end": 0.32,
        "minimumScaleMultiplier": 1
    },
    "color": {
        "start": "#002c38",
        "end": "#d2eff0"
    },
    "speed": {
        "start": 183,
        "end": 34,
        "minimumSpeedMultiplier": 1
    },
    "acceleration": {
        "x": -10,
        "y": 0
    },
    "maxSpeed": 0,
    "startRotation": {
        "min": 0,
        "max": 355
    },
    "noRotation": true,
    "rotationSpeed": {
        "min": 4,
        "max": 0
    },
    "lifetime": {
        "min": 0.15,
        "max": 0.8
    },
    "blendMode": "normal",
    "frequency": 0.001,
    "emitterLifetime": -1,
    "maxParticles": 500,
    "pos": {
        "x": 0,
        "y": 0
    },
    "addAtBack": false,
    "spawnType": "circle",
    "spawnCircle": {
        "x": 0,
        "y": 0,
        "r": 0
    }
});
//# sourceMappingURL=main.js.map
