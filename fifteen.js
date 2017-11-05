"use strict";
//All pictures used have been found on Google Images.
//I have completed and would like to be graded on the "Multiple Backgrounds" extra feature.
window.onload = startPage;
var viewStartH = 0 ;
var viewStartV = 0 ;
var emptyLeft = '300px';
var emptyTop = '300px'





function startPage(){
	//Page start up function
	var picture = ['background.jpg','background_ruby.jpg','background_blake.jpg','background_yang.jpg'];
	var randomPicNum = Math.floor(Math.random()*(picture.length));
	var pieces = document.getElementById("puzzlearea").getElementsByTagName("div");
	var shuffleButton = document.getElementById("shufflebutton");	
	placeTiles(pieces);
	choosePicture();
	var selection = picture[randomPicNum];
	changeBackground(selection);
	shuffleButton.onclick = function(){
		shuffle(pieces);
		moveableYes(pieces);
	}
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

function moveableYes(pieces){
	//Checks to see if a tile can be moved
	for (var a = 0; a < pieces.length ; a++){
		
		pieces[a].onmouseover = function(){
			if(checkIfMoveable(this)){
				this.classList.add("moveablepiece");
			}
		}

		pieces[a].onmouseout = function(){
			this.classList.remove("moveablepiece");
		}

		//Moves the tiles accordingly
		pieces[a].onclick = function(){
			if(checkIfMoveable(this)){
				var changePositions = tileMove(this.style.left, this.style.top);
				this.style.left = changePositions[0];
				this.style.top = changePositions[1];
				moveableYes(pieces);
			}
		}
	}
}

function checkIfMoveable(tile){
	//Checks for tile placement next to empty tile so it can be moved
	var canMove;
	var piece = tile;
	if ((parseInt(piece.style.left) - 100 + 'px') === emptyLeft && piece.style.top === emptyTop
		|| (parseInt(piece.style.top) - 100 + 'px') === emptyTop && piece.style.left === emptyLeft
		|| (parseInt(piece.style.left) + 100 + 'px') === emptyLeft && piece.style.top === emptyTop
		|| (parseInt(piece.style.top) + 100 + 'px') === emptyTop && piece.style.left === emptyLeft){
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
	//Moves one tile at a time taking into account that the moved tile must be next to the empty space
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

function choosePicture(){
	//Creates the buttons needed to select different backgrounds and places them on the board
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

	//Selects different backgrounds as soon as the buttons are clicked 
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
	//Used to change the background for each individual tile
	var pieces = document.getElementById("puzzlearea").getElementsByTagName("div");
	for (var o = 0; o < pieces.length; o++){
		pieces[o].style.backgroundImage = 'url('+selection+')';
	}
}