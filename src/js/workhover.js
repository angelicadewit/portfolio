let hover = document.querySelector(`.border`)

hover.addEventListener(`mouseover`, function(e){
    let x =  e.offsetX
    let y = e.offsetY
    
    console.log(x,y)
});

