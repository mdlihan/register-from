let form = document.querySelector('form');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirm = document.querySelector('#confirm');
let submit = document.querySelector('#submit'); 
let checkbox = document.querySelector('#checkbox');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let userinfo  = {
    username:username.value,
    email : email.value,
    password : password.value,
    confirm : confirm.value,
    checkbox:checkbox.value
  }
  console.log(userinfo)
  username.value='';
  email.value='';
  password.value='';
  confirm.value='';
  checkbox.checked=''
});