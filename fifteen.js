"use strict";
//All pictures used have been found on Google Images.
//I have completed and would like to be graded on the "Multiple Backgrounds" extra feature.
window.onload = startPage;
var viewStartH = 0 ;
var viewStartV = 0 ;
var emptyLeft = '300px';
var emptyTop = '300px'





function startPage(){
	var picture = ['background.jpg','background_ruby.jpg','background_blake.jpg','background_yang.jpg'];
	var randomPicNum = Math.floor(Math.random()*(picture.length));
	var pieces = document.getElementById("puzzlearea").getElementsByTagName("div");
	var shuffleButton = document.getElementById("shufflebutton");	
	placeTiles(pieces);
	var selection = picture[randomPicNum];
	shuffleButton.onclick = function(){
		shuffle(pieces);
	}
	changeBackground(selection);
	choosePicture();
}

function placeTiles(pieces){
	for (let q = 0; q < pieces.length; q++){

		//Places the tiles onto the board
		pieces[q].classList.add("puzzlepiece");

		//Places the tiles in their correct posistions
		if (q===0 || q===4 || q===8 || q===12){
			pieces[q].style.left= '0px';
		}
		if (q===1 || q===5 || q===9 || q===13){
			pieces[q].style.left= '100px';
		}	
		if (q===2 || q===6 || q===10 || q===14){
			pieces[q].style.left= '200px';
		}	
		if (q===3 || q===7 || q===11){
			pieces[q].style.left= '300px';
		}
		if (q===0 || q===1 || q===2 || q===3){
			pieces[q].style.top= '0px';
		}	
		if (q===4 || q===5 || q===6 || q===7){
			pieces[q].style.top= '100px';
		}	
		if (q===8 || q===9 || q===10 || q===11){
			pieces[q].style.top= '200px';
		}
		if (q===12 || q===13 || q===14){
			pieces[q].style.top= '300px';
		}	

		//Adds the background picture to each tile
		if (q===0 || q===1 || q===2 || q===3){
			pieces[q].style.backgroundPosition = viewStartH + 'px ' + viewStartV + 'px';
			viewStartH -= 100;
		}
		if (q===4 || q===5 || q===6 || q===7){
			viewStartV = 300 ;
			pieces[q].style.backgroundPosition = viewStartH + 'px ' + viewStartV + 'px';
			viewStartH -= 100;
		}
		if (q===8 || q===9 || q===10 || q===11){
			viewStartV = 200 ;
			pieces[q].style.backgroundPosition = viewStartH + 'px ' + viewStartV + 'px';
			viewStartH -= 100;
		}
		if (q===12 || q===13 || q===14){
			viewStartV = 100 ;
			pieces[q].style.backgroundPosition = viewStartH + 'px ' + viewStartV + 'px';
			viewStartH -= 100;
		}
	}
	moveableYes(pieces);
}

function moveableYes(pieces){
	for (var a = 0; a < pieces.length ; a++){
		if (pieces[a].onmouseover= checkIfMoveable(pieces[a])){
			pieces[a].addEventListener("click", function(){
				var changePositions = tileMove(this.style.left, this.style.top);
				this.style.left = changePositions[0];
				this.style.top = changePositions[1];
			}
		)}
	}
}

function checkIfMoveable(tile){
	//Checks for tile placement next to empty tile so it can be moved
	var canMove;
	if ((parseInt(tile.style.left) - 100 + 'px') === emptyLeft && tile.style.top === emptyTop
		|| (parseInt(tile.style.top) - 100 + 'px') === emptyTop && tile.style.left === emptyLeft
		|| (parseInt(tile.style.left) + 100 + 'px') === emptyLeft && tile.style.top === emptyTop
		|| (parseInt(tile.style.top) + 100 + 'px') === emptyTop && tile.style.left === emptyLeft){
		tile.classList.add("moveablepiece");
		canMove = true;
	}else{
		canMove = false;
	}
	return canMove;
}

function tileMove(left, top){
	//Replaces the tile at the chosen locations with the location of the empty tile
    var moveH = emptyLeft;
    var moveV = emptyTop;
    emptyLeft = left;
    emptyTop = top;
 	return [moveH, moveV];  
}

function shuffle(pieces){
	var shuffleList = new Array();
	for (var s=0; s < 500; s++){
		for (var z = 0; z < 15; z++){
			if (checkIfMoveable(pieces[z])){
				shuffleList.push(pieces[z]);
			}
		}
		var randomNumber = Math.floor(Math.random()*(shuffleList.length));
		var chosenOne = shuffleList[randomNumber];
		var givenSlot = tileMove(chosenOne.style.left, chosenOne.style.top);
		chosenOne.style.left = givenSlot[0];
		chosenOne.style.top = givenSlot[1];
	}
}

/*function changeBackground(pieces, selection){
	for (var o = 0; o < pieces.length; o++){
		pieces[o].style.backgroundImage = 'url('+selection+')';
	}
}*/

function choosePicture(){

	var placement = document.getElementById("controls");

	var weiss = document.createElement("button");
	var ruby = document.createElement("button");
	var blake = document.createElement("button");
	var yang = document.createElement("button");


	ruby.innerHTML = "Ruby";
	weiss.innerHTML = "Weiss";
	blake.innerHTML = "Blake";
	yang.innerHTML = "Yang";

	placement.appendChild(ruby);
	placement.appendChild(weiss);
	placement.appendChild(blake);
	placement.appendChild(yang);

	ruby.onclick = function(){
		changeBackground('background_ruby.jpg');
	}
	weiss.onclick = function(){
		changeBackground('background.jpg');
	}
	blake.onclick = function(){
		changeBackground('background_blake.jpg');
	}
	yang.onclick = function(){
		changeBackground('background_yang.jpg');
	}
}

function changeBackground(selection){
	var pieces = document.getElementById("puzzlearea").getElementsByTagName("div");
	for (var o = 0; o < pieces.length; o++){
		pieces[o].style.backgroundImage = 'url('+selection+')';
	}
}

function startOthers(){
	var ruby = document.getElementById('ruby');
	var weiss = document.getElementById('weiss');
	var blake = document.getElementById('blake');
	var yang = document.getElementById('yang');
	ruby.onclick = forceChangeBackground('background_ruby.jpg');
	weiss.onclick = forceChangeBackground('background.jpg');
	blake.onclick = forceChangeBackground('background_blake.jpg');
	yang.onclick = forceChangeBackground('background_yang.jpg');
}
/*

function t(){
	let g=5;
	console.log(g);
}

var puzzlEArea = $("#puzzlearea")
var tiles = puzzlEArea.children();
console.log(tiles);
for (n=0; n < tiles.length; n++){
	tile=tiles[n]
	tile.addClass(puzzlepieces)
}
tiles.each(){
	tile= $this;
	tile.addClass;
}*/


/*function pictureBack(pieces){
	pieces.style.backgroundPoistion = viewStartH + 'px ' + viewStartV + 'px';
	viewStartH += 100;
}

function boardPieces(tilea){
	var c=0;
	for (var i=0 ; i < 15; i++){
		for (var j=0 ; j < 15; j++){
		numArray[c] = tilea[i][j];
		}
	}
	c++;
}*/

