
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
	this.init();
}
Table.prototype.init = function(){
	const toolbar = document.getElementById(this.data.show.toolbar);
	var table = document.createElement('table');
	table.innerHTML = "<tr></tr>"
	toolbar.appendChild(table);
	var tr = toolbar.querySelector("tr");
	for (var i = 0 ; i < this.data.columns.length-1 ; i++ ){
		var th = document.createElement("th");
		th.innerHTML = this.data.columns[i].title;
		th.setAttribute("class",this.data.columns[i].class);
		tr.appendChild(th)
		console.log(this.data.columns[i].class)
	}
	
}

