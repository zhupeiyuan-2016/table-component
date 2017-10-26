
function init(url){
	ajax({  
    method: 'GET',  
    url: url,  
    success: function (response) {  
    		console.log(response);
       	let table = new Table(response); 
    }  
});
}
function Table(data){ 
	this.data = data;
	this.init();
}
Table.prototype.init = function(){
	console.log(this.data); 
}
var url = 'base/base.json';
init(url)

//var flag;
//function a (url){
//	var temp;
//	ajax({
//		method: 'GET',  
//  		url: url,  
//  		async:false,
//  		success: function (data) {  
//     		temp = data;
//     		flag = data;
//     		console.log(temp);
//     		console.log(flag)
//  		}
//	})	
//	console.log(temp)
//	console.log(flag)
//}
//console.log(temp);
//console.log(flag);
//a(url)
