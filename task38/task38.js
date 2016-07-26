(function(){
   var config={
   	tdwidth:"150px",
   	tdHeight:"55px",
   	rowNum:"5",
   	colNum:"5",
   	thBgc:"#333",
   	border:"1px solid #ccc",
   	thContent:["姓名","语文","数学","英语","总分"],
   	trContent:[
           ["小明",80,90,70,240],
           ["小红",90,60,90,240],
           ["小亮",60,100,70,230],
           ["小强",100,70,80,250]
   	]
   };
   var tab=document.getElementById("table");
   addTh();
   addTr();

   function addTh(){
   	var thNode=document.createElement("tr");
   	var tdList;
   	thNode=addTd(thNode,config.thContent);
   	thNode.style.background=config.thBgc;
   	thNode.style.color="#fff";
   	thNode.style.fontWeight="bold";

   	tdList=thNode.childNodes;
   	for (var i = 1; i < config.colNum; i++) {
   		addArrowUp(tdList[i]);
   		addArrowDown(tdList[i]);
   	};

   	tab.appendChild(thNode);//添加表头
    
    function addArrow(divNode,flag){
    	divNode.style.width="0px";
    	divNode.style.height="0px";
    	divNode.style.borderLeft="8px solid transparent";
    	divNode.style.borderRight="8px solid transparent";
    	divNode.style.cursor="pointer";
    	divNode.style.position="absolute";
    	divNode.style.right="30px";

    	divNode.addEventListener("click",function(eve){
    		var content=eve.target.parentNode.innerHTML.split("<")[0],
    		    listNum=config.thContent.indexOf(content),
    		    sortList=[],
    		    newList=[],
    		    trList=tab.childNodes;
    		    //console.log("listNum:"+listNum);
    		    //取出要排序的数据，保存在数组中
    		    for (var i = 0; i < config.rowNum-1; i++) {
    		    	sortList.push(trList[i+1].childNodes[listNum].innerHTML);
    		    };
    		    //降序排序
    		    newList=sortList.sort(sortNumber);
    		    if(!flag){
    		    	newList=newList.reverse();
    		    }
    		    //获取当前列的数据分布情况
    		    sortList=[];
    		    for (var i = 0; i < config.rowNum-1; i++) {
    		    	sortList.push(trList[i+1].childNodes[listNum].innerHTML);
    		    };
                console.log(sortList);
    		    //重新排序列表项
    		    changeOrder(newList,sortList);
    		    function sortNumber(a,b){
    		    	return b-a;
    		    }
    		    //根据排序结果重新排列行序
    		    function changeOrder(newList,oldList){
    		    	var len=newList.length,
    		    	    pos_before,
    		    	    pos_now,
    		    	    trList=tab.childNodes,
    		    	    tempNode=document.createElement("tr"),
    		    	    temp;
    		    	for(var k=0;k<len;k++){
    		    		pos_now=k;
    		    		pos_before=oldList.indexOf(newList[k]);
    		    		if(pos_now!==pos_before){
                  //把newList与oldList进行比较，交换行
    		    			tempNode.innerHTML=trList[pos_before+1].innerHTML;
    		    			trList[pos_before+1].innerHTML=trList[pos_now+1].innerHTML;
    		    			trList[pos_now+1].innerHTML=tempNode.innerHTML;
    		    			//更新表的内容
    		    			temp=oldList[pos_before];
    		    			oldList[pos_before]=oldList[pos_now];
    		    			oldList[pos_now]=temp;
    		    		}
    		    	}
    		    }
    	},false);
      return divNode;
    }
   	function addArrowUp(tdNode){
   		var divNode=document.createElement("div");
   		divNode=addArrow(divNode,false);
   		divNode.style.borderBottom="10px solid #fff";
   		divNode.style.top="14px";
   		tdNode.appendChild(divNode);
   	}
   	function addArrowDown(tdNode){
   		var divNode=document.createElement("div");
   		divNode=addArrow(divNode,true);
   		divNode.style.borderTop="10px solid #fff";
   		divNode.style.top="30px";
   		tdNode.appendChild(divNode);
   	}
   }
   function addTd(rowNode,contenList){
   	var tdNode;
   	for (var i = 0; i < config.colNum; i++) {
   		tdNode=document.createElement("td");
   		tdNode.innerHTML=contenList[i];
   		tdNode.style.width=config.tdwidth;
   		tdNode.style.height=config.tdHeight;
   		tdNode.style.border=config.border;
   		tdNode.style.position="relative";
   		rowNode.appendChild(tdNode);
   	};
   	return rowNode;
   }
   function addTr(rowNode,contenList){
        var trNode;
        for (var i = 0; i < config.rowNum; i++) {
        	trNode=document.createElement("tr");
        	trNode=addTd(trNode,config.trContent[i]);
        	tab.appendChild(trNode);
        };
   }
}());