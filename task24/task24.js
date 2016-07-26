
    var traverse=[],
    timer=null,
    search=[];
    var btn = document.getElementsByTagName('input'),
    treeRoot = document.getElementsByClassName('root')[0],
        preBtn=btn[0],
        postBtn=btn[1],
        delBtn=btn[2],
        tag=btn[3],
        addBtn=btn[4];
   window.onload = function (){
	    preBtn.onclick = function () {
		clearResult();
		preOrder(treeRoot);
		changeColor();
	}
	postBtn.onclick = function () {
		clearResult();
		postOrder(treeRoot);
		changeColor(); 	
	}
	delBtn.onclick=function(){
		if(selectDiv === undefined){
            alert('请先选中要删除的节点');
        }else{
            var parent = selectDiv.parentNode;
            parent.removeChild(selectDiv);
        }
	}
	addBtn.onclick=function(){
		addDiv();
	}
}
    //遍历树
    function preOrder(tree){
    	if(tree!==null){
    		traverse.push(tree);
    		for (var i = 0; i < tree.children.length; i++) {
    			preOrder(tree.children[i]);
    		};
    	}

    }
    //点击相应的box背景变色
    var selectDiv;//记录选中的box
    var levels = document.getElementById('box-container').getElementsByTagName('div');
    for (var i = 0; i < levels.length; i++) {
        levels[i].onclick = function(e) {
            this.style.backgroundColor = '#fef9d1';
            e.stopPropagation();//阻止事件冒泡
            selectDiv = this;
        };
    }

    function clearResult(){
    	var allDiv=document.getElementsByTagName("div");
    	for (var i = 0; i < allDiv.length; i++) {
    		allDiv[i].style.backgroundColor="#fff";
    	};
    	clearInterval(timer);
    	traverse=[];
    	search=[];
    	tag=true;
    }
    //颜色变化函数
function changeColor() {
	var i = 0;
	traverse[i].style.backgroundColor = 'pink'
	timer = setInterval(function (argument) {
		i++;
		if (i < traverse.length) {
			traverse[i-1].style.backgroundColor = '#fff';
			traverse[i].style.backgroundColor = 'pink';
		} else {
			clearInterval(timer);
			traverse[traverse.length-1].style.backgroundColor = '#fff';
		}
	},500)
}
function addDiv(){
	var content=tag.value;
	if(content===""){
		alert("请填写新增节点的内容");
	}else if(selectDiv===undefined){
		alert("请选择要操作的节点");
	}else{
		var newDiv=document.createElement("div");
		newDiv.innerHTML=content;
		selectDiv.appendChild(newDiv);
        levels = document.getElementById('box-container').getElementsByTagName('div');
    for (var i = 0; i < levels.length; i++) {
        levels[i].onclick = function(e) {
            this.style.backgroundColor = '#fef9d1';
            e.stopPropagation();//阻止事件冒泡
            selectDiv = this;
        };
    }
	}
}