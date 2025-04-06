function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu-black_35dp.svg"; 
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "img/menu-close-black-36dp.svg";
    }
}


function clicou1(){
    var ligado = document.getElementById('ligado');
    ligado.style.display = "none";
    var desligado = document.getElementById('desligado');
    desligado.style.display = "block";
    document.body.style.backgroundColor = `#413F42`; 
}

function clicou2(){
    var desligar = document.getElementById('desligado');
    desligar.style.display = "none";
    var ligar = document.getElementById('ligado');
    ligar.style.display = "block";
    document.body.style.backgroundColor = `#fff`;
}



