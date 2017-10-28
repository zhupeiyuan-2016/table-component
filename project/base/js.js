
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
	var th = document.createElement("th");
	th.innerHTML = "序号";
	tr.appendChild(th);
	for (var i = 0 ; i < this.data.columns.length-1 ; i++ ){
		var th = document.createElement("th");
		th.innerHTML = this.data.columns[i].title;
		th.setAttribute("class",this.data.columns[i].class);
		tr.appendChild(th);
	}
	if(this.data.operation){
		var th = document.createElement("th");
		th.setAttribute("class","operation")
		th.innerHTML = "操作";
		tr.appendChild(th)
	}
}

Table.prototype.content = function(){
	const toolbar = document.getElementById(this.data.show.toolbar);
	ajax({
		method: this.data.input.method,
		url: this.data.input.url,
		success: function(respons){
			var data = JSON.parse(respons)
			console.log(JSON.parse(respons))
			if(!state(data.code)){
				console.log("数据错误");	
			}else{
				for (var i = 0 ; i < data.msg.length ; i++) {
					var tr = toolbar.querySelectorAll("tr");
					var newtr = document.createElement("tr");
					newtr.setAttribute("id","new")
					var str = '<td>'+i+'</td>';
					for (var j in data.msg[i]) {
						str += '<td>'+data.msg[i][j]+'</td>'
					}
					newtr.innerHTML = str;
					tr[tr.length-1].parentNode.appendChild(newtr);
					str = ""
				}
			}
		}
	})
	
}
Table.prototype.operation = function(){
	const toolbar = document.getElementById(this.data.show.toolbar);
	if(this.data.operation.delete){
		console.log(toolbar)
	}
}

