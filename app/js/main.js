var board = [];
var score = 0;
function newGame(){
	init();
	generatenumber();
}
function init(){
	for(var i = 0 ;i < 4;i++){
		for(var j = 0;j < 4;j++){
			$('#gridContainer2').append('<div id="number_cell_'+ i+ '_' + j + '">');
		}
	}
}
function generatenumber(){
	var randomQueue = parseInt(Math.floor(Math.random() * 16));
	var randomNumber = Math.random() < 0.5 ? 2 : 4;
	showNumber(randomQueue,randomNumber);
}
function showNumber(queue,number){
	$('#grid-' + queue).text(number);
}