function setup() {
 	createCanvas(innerWidth, innerHeight);
}
 
function draw()
{
	// do nothing
}
 
function mouseDragged() 
{ 
	strokeWeight(10);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
