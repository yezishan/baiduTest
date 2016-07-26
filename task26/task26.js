

window.onload=function(){
	var commander=new Commander();
	var mediator=new Mediator();
	mediator.register(commander);
	buttonHandler(commander);
	AnimUtil.setMediator(mediator);
	AnimUtil.animLoop();
}