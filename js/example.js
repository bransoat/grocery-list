function additem(){
var newitem = prompt("What item would you like to add")

// ADDING ITEMS TO START AND END OF LIST
var list = document.getElementsByTagName('ul')[0];                 

// ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement('li');                    
var newTextLast = document.createTextNode(newitem);                
newItemLast.appendChild(newTextLast);                              
list.appendChild(newItemLast);

updatecount();

} // end function additem()

function updatecount(){                                     
var listItems = document.querySelectorAll('li');                   
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');                        
var headingText = heading.firstChild.nodeValue;                    
var totalItems = listItems.length;                                 
var newHeading =  headingText + '<span>' + totalItems + '</span>'; 
heading.innerHTML = newHeading;                                    
}

function clearitem(){

while (listid.firstChild) {
	listid.removeChild(listid.firstChild);
}
updatecount();
}