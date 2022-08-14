var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

// add events listener
form.addEventListener('submit',addItem);

// Add Items
function addItem(e){
    e.preventDefault();
    console.log(e.type);

    // get input value
    var newItem=document.getElementById('item');
    var newDescription=document.getElementById('description');
    //console.log(newItem.value);

    
    var heading=document.createElement('h3');
    heading.textContent=newItem.value;
    var paragraph=document.createElement('p');
    paragraph.textContent=newDescription.value;
    
    

    // create new li element
    var li=document.createElement("li");
    li.className='list-group-item';
    console.log(li);

    // add text node with input values
    li.appendChild(heading);
    li.appendChild(paragraph);

    // create delete button and add it to li element
    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    // append text node to delete btn
    deleteBtn.appendChild(document.createTextNode('X'));

    // adding edit button next to delete button without functionality
    var editbtn=document.createElement('button');
    editbtn.className='btn btn-danger btn-sm float-right delete';
    // append text node to edit button
    editbtn.appendChild(document.createTextNode('EDIT'));

    li.appendChild(editbtn);
    li.appendChild(deleteBtn);
    

    // append li to list
    itemList.appendChild(li);
}

// delete event (for removing item)
itemList.addEventListener('click',removeItem);

function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        //console.log(1);
        if(confirm('ARE YOU SURE?')){

            var li=e.target.parentElement;
            console.log(li);
            itemList.removeChild(li);
        }

    }
}

// DOM MANIPULATION CHEAT SHEET https://www.youtube.com/watch?v=pfT_0K07c4E&t=2s&ab_channel=yashprasad

var filter=document.getElementById('filter');
// filter event
filter.addEventListener('keyup',filterItems);

function filterItems(e){
    e.preventDefault();
    // convert to lower case
    var text=e.target.value.toLowerCase();
    //console.log(text);

    //get list
    var items=itemList.getElementsByTagName('li');
    //console.log(items);

    // convert collection to array
    Array.from(items).forEach(function(item){
        var itemName=item.children[1].textContent;
        var description=item.children[2].textContent;
        console.log(itemName);

        // compare itemName to search box text
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }else if(description.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    });
}