/*exports.onReadable = function(callback) {
//Digitação do teclado
	process.stdin.on('readable', function() {
		var chunk = process.stdin.read();
		//Transformando o buffer para string
		console.log(chunk.toString());
		if(chunk) callback(chunk.toString().replace('/\n', ''));
	});
}*/
exports.onReadable = function (callback) {
	process.stdin.on('readable', function () {
	var chunk = process.stdin.read();		
    if (chunk) callback(chunk.toString().replace(/\n/, '').replace(/\r/,''));
    var a = chunk;
    console.log(a);
	});
}


