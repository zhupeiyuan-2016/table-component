
function init(url){
	ajax({  
    method: 'GET',  
    url: url,
    success: function (response) { 
       	let table = new Table(response); 
    }  
});
}
function Table(data){ 
	this.data = JSON.parse(data);
	this.th();
	this.content();
	this.operation();
}
Table.prototype.th = function(){
	const toolbar = document.getElementById(this.data.show.toolbar);
	var table = document.createElement('table');
	table.innerHTML = "<tr></tr>"
	toolbar.appendChild(table);
	var tr = toolbar.querySelector("tr");
	for (var i = 0 ; i < this.data.columns.length-1 ; i++ ){
		var th = document.createElement("th");
		th.innerHTML = this.data.columns[i].title;
		th.setAttribute("class",this.data.columns[i].class);
		tr.appendChild(th);
	}
	if(this.data.operation){
		console.log("no")
		var th = document.createElement("th");
		th.innerHTML = "操作";
		tr.appendChild(th)
	}
}
Table.prototype.content = function(){
	ajax({
		method: this.data.input.method,
		url: this.data.input.url,
		success: function(respons){
			if(state(respons.code)){
				console.log("no");
			}else{
				
			}
		}
	})
}
Table.prototype.operation = function(){
	console.log("operation");
}

