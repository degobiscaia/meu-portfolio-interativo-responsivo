const menuMobile=document.querySelector('.mobile-menu');
const menuShow=document.getElementById('menuShow');
const desligar = document.getElementById('desligado');
const ligar = document.getElementById('ligado');
const setaDireita = document.getElementById('seta-direita');
const setaEsquerda = document.getElementById('seta-esquerda');
const projeto1 = document.getElementById('projeto-1');
const projeto2 = document.getElementById('projeto-2');

menuShow.addEventListener("click",()=>{
  if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu-black_35dp.svg"; 
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "img/menu-close-black-36dp.svg";
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

setaDireita.addEventListener("click",()=>{
    projeto1.style.display = "none";
    projeto2.style.display = "flex";
});

setaEsquerda.addEventListener("click",()=>{
    projeto1.style.display = "flex";
    projeto2.style.display = "none";
}); 






