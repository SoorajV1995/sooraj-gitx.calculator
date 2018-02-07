let numOnebox;
let numTwobox;
let btn = document.getElementById('btn');
let disabledBox;
let sum;
let numOne;
let numTwo;

btn.addEventListener("click", function (event) {
	numOnebox = document.getElementById('box1').value;
	numTwobox = document.getElementById('box2').value;
	disabledBox = document.getElementById('box3');

	numOne = Number(numOnebox);
	numTwo = Number(numTwobox);
	sum = numOne+numTwo;
	
	disabledBox.value=sum;
});
