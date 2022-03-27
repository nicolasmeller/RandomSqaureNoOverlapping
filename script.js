var squares = [];

function setup(){
  createCanvas(600,600);
  
  while(squares.length < 500) {
      var square = {
      x: Math.floor(Math.random() * 590),
      y: Math.floor(Math.random() * 590),
      s: 10
      }
    var overlapping = false;
    for(var j = 0; j < squares.length; j++)     {
      var other = squares[j];
      var d = dist(square.x , square.y , other.x, other.y);
      if(d < square.s + other.s){
        overlapping = true;
        break;
      } 
    }
    if(!overlapping){
       squares.push(square);
    }
    }
  for (var i = 0; i < squares.length; i++){
    fill(0, 0, 0);
    rect(squares[i].x, squares[i].y, squares[i].s, squares[i].s);
  }
  
}
function draw() {
  
}