const canvas = document.getElementById('can1');
const cts = canvas.getContext('2d');

function draw(){
    
    
   
  cts.beginPath();
 
    cts.moveTo(180,160);
    cts.lineTo(200,120);
    cts.lineTo(150,120);
    cts.lineTo(125,70);//ponta alta
    cts.lineTo(100,120);
    cts.lineTo(50,120);
    cts.lineTo(70,160);
    cts.lineTo(50,200);
    cts.lineTo(100,200);
    cts.lineTo(125,250);//ponta baixa
    cts.lineTo(150,200);
    cts.lineTo(200,200);
    cts.lineTo(180,160);
    
  cts.fillStyle='orange';
    cts.fill();
  cts.strokeStyle='black';
    cts.stroke();
   
} 
function drawEye(){
  cts.beginPath();
  cts.moveTo(100, 145);
cts.arc(100, 145, 10, 0, 1*Math.PI, true);
    cts.moveTo(150, 145);


    cts.arc(150, 145, 10, 0, 1*Math.PI, true);
    cts.moveTo(125, 185);
    
    cts.arc(125, 185, 10, 0, 2*Math.PI, false);
    
    
    cts.fillStyle='black';
    cts.fill();
    cts.strokeStyle='black';
    cts.stroke();
}
function drawPink(){
  cts.beginPath();
cts.arc(85, 165, 10, 0, 2*Math.PI, true);
    cts.moveTo(165, 165);


    cts.arc(165, 165, 10, 0, 2*Math.PI, true);
    
    
    
    cts.fillStyle='rgb(255, 204, 204)';
    cts.fill();
    
}
draw();
drawEye();
drawPink();
