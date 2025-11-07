const loginRegister = document.querySelector('#loginRegister');
const profileIcon = document.querySelector('.logo')
const username = document.querySelector('.username')



loginRegister.addEventListener('click',()=>{
    document.location.href='login.html'
})

window.addEventListener('load',()=>{
    const userData = JSON.parse(localStorage.getItem('data10'))
    console.log(userData)
    const checkLogIn = JSON.parse(localStorage.getItem('checkLogIn'));
    console.log(checkLogIn)

    const status = checkLogIn.status;
    const loggedUser = checkLogIn.username;
    if(status){
        loginRegister.style.visibility='hidden'
        profileIcon.style.visibility='visible' 
        username.innerText = `${loggedUser}`
    }else{
        loginRegister.style.visibility='visible'
    }
    
})


const dropdown = document.querySelector('.dropdown')

profileIcon.addEventListener('mouseenter',()=>{
    dropdown.style.visibility='visible'
})



profileIcon.addEventListener('mouseleave', (e) => {
  setTimeout(() => {
    if (!dropdown.matches(':hover') && !profileIcon.matches(':hover')) {
      dropdown.style.visibility = 'hidden';
    }
  }, 100);
});

dropdown.addEventListener('mouseleave', () => {
  dropdown.style.visibility = 'hidden';
});

const logoutBtn = document.querySelector('.logoutBtn');
logoutBtn.addEventListener('click',()=>{
     const checkLogIn = JSON.parse(localStorage.getItem('checkLogIn'));
    
     if(checkLogIn){
        checkLogIn.status=false
        localStorage.setItem('checkLogIn',JSON.stringify(checkLogIn))
  
         setTimeout(() => {
            window.location.href='login.html'
         }, 500);
     }
  
})

const navLinks = document.querySelectorAll('.nav-links ul li a')

navLinks.forEach(link => {
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        navLinks.forEach(i => i.classList.remove('active'));
        link.classList.add('active')
        if(link.matches(':hover')){
            navLinks.forEach(i => i.classList.remove('active'));
        link.classList.add('active')
        }else{

        }

    })
});


const tooleMenu = document.querySelector('.toogleMenu')
const navLink = document.querySelector('.nav-links')
tooleMenu.addEventListener('click',()=>{
     navLink.style.visibility = 'visible';

})