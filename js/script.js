// Obtenemos referencias a los elementos del DOM
const saludoForm = document.getElementById('saludoForm');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popupMessage');
const closePopupButton = document.getElementById('closePopup');

// Añadimos un "escuchador de eventos" para cuando se envíe el formulario
saludoForm.addEventListener('submit', function(event) {
    // 1. Evitamos que el formulario se envíe de la forma tradicional
    // (lo que recargaría la página)
    event.preventDefault();

    // 2. Obtenemos los valores de los campos de entrada
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;

    // 3. Construimos el mensaje para el pop-up
    const mensaje = `¡Hola ${nombre} ${apellido}, te damos la bienvenida!👋👋`;

    // 4. Mostramos el mensaje en el pop-up
    popupMessage.textContent = mensaje;

    // 5. Hacemos visible el pop-up
    popup.style.display = 'block';

    // Opcional: Limpiar los campos del formulario después de enviar
    saludoForm.reset(); // Esto limpia todos los campos del formulario
});

// Añadimos un "escuchador de eventos" para cerrar el pop-up
closePopupButton.addEventListener('click', function() {
    popup.style.display = 'none'; // Ocultamos el pop-up
});

// Opcional: Cerrar el pop-up si se hace clic fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
});