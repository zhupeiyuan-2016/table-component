
/* 封装ajax函数  
 * @param {string}opt.type http连接的方式，包括POST和GET两种方式  
 * @param {string}opt.url 发送请求的url  
 * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的  
 * @param {object}opt.data 发送的参数，格式为对象类型  
 * @param {function}opt.success ajax发送并接收成功调用的回调函数  
 */  
    function ajax(opt) {  
        opt = opt || {};  
        opt.method = opt.method.toUpperCase() || 'POST';  
        opt.url = opt.url || '';  
        opt.async = opt.async || true;  
        opt.data = opt.data || null;  
        opt.success = opt.success || function () {};  
        var xmlHttp = null;  
        if (XMLHttpRequest) {  
            xmlHttp = new XMLHttpRequest();  
        }  
        else {  
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');  
        }var params = [];  
        for (var key in opt.data){  
            params.push(key + '=' + opt.data[key]);  
        }  
        var postData = params.join('&');  
        if (opt.method.toUpperCase() === 'POST') {  
            xmlHttp.open(opt.method, opt.url, opt.async);  
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');  
            xmlHttp.send(postData);  
        }  
        else if (opt.method.toUpperCase() === 'GET') {  
            xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);  
            xmlHttp.send(null);  
        }   
        xmlHttp.onreadystatechange = function () {  
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {  
                opt.success(xmlHttp.responseText);  
            }  
        };  
    }  
    
function state(data) {
		switch(data){
			case 200:
				return true;
				break;
			case -1:
				return false;
				break;
			case 201:
				return false;
				break;
			case 101:
				return false;
				break;

		}
	}
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
	for (var i = 0 ; i < this.data.columns.length ; i++ ){
		var th = document.createElement("th");
		th.innerHTML = this.data.columns[i].title;
		th.setAttribute("class",this.data.columns[i].class);
		tr.appendChild(th);
	}
	console.log(this.data.operation.switch)
	if(this.data.operation.switch){
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

