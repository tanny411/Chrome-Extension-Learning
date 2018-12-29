console.log("content script running!");
document.body.style.userSelect="none";//doesnt work!

var s = function(sketch){

    sketch.setup=function(){
        //console.log('Sketch Started');
        let h=document.body.clientHeight;
        let w=document.body.clientWidth;
        // or sketch.windowWidth
        let c=sketch.createCanvas(w,h);
        c.position(0,0);
        c.style('pointer-events','none');
        sketch.clear();//transparent
    }

    sketch.draw=function(){
        // sketch.background(0);//black
        //console.log('sketch looping');
        sketch.stroke(0);
        sketch.strokeWeight(4);
        if(sketch.mouseIsPressed){
            sketch.line(sketch.mouseX,sketch.mouseY,sketch.pmouseX,sketch.pmouseY);
        }
    }
};

var myp5=new p5(s);