function draw() {
    const canvas = document.querySelector('#canvas');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

  
    const pointArray = [];
    for (let i = 0; i < 200; i++) {
      var x = Math.floor(Math.random() * 490);
      var y = Math.floor(Math.random() * 490);
      const point = {x: x, y: y}
      pointArray.push(point)

    }
    pointArray.forEach(point => 
      ctx.fillRect(point.x, point.y, 100, 10));


    
    
    
}

draw();