"use strict";
//All pictures used have been found on Google Images.
window.onload= startPage;
var viewStartH = 0 ;
var viewStartV = 0 ;
var emptyLeft = '300px';
var emptyTop = '300px';
var shuffleButton = document.getElementById("shufflebutton");

function startPage(){
	var pieces= document.getElementById("puzzlearea").getElementsByTagName("div");	
	placeTiles(pieces);

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

function tileMove(left, top){
	//Replaces the tile at the chosen locations with the location of the empty tile
    var moveH = emptyLeft;
    var moveV = emptyTop;
    emptyLeft = left;
    emptyTop = top;
 	return [moveH, moveV];  
}

function checkIfMoveable(tile){
	//Checks for tile placement next to empty tile so it can be moved
	var canMove;
	if ((parseInt(tile.style.left) - 100 + 'px') === emptyLeft && tile.style.top === emptyTop
		|| (parseInt(tile.style.top) - 100+ 'px') === emptyTop && tile.style.left === emptyLeft
		|| (parseInt(tile.style.left) + 100 + 'px') === emptyLeft && tile.style.top === emptyTop
		|| (parseInt(tile.style.top) + 100 + 'px') === emptyTop && tile.style.left === emptyLeft){
		tile.classList.add("moveablepiece");
		canMove = true;
	}else{
		canMove = false;
	}
	return canMove;
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

