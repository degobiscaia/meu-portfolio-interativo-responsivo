const menuMobile=document.getElementById('menu-mobile');
const menuShow = document.querySelector('.open');
const desligar = document.getElementById('desligado');
const ligar = document.getElementById('ligado');


menuShow.addEventListener("click",()=>{
    if(menuMobile.style.display === "block"){
      document.getElementById('icon').src = "img/menu-32.png";
      menuMobile.style.display = "none";
    } else{
      document.getElementById('icon').src = "img/close-32.png";
      menuMobile.style.display = "block";
    }
});

ligar.addEventListener("click",()=>{
    ligar.style.display = "none";
    document.body.style.backgroundColor = `#413F42`;
    desligar.style.display = "block";
});

desligar.addEventListener("click",()=>{
    desligar.style.display = "none";
    document.body.style.backgroundColor = `#fff`;
    ligar.style.display = "block";
});









