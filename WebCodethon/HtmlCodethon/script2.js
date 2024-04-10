// Obtener la altura de la pantalla
screen.onload = function () {
    var screenHeight = window.innerHeight;

    // Seleccionar el elemento con la clase 'box'
    var box = document.querySelector('.fondo-naranja');

    // Modificar el estilo del elemento en función de la altura de la pantalla
    box.style.height = screenHeight - 3 + 'px';

}





