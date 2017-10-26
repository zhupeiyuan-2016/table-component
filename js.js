
const TableContent= document.getElementsByClassName("table-content");
const number = document.getElementsByClassName("number");


function table(){
	this.dom = dom.querySelector("table");	
}
table.prototype.init = function(url){
	this.rows = this.dom.rows;
	this.cells = this.dom.rows[0].cells;
	if(this.dom.querySelectorAll(".number")){
		this.numbercellIndex = this.dom.querySelector(".number").cellIndex;
	}
	if(this.dom.querySelectorAll(".sex")){
		this.sexcellIndex = this.dom.querySelector(".sex").cellIndex;
	}
	if(this.dom.querySelectorAll(".date")){
		this.datecellIndex = this.dom.querySelector(".date").cellIndex;
	}
	if(this.dom.querySelectorAll(".operation")){
		this.operationcellIndex = this.dom.querySelector(".operation").cellIndex
	}
}

table.prototype.update = function(s){
	this.dom.addEventListener('click',function(e){
		console.log(e.target)
		var classval = e.target.className;
		var classname = classval.split(" ")
		if(classname[1] == 'icon-editor'){
			var str = e.target.parentNode.innerText;
			e.target.parentNode.firstChild.innerText = "";
			var newdate = document.createElement("input");
			newdate.value = str;
			e.target.parentNode.firstChild.appendChild(newdate);
			console.log(classval)
			classval = classval.replace("editor","xuanzhong");
			console.log(classval)
			e.target.setAttribute("class",classval)
		}
		if(classname[1] == 'icon-xuanzhong'){
			var child = e.target.parentNode.childNodes;
			console.log(child)
			var str = child[0].firstChild.value ;
			child[0].removeChild(child[0].firstChild);
			child[0].innerText = str
			classval = classval.replace("xuanzhong","editor");
			e.target.setAttribute("class",classval)
		}
		if(e.target.className == "delete"){
			console.log("yes")
			e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
		}
	})
}
 
 ajax({
    method: 'GET',  
    url: 'base/base.json',  
    success: function (response) {  
         date  = response;
    }  
});