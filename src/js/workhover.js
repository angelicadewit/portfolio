let hover = document.querySelector(`.border`)
let buttonGroup = document.querySelector(`.buttons`)

hover.addEventListener(`mouseover`, function(e){
    let offsetX =  e.offsetX
    let offsetY = e.offsetY

    let buttonOffsetX = buttonGroup.offsetX
    let buttonOffsetY = buttonGroup.offsetY

    
    TweenMax.to(hover, 2, {
        x: offsetX + 5,
        y: offsetY + 5,
    });
});

hover.addEventListener(`mouseout`, function(e){
    console.log(`mouseout`)
    let offsetX =  e.offsetX
    let offsetY = e.offsetY
    
    TweenMax.to(hover, 2, {
        x: 0,
        y: 0
    });
});

