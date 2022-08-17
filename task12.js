// link with task 12 html file

/*
You were able to store single user Details in the local storage. This is not scalable.

Everytime you add a new user, the older user gets removed.

1.Use some algorithm to store the details of multiple users in the local storage. (Check Hint1 for answer to this if stuck for long)
2.Show the list of all the users who have applied right below the form using DOM Manipulations. Simply Iterate through the localstorage object to get all the keys stored in it.(Check Hint2 for answer to this if stuck for long)
3.Show the booking made on the screen with the user details

It should work like this. https://37tch.csb.app/

Dont have to add the Edit and delete functionalities here

*/
var form=document.getElementById('form');
form.addEventListener('submit',addlocal);

var userList=document.getElementById('list');

function addlocal(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    //console.log(name);
    var email=document.getElementById('email').value;
    //console.log(email);

    let object={
        objname:name,
        objmail:email
    };

    localStorage.setItem(object.objmail,JSON.stringify(object));
    showNewUserOnTheScreen(object);
    

}

function showNewUserOnTheScreen(obj){
    //var my_objdesearialized=JSON.parse(localStorage.getItem(key));
    //console.log(my_objdesearialized.objname);
    //console.log(my_objdesearialized.objmail);

    var li=document.createElement('li');
    li.className='tag';
    

    var user=document.createElement('h2');
    user.textContent=obj.objname+' '+obj.objmail;

    li.appendChild(user);
    userList.appendChild(li);

}




document.addEventListener('DOMContentLoaded',refresh);
function refresh(e){
    e.preventDefault();
    
    
    Object.keys(localStorage).forEach(function(key){
        console.log(localStorage.getItem(key));
        var my_objdesearialized=JSON.parse(localStorage.getItem(key));
        console.log(my_objdesearialized.objname);
        console.log(my_objdesearialized.objmail);

        showNewUserOnTheScreen(my_objdesearialized);
    

    });
}





