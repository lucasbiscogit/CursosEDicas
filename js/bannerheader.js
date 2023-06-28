satual=1; /*qual slide esta na vez*/
smax=7;   /*Quantidade de slaide que tem*/
stmp=5000; /*Tempo para passar os slides*/

function troca(){ /*Funcao vai ocutar todos os slides e vai exibir somente um*/
	/*Escondendo os baners*/
	document.getElementById("b1").style.visibility="hidden"
	document.getElementById("b2").style.visibility="hidden"
	document.getElementById("b3").style.visibility="hidden"
	document.getElementById("b4").style.visibility="hidden"
	document.getElementById("b5").style.visibility="hidden"
	document.getElementById("b6").style.visibility="hidden"
	document.getElementById("b7").style.visibility="hidden"
	document.getElementById("b8").style.visibility="hidden"
	
	/*Mostrando o baner*/
	document.getElementById("b"+satual).style.visibility="visible"
	
	/*Controle para passar os slides*/
	satual=satual+1;
	
	if(satual > smax){
		satual=1;
	}
}

function slaider(){ /*Passar os slides*/
	document.getElementById("b1").style.visibility="hidden"
	document.getElementById("b2").style.visibility="hidden"
	document.getElementById("b3").style.visibility="hidden"
	document.getElementById("b4").style.visibility="hidden"
	document.getElementById("b5").style.visibility="hidden"
	document.getElementById("b6").style.visibility="hidden"
	document.getElementById("b7").style.visibility="hidden"
	document.getElementById("b8").style.visibility="visible"

	slidertimer=setInterval(troca, stmp);
}