//Para rodar, coloca node antes do nome do arquivo

/*

var interval = function(callback, time){
	setTimeout(function(){
		callback();
		interval(callback,time);
	},time);
}

interval(function(){
	console.log('R' + new Date());
},1000);

*/

//Jeito mais simples
var i = setInterval(function(){
	console.log('I' + new Date())
},1000); 
//Depois de 5 segundos, ele cancela (para a execução)
setTimeout(function(){
	clearInterval(i);
},5000);