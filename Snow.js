class Snow {
    constructor(x,y){
        var options = {
            friction: 1.0,
            density: 0.5,
            stiffness: 0.04
        }
        this.snow4 = loadImage("snow4.webp");
    }

    display(){
        image(this.snow4,200,20);
    }
}