const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const logo = document.getElementById('logo');
if(bar){
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}

if(logo){
    logo.addEventListener('click', ()=>{
        window.location.replace('./index.html');
    })
}
