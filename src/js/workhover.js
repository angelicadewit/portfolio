let borders = document.querySelectorAll(`.border`)

borders.forEach(function(border){
    border.addEventListener(`mousemove`, function(e){
        let offsetX =  e.offsetX
        let offsetY = e.offsetY
        let height = e.target.height / 2
        let width = e.target.width / 2
    
    
        let radians = Math.atan2(offsetX, offsetY);
        let degree = (radians * (180 / Math.PI) * -1) + 90; 
    
        // var dx = offsetX - origin.x;
        // var dy = offsetY - origin.y;
    
    
        let fractionX = (offsetX / width) - 0.5
        let fractionY = (offsetY / height) - 0.5
        
        TweenMax.to(this.children[0], 0.5, {
            x: (width - offsetX) / 2,
            y: (height - offsetY) / 2,
            // rotationZ:  degree,
            // transformOrigin: "5% 75%",
            ease: Linear.easeNone,
        });
    
        TweenMax.to(this.children[1], 2, {
            x: (width - offsetX) * -1,
            y: (height - offsetY) * -1,
            ease: Linear.easeNone,
        });
    });
})

borders.forEach(function(border){
    border.addEventListener(`mouseout`, function(e){
        console.log(`mouseout`)
    
        TweenMax.to(this.children[0], 0.5, {
            x: 0,
            y: 0,
            rotation: 0,
            transformOrigin: 0,
            ease: Linear.easeNone,
        });
    
        TweenMax.to(this.children[1], 0.5, {
            x: 0,
            y: 0,
            ease: Linear.easeNone,
        });
    });
})



