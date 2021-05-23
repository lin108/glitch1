var img,img2

function preload(){
	img = loadImage("one.png")
	img2 = loadImage("cloud.jpg")
 // img.resize(50, 100);
 // img2.resize(50, 100);
}

var control,lim = 100;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	imageMode(CENTER,CENTER);
// 	noLoop();
	img.loadPixels();
}

function draw() {	
	
	translate(width/2,height/2);
	
	for(var o=0;o<img.height;o++){
		let row = [];
		
		for(var i=0;i<img.width;i++){
			let c = img.get(i,o);
			row.push(c);
			// if (i==0){
				// console.log(c);
			// }
		}
		row.sort((a,b)=>(  ( (a[0]+a[1])* (random(0,0.7) + frameCount/1000)>b[0]+b[1] ) && random(0,1)<30 )?1:-1)
		
		for(var i=0;i<img.width;i++){
			let c = set(i,o,row[i]);
			// row.push(c);
		}
		
	}
	updatePixels();
	//image(img2,0,0);
}