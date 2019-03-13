const app = new PIXI.Application({
    view: document.getElementById("backgroundCanvas"),
    width: 1280,
    height: 720,
    transparent: true,
})

const fogContainer = new PIXI.Container();
fogContainer.x = 500
fogContainer.y = 400

const snowContainer = new PIXI.Container();
snowContainer.x = 500
snowContainer.y = 400

app.stage.addChild(fogContainer)
app.stage.addChild(snowContainer)




let manifest = [
    {
        "key": "fox",
        "url": "dist/img/fox-1.png"
    },
    {
        "key": "foxTwo",
        "url": "dist/img/fox.png"
    },
    {
        "key": "treeOne",
        "url": "dist/img/tree1.png"
    },
    {
        "key": "treeTwo",
        "url": "dist/img/tree2.png"
    },
    {
        "key": "treeThree",
        "url": "dist/img/tree3.png"
    },
    {
        "key": "foreground",
        "url": "dist/img/background.jpg"
    },
    {
        "key": "fogOne",
        "url": "dist/img/fog1.png"
    },
    {
        "key": "inkblot",
        "url": "dist/img/inkblot.mp4"
    }

]


// let treeOne = new PIXI.Sprite(app.loader.resources.treeOne.texture)
// let treeTwo = new PIXI.Sprite(app.loader.resources.treeTwo.texture)
// let treeThree = new PIXI.Sprite(app.loader.resources.treeThree.texture)

function loadAssets(){
    app.loader.add(manifest)
    app.loader.load(onAssetsLoaded)
}

// let snowEmitter= new PIXI.particles.Emitter(
//     snowContainer,
//     [PIXI.Texture.fromImage('dist/img/snow100.png')],
//     {
//         "alpha": {
//             "start": 1,
//             "end": 0
//         },
//         "scale": {
//             "start": 0.07,
//             "end": 0.32,
//             "minimumScaleMultiplier": 1
//         },
//         "color": {
//             "start": "#002c38",
//             "end": "#d2eff0"
//         },
//         "speed": {
//             "start": 183,
//             "end": 34,
//             "minimumSpeedMultiplier": 1
//         },
//         "acceleration": {
//             "x": -10,
//             "y": 0
//         },
//         "maxSpeed": 0,
//         "startRotation": {
//             "min": 0,
//             "max": 355
//         },
//         "noRotation": true,
//         "rotationSpeed": {
//             "min": 4,
//             "max": 0
//         },
//         "lifetime": {
//             "min": 0.15,
//             "max": 0.8
//         },
//         "blendMode": "normal",
//         "frequency": 0.001,
//         "emitterLifetime": -1,
//         "maxParticles": 500,
//         "pos": {
//             "x": 0,
//             "y": 0
//         },
//         "addAtBack": false,
//         "spawnType": "circle",
//         "autoUpdate": true,
//         "spawnCircle": {
//             "x": 0,
//             "y": 0,
//             "r": 0
//         },
//     }
// );

// snowEmitter.emit = false;

function onAssetsLoaded(loader, resources){
    console.log(resources)

    setupTreesRowOne()
    
    setupFogOne()
    
    // setupFox()

    app.ticker.add((e) => update(e))
}

function setupFogOne(){

    let vidTex = new PIXI.Texture.fromVideo(app.loader.resources.inkblot.data)
    let vid = new PIXI.Sprite(vidTex)

    // vid.anchor.set(0.2)
    app.stage.addChild(vid)


    vidTex.baseTexture.source.setAttribute("loop","")
    // vidTex.baseTexture.source.playbackRate = 2

    let fogOne = new PIXI.Sprite(app.loader.resources.fogOne.texture)
    fogOne.alpha = 0.8
    fogOne.y = 150
    app.stage.addChild(fogOne)


    TweenMax.fromTo(fogOne, 50,
        {
            x:-1000,
        },
        {
            x:1000,
            repeat: -1,
            ease: Linear.easeNone,
        })

    fogOne.mask = vid
}


function setupTreesRowOne(){
    console.log(`one`)
    
    let tree;
    for (let i = 0; i < 30; i++){
        tree = new PIXI.Sprite(app.loader.resources.treeThree.texture)
        tree.anchor.set(0.5,1)
        let spacing = 50
        let xOffset = 10
        tree.x = randomInt(200, app.renderer.height - tree.width)
        tree.y = randomInt(300, app.renderer.height - tree.height)
        app.stage.addChild(tree)
    }
}

function setupTreesRowTwo(){
    console.log(`two`)
    
    let tree;
    for (let i = 0; i < 15; i++){
        tree = new PIXI.Sprite(app.loader.resources.treeThree.texture)
        tree.anchor.set(0.5,1)
        tree.x = 150 + (i * 70)
        tree.y = 610
        app.stage.addChild(tree)
    }
}

function setupFox(){
    let fox = new PIXI.Sprite(app.loader.resources.foxTwo.texture)
    fox.x = 600
    fox.y = 350
    app.stage.addChild(fox)
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function update(e){

}

function resize(e){
    let canvasAspect = app.screen.width / app.screen.height
    let screenAspect = window.innerWidth / window.innerHeight
    let scale = 1

    if (screenAspect > canvasAspect) {
        //screen is wider than canvas. we need to match the width of the screen
        scale = window.innerWidth / app.screen.width
    } else {
        //screen is taller than canvas. we need to match the height of the screen
        scale = window.innerHeight / app.screen.height
    }

    app.view.style.transform = "scale(" + scale + ")"
}

window.addEventListener(`click`, function(e){
    // snowEmitter.emit = !snowEmitter.emit
})


window.onload = function(){
    window.addEventListener("resize", resize)
    resize()
    loadAssets()
}