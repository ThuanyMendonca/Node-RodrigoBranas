//Vai ler A, B e depois o I

/*
console.log('A' + new Date());
setTimeout(function(){
	console.log('I' + new Date());
},0);
console.log('B' + new Date());
*/

//SetImmediate
console.log('A' + new Date());
SetImmediate(function () {
	console.log('I' + new Date());
});
console.log('B' + new Date());