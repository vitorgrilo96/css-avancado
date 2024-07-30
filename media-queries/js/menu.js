function toggleMenu(){
    const asideMenu = document.getElementById("menu");
    asideMenu.classList.toggle("show");
}

const botaoHamburguer = document.querySelector(".hamburguer");
botaoHamburguer.onclick = toggleMenu;