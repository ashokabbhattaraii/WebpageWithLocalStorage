const loginBtn = document.getElementById('loginBtn');
const userConatiner = document.getElementById('userConatiner')
const logoutBtn = document.getElementById('logoutBtn')
window.addEventListener('load',(e)=>{
e.preventDefault();
    const status = JSON.parse(localStorage.getItem('checkLogIn'))
    console.log(status)
    const userInfo = status.status;
    console.log(userInfo)
    if(userInfo){
        loginBtn.style.display='none'
        var usernameInfo= document.createElement('P')
        usernameInfo.innerHTML=`${status.username}`
        userConatiner.appendChild(usernameInfo)
        logoutBtn.style.display='flex'
    }
    else if(!userInfo) {
        loginBtn.style.display="block"
        logoutBtn.style.display='none'
    }
    
})
logoutBtn.addEventListener('click',()=>{
    const stats = JSON.parse(localStorage.getItem('checkLogIn'))
    stats.status=false
    localStorage.setItem('checkLogIn',JSON.stringify(stats ))
    console.log(stats)
    window.location.reload();
    logoutBtn.style.display='none'
    loginBtn.style.display='block'
    userConatiner.style.display='none'
})

loginBtn.addEventListener('click',()=>{
    window.location.href='login.html'
})