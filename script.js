/* Inspired by w3schools solution on creating a [Draggable HTML Element](https://www.w3schools.com/howto/howto_js_draggable.asp).*/

dragElement(document.getElementById('face1'));
dragElement(document.getElementById('face2'));
dragElement(document.getElementById('face3'));
dragElement(document.getElementById('face4'));
dragElement(document.getElementById('face5'));
dragElement(document.getElementById('face6'));
dragElement(document.getElementById('face7'));
dragElement(document.getElementById('face8'));
dragElement(document.getElementById('face9'));
dragElement(document.getElementById('face10'));
dragElement(document.getElementById('face11'));
dragElement(document.getElementById('face12'));
dragElement(document.getElementById('face13'));
dragElement(document.getElementById('face14'));

function dragElement(terrariumElement) {
	let xStored=0, yStored=0, xCalced=0, yCalced=0;
	terrariumElement.onpointerdown = startDrag;
	function startDrag(event) {
	  event.preventDefault();
	  console.log(event);
	  xStored = event.clientX; // store initial X value
	  yStored = event.clientY; // store initial Y value
	  document.onpointermove = calcDrag; // calculates move (called continuously)
	  document.onpointerup = stopDrag; // stops dragging process
	}
	function calcDrag(event) {
	  xCalced = xStored - event.clientX; // calculates how far cursor has moved
	  yCalced = yStored - event.clientY;
	  xStored = event.clientX; // update stored cursor position
	  yStored = event.clientY;
	  // Moving the element using CSS
	  terrariumElement.style.left = (terrariumElement.offsetLeft - xCalced) + 'px';
	  terrariumElement.style.top = (terrariumElement.offsetTop - yCalced) + 'px';
	}
	function stopDrag () {
	  document.onpointerup = null;   // removes event listener
	  document.onpointermove = null; // removes event listener
	}
  }