//getting canvas from html
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
function getCanvas(){
    if (!canvas.getContext) {
        return;
    }
}
//distance between to points
function dist(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    
    return Math.sqrt(x * x + y * y);
}
//drawing the squares 
function draw() {
   
    getCanvas();

    const pointArray = [];
    for (let i = 0; i < 200; i++) {
      var x = Math.floor(Math.random() * 490);
      var y = Math.floor(Math.random() * 490);
      const point = {x: x, y: y}
      pointArray.push(point)

    }
    pointArray.forEach(point => 
      ctx.fillRect(point.x, point.y, 10, 10));


    
    
    
}

draw();