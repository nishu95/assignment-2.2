


// TRAVERSING THE DOM //
var itemList=document.querySelector("#items");    // uncomment this first

/*
// parentNode
console.log(itemList.parentNode);         // this gives element div with id="main".
    // we can change things in parentNode from child
itemList.parentNode.style.backgroundColor="#f4f4f4";
    // parent of parentNode
console.log(itemList.parentNode.parentNode);      // will give div with class="container".
console.log(itemList.parentNode.parentNode.parentNode);     // give body


// parentNode and parentElement can be used interchangeably.



// parentElement
console.log(itemList.parentElement);         // this gives element gives div with id="main".
    // we can change things in parentElement from child
itemList.parentElement.style.backgroundColor="#f4f4f4";
    // parent of parentNode
console.log(itemList.parentElement.parentElement);      // will give div with class="container".
console.log(itemList.parentElement.parentElement.parentElement);     // give body



// childNodes
console.log(itemList.childNodes);         // gives node list of childrens but here it also including line breaks in html file as text.



// children
console.log(itemList.children);           // this gives htmlcollection not nodelist but rectifies above thing.
console.log(itemList.children[2]);
itemList.children[2].style.backgroundColor="yellow";

// FIRSTCHILD
console.log(itemList.firstChild);
// firstelementchild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent="hello 1";

// lastchild
console.log(itemList.lastChild);
//lastelementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="hello 4";



// sibling
console.log(itemList.nextSibling);
// next element sibling
console.log(itemList.nextElementSibling);


// previous sibling
console.log(itemList.previousSibling);
// previous element sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color="green";



// CREATE ELEMENT

 // create new div
var newDiv=document.createElement("div");

 // adding a class to div element
newDiv.className='hello';

 // add id
newDiv.id='hello1';

 // add attribute
newDiv.setAttribute('title','Hello div');

 // create text node and add it to div
var newDivText=document.createTextNode("hello world");
newDiv.appendChild(newDivText);

console.log(newDiv);

// inserting the above div element inside DOM
var container=document.querySelector("header .container");     // select container class inside header tag
var h1=document.querySelector("header h1");                    // select h1 inside header tag
container.insertBefore(newDiv,h1);

// change font size
newDiv.style.fontSize="30px";


console.log(newDiv);


//assignment 2
var newdiv2=document.createElement("div");
newdiv2.className='hellow';
newdiv2.id='hello12';
newdiv2.setAttribute('title','Hello div');
var newtext=document.createTextNode("hello world");
newdiv2.appendChild(newtext);
console.log(newdiv2);


var container2=document.querySelector("div .list-group");
var ul1=document.querySelector("ul li");

container2.insertBefore(newdiv2,ul1);




















