const registerBtn = document.querySelector('#registerBtn');

const inputName = document.querySelector('#fullName');
const inputUsername = document.querySelector('#username');
const inputPass= document.querySelector('#password');
const msg= document.querySelector('.msg');

registerBtn.addEventListener('click',(e)=>{
    e.preventDefault()
const name = inputName.value.trim();
const username = inputUsername.value.trim();
const password = inputPass.value.trim();



    if(name==""){

        inputName.focus();
        msg.innerHTML="Name can't be empty"
    }
      else if(username==""){

        inputUsername.focus();
        msg.innerHTML="Username can't be empty"
    }
     else if(password==""){

        inputPass.focus();
        msg.innerHTML="Password can't be empty"
    }
    else{
       let users = JSON.parse(localStorage.getItem('data10'));


if (!users) {
    users = []; 
} else if (!Array.isArray(users)) {
    users = [users];
}
        const userData  = {
             name: name,
            username: username,
            password: password
        }
        users.push(userData)

        localStorage.setItem("data10", JSON.stringify(users));
        
              msg.innerHTML = "Data saved successfully!";
        
        msg.style.color="green"
    }
})


const backBtn = document.querySelector('.backBtn');
backBtn.addEventListener('click',()=>{
    window.location.href='Home.html'
})