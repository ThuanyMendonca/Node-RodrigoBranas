//console.log(process.argv);
/*
process.argv.forEach(function (value){
	console.log(value);
});


//Exportando o arquivo process para o arquivo help.js
var help = require('./help.js');
var options = process.argv.slice(2);
//Para não ler undefined
if (options.length < 1){
	help.showOptions();
	return;
}
switch(options[0]){
	case 'a':
		console.log('pid' + process.pid);
		break;
	case 'b':
		console.log('title' + process.title);
		break;
	case 'c':
		console.log('arch' + process.arch);
		break;
	case 'd':
		console.log('plataform' + process.platform);
		break;
	//Caso digite outra letra, ele vai retornar a função options
	default:
		help.showOptions();
}
*/
var help = require('./help');
var options = process.argv.slice(2);
if (options.length < 1) {
	help.showOptions();
	return;
}
switch(options[0]) {
	case 'a':
		console.log('pid: ' + process.pid);
		break;
	case 'b':
		console.log('title: ' + process.title);
		break;
	case 'c':
		console.log('arch: ' + process.arch);
		break;
	case 'd':
		console.log('platform: ' + process.platform);
		break;
	default:
		help.showOptions();
}