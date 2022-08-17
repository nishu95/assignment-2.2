// Deliverables

// 1.Now try storing the user details as an object in the local storage. Watch this video https://www.youtube.com/watch?v=AUOzvFzdIk4
// 2.Whenever the user refreshes the page read from the localstorage , parse the string and show the user details in the frontend

var form=document.getElementById('my-form');
form.addEventListener('submit',addlocal);

function addlocal(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    console.log(name);
    var email=document.getElementById('email').value;
    console.log(email);

    let object={
        objname:name,
        objmail:email
    };
    let myobj_serialized=JSON.stringify(object);    // this is used to convert object info into a string
    console.log(myobj_serialized);


    localStorage.setItem('userDetails',myobj_serialized)
    console.log(localStorage.getItem('userDetails'));

    //let myobj_deserialized=JSON.parse(localStorage.getItem('userDetails'));   // this is used to convert string info back into an object 
    //console.log(myobj_deserialized);

}

var userList=document.getElementById('users');

window.addEventListener('DOMContentLoaded',refresh);
function refresh(e){
    e.preventDefault();
    let myobj_deserialized=JSON.parse(localStorage.getItem('userDetails'));
    console.log(myobj_deserialized);
    // var data=localStorage.getItem('userDetails');

    var li=document.createElement('li');
    li.className='tag';

    var user=document.createElement('h2');
    user.textContent='user details are: name is '+myobj_deserialized.objname+' email is '+myobj_deserialized.objmail;

    li.appendChild(user);
    userList.appendChild(li);


}

