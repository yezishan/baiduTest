$=function(el){
	return document.getElementById(el);
}
var input = $("input");
var direction=["top","right","bottom","left"];
function turnLeft(){
	
}
function Run(){
	var dir=input.value.trim().toLowerCase();
	switch(dir){
		case "go":
		 Go();break;
		case "turn left":
		 turnLeft();break;
		case "turn right":
		 goRight();break;
		case "turn back":
		 goBack();break;

	}
}