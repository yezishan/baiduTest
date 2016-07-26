var btn = document.getElementsByTagName('input'),
	heightBtn = btn[0],
	widthBtn = btn[1],
	treeRoot = document.getElementsByClassName('root')[0],
	divList = [],
	index=0,
	timer = null;
window.onload = function (){
	heightBtn.onclick = function () {
		reset();
		heightOrder(treeRoot);
		changeColor();
	}
	widthBtn.onclick = function () {
		reset();
		widthOrder(treeRoot);
		changeColor(); 	
	}
}

//深度优先遍历
function heightOrder(node) {
	if (!(node == null)) {
		divList.push(node);
		for (var i = 0; i < node.children.length; i++) {
			heightOrder(node.children[i]);
		};
	}
}

//广度优先遍历
function widthOrder(node) {
	if (!(node == null)) {
		divList.push(node);
		widthOrder(node.nextElementSibling);
		node=divList[index++];
		widthOrder(node.firstElementChild);
	}
}

//后序遍历
function postOrder(node) {
	if (!(node == null)) {
		postOrder(node.firstElementChild);
		postOrder(node.lastElementChild);
		divList.push(node);
	}
}

//颜色变化函数
function changeColor() {
	var i = 0;
	divList[i].style.backgroundColor = 'pink'
	timer = setInterval(function (argument) {
		i++;
		if (i < divList.length) {
			divList[i-1].style.backgroundColor = '#fff';
			divList[i].style.backgroundColor = 'pink';
		} else {
			clearInterval(timer);
			divList[divList.length-1].style.backgroundColor = '#fff';
		}
	},500)
}

//初始化样式
function reset() {
	divList = [];
	index=0;
	clearInterval(timer);
	var divs = document.getElementsByTagName('div');
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.backgroundColor = '#fff';
	}
}