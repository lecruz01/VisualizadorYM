// Variables globales
var winWidth = window.innerWidth;

window.onload = bootstrapApp();

// Funcion de inicializacion
function bootstrapApp() {
    var menus = document.getElementsByClassName('menu-item-title');
    for(var i = 0; i < menus.length; i++) {
        menus[i].addEventListener('click', function(ev) {
            toggleMenuItem(ev);
        });
    }
}