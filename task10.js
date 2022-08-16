// [Watch this video to understand how to store data in localStorage - https://www.youtube.com/watch?v=GihQAC1I39Q].
// Deliverable
// Write logic to store the details entered by the user in the local storage when he clicks on submit. Watch this video to understand the agorithm that you can use
// https://www.youtube.com/watch?v=lGmSZQwa3B4

// Getting stuck to a problem and trying to figure out the solution to it is what will make you a strong software developer.
// Watch this video to understand how you can debug effectively and find a solution.

var form=document.getElementById('my-form');
form.addEventListener('submit',addlocal);

function addlocal(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    console.log(name);
    var email=document.getElementById('email').value;
    console.log(email);

    localStorage.setItem('userDetails','name: '+name+' email: '+email);
    console.log(localStorage.getItem('userDetails'));
}

