const menuMobile=document.querySelector('.mobile-menu')
const menuShow=document.getElementById('menuShow')
const desligar = document.getElementById('desligado')
const ligar = document.getElementById('ligado')

menuShow.addEventListener("click",()=>{
  if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu-black_35dp.svg"; 
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "img/menu-close-black-36dp.svg";
    }  
})

ligar.addEventListener("click",()=>{
    ligar.style.display = "none";
    document.body.style.backgroundColor = `#413F42`;
    desligar.style.display = "block";
})

desligar.addEventListener("click",()=>{
    desligar.style.display = "none";
    document.body.style.backgroundColor = `#fff`;
    ligar.style.display = "block";
})







