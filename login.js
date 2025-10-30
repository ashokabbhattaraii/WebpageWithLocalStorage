const registerBtn = document.querySelector('#registerBtn');


const inputUsername = document.querySelector('#username');
const inputPass= document.querySelector('#password');
const msg= document.querySelector('.msg');

registerBtn.addEventListener('click',(e)=>{
    e.preventDefault()

const username = inputUsername.value.trim();
const password = inputPass.value.trim();



   if(username==""){

        inputUsername.focus();
        msg.innerHTML="Username can't be empty"
    }
     else if(password==""){

        inputPass.focus();
        msg.innerHTML="Password can't be empty"
    }
    else{
        
     const userData = JSON.parse(localStorage.getItem('data10')) || [];
     console.log(userData)
     let loggedIn = false
     let loggedUser = ''
userData.forEach(user => {
    if(user.username===username && user.password===password){
  loggedIn = true
  loggedUser = username
  
   }
});

   if(loggedIn){
    msg.style.color="green"
    msg.innerHTML=`Logged In Successfully, Welcome ${username}`
    const userProfile ={
        username:loggedUser,
        status:loggedIn
    }

    localStorage.setItem('checkLogIn',JSON.stringify(userProfile))
    console.log(userProfile)
    window.location.href='home.html'
    

   }
   else{
    msg.innerHTML="User not found"
   }
    }
})

const backBtn = document.querySelector('.backBtn');
backBtn.addEventListener('click',()=>{
    window.location.href='Home.html'
})