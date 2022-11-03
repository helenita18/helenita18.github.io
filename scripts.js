
const ctx = document.getElementById('canva-1').getContext('2d');    

const centroX = 600;
const centroY = 400;

const orbv_sz = 100;
const orblv_sz = 20;

const orbg_sz = 300;
const orblg_sz = 60;

const orbv2_sz = 200;
const orblv2_sz = 60;

const orb_new = 40;



const estrela_sz = 70; 

const lua_sz = 5;           
const terra_sz = 10;

const lua_sz1 = 10;           
const terra_sz1 = 30;

const lua_sz2 = 10;           
const terra_sz2 = 20;

const new_sz = 7;



const tau = 2 * Math.PI; 

const t_terra = 15;
const t_lua = 1; 

const t_terra1 = 60;
const t_lua1 = 5; 

const t_terra2 = 30;
const t_lua2 = 6; 

const t_new = 3;



const estrela = new Path2D();

const lua = new Path2D();
const terra = new Path2D();

const lua1 = new Path2D();
const terra1 = new Path2D();

const lua2 = new Path2D();
const terra2 = new Path2D();

const new1 = new Path2D();


function init() {
    estrela.arc(0,0,estrela_sz,0,6.29,false);
  
    lua.arc(0,0,lua_sz,0,6.29,false);
    terra.arc(0,0,terra_sz,0,6.29,false);
  
    lua1.arc(0,0,lua_sz1,0,6.29,false);
    terra1.arc(0,0,terra_sz1,0,6.29,false);
  
    lua2.arc(0,0,lua_sz2,0,6.29,false);
    terra2.arc(0,0,terra_sz2,0,6.29,false);
  
    new1.arc(0,0,new_sz,0,6.29,false);
  
    window.requestAnimationFrame(draw);
    window.requestAnimationFrame(draw1);
    window.requestAnimationFrame(draw2);
}

function draw() {
    
    ctx.fillRect(0, 0, 1200, 800); 

    ctx.fillStyle = 'rgba(19, 32, 32, 0.4%)';
    ctx.save();

        ctx.translate(centroX, centroY);    
        
        const time = new Date();
  
  ctx.rotate((tau/t_terra) * time.getSeconds() + (tau/(t_terra*1000)) * time.getMilliseconds());
        ctx.translate(100, 0);     

        ctx.fillStyle = 'rgb(77, 20, 0)';
        ctx.fill(terra); 
ctx.save();

        ctx.rotate((tau/t_lua) * time.getSeconds() + (tau/(t_lua*1000)) * time.getMilliseconds());
            ctx.translate(0, orblv_sz);
            ctx.fillStyle = 'rgb(80, 5, 15)';
            ctx.fill(lua);
 
  ctx.restore();

    
    ctx.restore();
  
    // sol
    ctx.save();
        ctx.translate(centroX, centroY);
        ctx.fillStyle = 'rgb(153, 255, 221)';
        ctx.fill(estrela);
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'rgb(0, 102, 68)';
        ctx.stroke(estrela);
    ctx.restore();

    window.requestAnimationFrame(draw);
}

function draw1() {
    
  ctx.fillRect(0, 0, 1200, 800); 

    ctx.fillStyle = 'rgba(19, 32, 32, 0.4%)';
    
    ctx.save();

        ctx.translate(centroX, centroY);    
        
        const time = new Date();
  
  ctx.rotate((tau/t_terra1) * time.getSeconds() + (tau/(t_terra1*1000)) * time.getMilliseconds());
        ctx.translate(300, 0);     

        ctx.fillStyle = 'rgb(20, 82, 20)';
        ctx.fill(terra1); 
ctx.save();

        ctx.rotate((tau/t_lua1) * time.getSeconds() + (tau/(t_lua1*1000)) * time.getMilliseconds());
            ctx.translate(0, orblg_sz);
            ctx.fillStyle = 'gray';
            ctx.fill(lua1);
 
    ctx.restore();
  
  ctx.rotate((tau/t_new) * time.getSeconds() + (tau/(t_new*1000)) * time.getMilliseconds());
            ctx.translate(0, orb_new);
            ctx.fillStyle = 'white';
            ctx.fill(new1);
 
    ctx.restore();
   
        
   
    
    // sol
    ctx.save();
        ctx.translate(centroX, centroY);
        ctx.fillStyle = 'rgb(153, 255, 221)';
        ctx.fill(estrela);
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'rgb(0, 102, 68)';
        ctx.stroke(estrela);
    ctx.restore();

    window.requestAnimationFrame(draw1);
}

function draw2() {
    
    ctx.fillRect(0, 0, 1200, 800); 

    ctx.fillStyle = 'rgba(19, 32, 32, 0.4%)';
  ctx.fillRect(0, 0, 1200, 800); 

    ctx.fillStyle = 'rgb(10, 16, 16)';
    ctx.save();

        ctx.translate(centroX, centroY);    
        
        const time = new Date();
  
  ctx.rotate((tau/t_terra2) * time.getSeconds() + (tau/(t_terra2*1000)) * time.getMilliseconds());
        ctx.translate(200, 0);     

        ctx.fillStyle = 'rgb(47, 79, 79)';
        ctx.fill(terra2);
ctx.save();

        ctx.rotate((tau/t_lua2) * time.getSeconds() + (tau/(t_lua2*1000)) * time.getMilliseconds());
            ctx.translate(0, orblv2_sz);
            ctx.fillStyle = 'rgb(99, 156, 156)';
            ctx.fill(lua2);
 
  ctx.restore();
  
  
  ctx.rotate((tau/t_lua1) * time.getSeconds() + (tau/(t_lua1*1000)) * time.getMilliseconds());
            ctx.translate(0, orblg_sz);
            ctx.fillStyle = 'gray';
            ctx.fill(lua1);
  
  ctx.rotate((tau/t_lua) * time.getSeconds() + (tau/(t_lua*500)) * time.getMilliseconds());
            ctx.translate(0, orblv_sz);
            ctx.fillStyle = 'rgb(100, 5, 120)';
            ctx.fill(lua);
 
    ctx.restore();

     
   
  
    // sol
    ctx.save();
        ctx.translate(centroX, centroY);
        ctx.fillStyle = 'rgb(153, 255, 221)';
        ctx.fill(estrela);
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'rgb(0, 102, 68)';
        ctx.stroke(estrela);
    ctx.restore();

    window.requestAnimationFrame(draw2);
}

init();



















