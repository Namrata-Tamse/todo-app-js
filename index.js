
var blurDiv = document.querySelector('div');// for the bluring access using div tag store in the var=blurDiv(selects the first div)

var addNewList = document.querySelector('.addNewList');// access the first class element addNewList and store in varaible addNewList

var addNewItem = document.querySelector('.addNewItem');// access the addNewItem class that takes up each elemenet and stores it in var =addNewItem

var section = document.querySelector('section');//access the section in the main index page and store it in the variable = section

var addNewListHead = document.querySelector('#addNewListText');//for taking up addnewlistbox for writting the text from the input box and store it in variable=addNewListHead

var addNewItemHead = document.querySelector('#addNewItemText');//for taking up addnewitem for writting the text from the input box and store it in the varaible =addNewItemText

var header = document.querySelector('header');//for storing the elements from the header tag

//this function is linked to the +add item  button  and when clicked on this button it will blur the background and activate the add new list making the contents in its to be  formatted in the row
function start() {
	               blurDiv.classList.add('blur');//this tell will give blur effect to the first div element in the html document.
	               addNewList.style.display = 'flex';
                  }
                   
				  //code designed for addnewlist close button 
				  document.querySelector('.closeButton').addEventListener('click', () => {
					blurDiv.classList.remove('blur');
					addNewList.style.display = 'none';
				 });

                 //code designed for addnewitem close button
				 document.querySelector('.closeButton2').addEventListener('click', () => {
					blurDiv.classList.remove('blur');
					addNewItem.style.display = 'none';
				});

var count = 0;// will hold up the counts of the cards  when added from the addnewlist box
var rowCount = 0;
var addMiniCard;



function addingTasks() //function is called when clciked on the add button inthe  addnewlist box
{
	count++;//increament the new card when added so that each card will get unique identifier  toappend the value to the id attribute of newly created box

	blurDiv.classList.remove('blur');//first element div element holded and inside that ther will be the class list  that has to be removed with the blur effect
	addNewList.style.display = 'none';// the variable that holds the element is given the styling as display: none so that its get invisible
	document.querySelector('#none').style.display = 'none';// section div having the id as none whose style of display is made invisible.

	var box = document.createElement('div');//container  for holding new added card 
	var boxHead = document.createElement('div');// container to hold the header of the card inside the card
	var boxLine = document.createElement('hr');//container to seperete the header using horizontal line inside the card
	var boxDeleteButton = document.createElement('div');//container to hold the dusbin inside the card
	var boxAddButton = document.createElement('div');// container to hold the add button+ inside the card

	section.appendChild(box);//appending the child box to the parent section
	box.setAttribute('id', `box${count}`);//setting the id of the box variable containing the element to a unique identifier based on the values of the count
	box.classList.add('box');//applying the styling box that is being given to the list of the class in the box variable holding an element

	box.appendChild(boxHead);//appending the child boxhead to the parent box
	boxHead.classList.add('boxHead');// applies the css styling that is given to the class name boxhead to the boxhead variable container
	boxHead.innerHTML = `${addNewListHead.value}`;//sets the innerhtml of the element holder variable boxhead  to the value added from this addNewListHead
	

	//event listener for the card heading
	    boxHead.addEventListener('click', () => 
		{//giving the event listener to the haeder holder variable that is boxhead
		var allTasks = document.querySelectorAll('.box');//This line selects all elements with the class 'box' and stores them in the allTasks variable. 
		var card = boxHead.parentNode;// This line sets the card variable to the parent node (the task list container) of the clicked boxHead element. It helps identify the specific task list that was clicked.
		var cardValue = boxHead.innerHTML;//This line stores the inner HTML content of the boxHead element  in the cardValue variable.
		header.style.display = 'none';//This line sets the CSS style display: none for the header
		card.style.display = 'block';//This line sets the CSS style display: block for the card element  that was clicked, making it visible and showing the task list.
		section.classList.add('sectionAround');//This line adds the CSS class 'sectionAround' to the section element. 
		allTasks.forEach((cards)=>//This code iterates through all the task lists (cards) in allTasks
		{
			if(cards!==card)
			cards.style.display = 'none';			
		});
		document.querySelector('.noneNav').style.display = 'flex';
		document.querySelector('.text').innerHTML = `<h3>${cardValue}</h3>`;

		document.querySelector('.noneNavH').addEventListener('click', () => 
		{
			header.style.display = 'flex';
			section.classList.remove('sectionAround');
			document.querySelector('.noneNav').style.display = 'none';
			allTasks.forEach((cards)=>{			
			cards.style.display = 'block';	
		});
		
		});

		document.querySelector('#addItem').addEventListener('click', () => {
			blurDiv.classList.add('blur');
			addNewList.style.display = 'flex';
			header.style.display = 'flex';
			document.querySelector('.noneNav').style.display = 'none';
			allTasks.forEach((cards)=>{			
			cards.style.display = 'block';	
		});
			
		});
	});



	box.appendChild(boxLine);
	box.appendChild(boxDeleteButton);
	boxDeleteButton.classList.add('boxDeleteButton');
	boxDeleteButton.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
	boxDeleteButton.addEventListener('click', () => {
		var cardDelete = boxDeleteButton.parentNode;
		cardDelete.remove();
		if(document.querySelectorAll('.box').length<1) document.querySelector('#none').style.display = 'block';
	});

	box.appendChild(boxAddButton);
	boxAddButton.classList.add('boxAddButton');
	boxAddButton.innerHTML = `+`;
	boxAddButton.addEventListener('click', () => {
		blurDiv.classList.add('blur');
		addNewItem.style.display = 'flex';
		addMiniCard = boxAddButton.parentNode;
	});
}



document.querySelector('.addItemButton').addEventListener('click', () => {
	rowCount++;
	blurDiv.classList.remove('blur');
	addNewItem.style.display = 'none';

	var row = document.createElement('div');
	var rowText = document.createElement('div');
	var rowButton = document.createElement('div');

	addMiniCard.appendChild(row);
	row.appendChild(rowText);
	row.appendChild(rowButton);

	row.setAttribute('id', `row${rowCount}`);
	row.classList.add('row');
	rowButton.classList.add('rowButton');

	rowText.innerHTML = `${addNewItemHead.value}`;
	rowButton.innerHTML = `<h6>Mark done</h6>`;
	rowButton.addEventListener('click', () => {
		var cardText = rowButton.parentNode;
		console.log(cardText);
		cardText.classList.add('strikeThrough');
		rowButton.style.display = 'none';
	});
});
