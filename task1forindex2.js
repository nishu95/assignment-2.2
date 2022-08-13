// video 4 (final project)

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
    //console.log(newItem.value);

    // create new li element
    var li=document.createElement("li");
    li.className='list-group-item';
    console.log(li);

    // add text node with input values
    li.appendChild(document.createTextNode(newItem.value));

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


    li.appendChild(deleteBtn);
    li.appendChild(editbtn);

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

