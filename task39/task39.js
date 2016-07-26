var getTitle=function(){
 	var currTab = $('#tabsk').find(".tabs-selected").find(".tabs-title").text();
    alert(currTab);
    var title=$('.tabs-selected .tabs-title').text();
    alert(title);
 }
$("#tabsk").tabs({
onSelect:function(title){
switch(title){
	case "About":
	alert(title);break;
	case "My Documents":
	alert(title);break;
	case "Help":
	alert(title);break;

}
}
});