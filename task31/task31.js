$=function(el){
    return document.getElementById(el);
}
var cityAndCollege = [
        ["艾欧尼亚", "北京大学", "清华大学", "上海交通大学", "浙江大学"],
        ["均衡教派", "Harvard University", "Yale University", "University of Cambridge", "Oxford University"],
        ["黑色玫瑰", "STANFORD University", "University of Chicago", "Massachusetts Institute of Technology"],
        ["诺克萨斯", "Duke University", "University of Pennsylvania", "California Institute of Technology"],
        ["德玛西亚", "Columbia University", "princeton University", "University of California, Berkeley"],
        ["班德尔城", "南京大学", "华南理工大学", "中国科学院大学", "国防科技大学"]
    ];
var inSchool=document.getElementById("inSchool");
var outSchool=document.getElementById("outSchool");
var display1=document.getElementById("display1");
var display2=document.getElementById("display2");
var arrRadio=document.getElementsByName("option");
var city=$("city");
var school=$("school");

window.onload=function(){
	inSchool.onclick=function(){
		if(inSchool.checked==true){
	        display1.style.display = "block";
			display2.style.display = "none";
		}
	}
	outSchool.onclick=function(){
		 if(outSchool.checked==true){
			display1.style.display = "none";
			display2.style.display = "block";
	    }
	}
	city.onclick=function(){
		school.innerHTML="";
		var option=null;
		var index=city.selectedIndex;
		for (var i = 1; i < cityAndCollege[index].length; i++) {
			option=document.createElement("option");
			option.innerHTML=cityAndCollege[index][i];
			school.appendChild(option);
		};
	}
  
}