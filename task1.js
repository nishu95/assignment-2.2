// EXAMIN THE DOCUMENT OBJECT

//console.dir(document);          // this shows all the property and methods in the DOM
/*
console.log(document.domain);
console.log(document.URL);
console.log(document.title);     // title is just look at the tab what's written there is title
// document.title="123";
console.log(document.doctype);

console.log(document.head);
console.log(document.body);
console.log(document.all);          // gives html collection of all

console.log(document.all[10]);      // 
// document.all[10].textContent="hello";   // with this the item listenere changed to hello

console.log(document.forms);
console.log(document.links);
*/

//console.log(document.images);


// GETELEMENTBYID //

// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='hello';
// headerTitle.innerText='boy';
// Difference between innertext and textcontent. is that one of them takes care of the style that is innertext takes care of style that is induced in header tag under span .

//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);   // only this take care of style

// headerTitle.innerHTML='<h3>hello</h3>';

// style changes

// headerTitle.style.borderBottom='solid 3px #000';
// header.style.borderBottom='solid 3px #000';

//header.style.color='green';

//headerTitle.style.color='green';

/*
// make add item bold and change it's color to green
var div=document.getElementById('main');
console.log(div);
div.style.color="green";
div.style="fontWeight:500";

var additem=document.querySelector(".title");
console.log(additem);
additem.style.color="green";
additem.style.fontWeight="900";
*/


// GET ELEMENTS BY CLASS NAME //

var items=document.getElementsByClassName("list-group-item");
console.log(items);     // this gives us a html collection of items
console.log(items[0]);

items[1].textContent="hello";
items[1].style.backgroundColor="yellow";
items[1].style.fontWeight="bold";

// generates error when trying to make all elemts background grey
// items.style.backgroundColor="#f4f4f4";

// which means we need to mafe a for loop and apply grey background to every element
for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor="#f4f4f4";
}

items[2].style.backgroundColor="green";
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}


// GETELEMENTSBYTAGNAME //

var li=document.getElementsByTagName('li');
console.log(li);     // this gives us a html collection of items
console.log(li[0]);

li[1].innerHTML="hello";
li[1].style.backgroundColor="yellow";
li[1].style.fontWeight="bold";

// generates error when trying to make all elemts background grey
// li.style.backgroundColor="#f4f4f4";

// which means we need to mafe a for loop and apply grey background to every element
for(let i=0;i<li.length;i++){
    li[i].style.backgroundColor="#f4f4f4";
}

// we added 1 more li element item 5, and because it was getelementsbytag all above property is imbeded in the newly formed tag li also
// if it was get element by class name the new li element will not have reflected above changes.










