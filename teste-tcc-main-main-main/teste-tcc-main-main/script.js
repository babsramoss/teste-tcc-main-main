searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}
let LoginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () =>{
LoginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
LoginForm.classList.remove('active');
}
  
window.onscroll = () =>{

    searchForm.classList.remove('active');

if(window.scrollY > 80){
document.querySelector('.header .header-2').classList.add('active');    
}else{
    document.querySelector('.header .header-2').classList.remove('active');    
 }

}
window.onload = () =>{
    if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');    
    }else{
        document.querySelector('.header .header-2').classList.add('active');    
     }
    
    }
















//msdksmakdmsakdmsak
