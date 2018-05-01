var konsole = {
	//Criando um objeto que recebe uma função
	log: function (msg){
		//canal output
		process.stdout.write(msg +'\n');
	},
	//mensagem de erro
	error: function(msg){
		process.stderr.write(msg + '\n');
	}
};
//Verificando se foi para o terminal
konsole.log('A TTY: '+ !!process.stdout.isTTY);
konsole.error('B TTY ' + !!process.stdout.isTTY);