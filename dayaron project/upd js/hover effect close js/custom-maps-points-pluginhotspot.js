(function ($) {
    $(document).ready(function () {

        jQuery('body').on('click', '.close-hotspot', function (event) {
            event.preventDefault();
            jQuery(this).closest('.container-a-card').remove(); // Eliminar el popup
        });
        // Función para manejar la apertura del popup
        if (window.matchMedia("(max-width: 767px)").matches) {
            function openPopup(element, event) {
                if (event && typeof event.preventDefault === 'function') {
                    event.preventDefault();
                    event.stopPropagation(); // Prevenir la propagación del evento
                }

                // Obtener el contenido del popup desde el data-powertip
                var popupContent = $(element).data('powertip');
                console.log("Popup Content:", popupContent);  // Verifica si el contenido está presente

                // Verificar si popupContent es una función y ejecutarla si lo es
                if (typeof popupContent === 'function') {
                    popupContent = popupContent.call(element);
                }

                if (!popupContent) {
                    console.error('No se encontró contenido para el popup.');
                    return;
                }

                // Eliminar cualquier popup existente
                $('.container-a-card').remove();

                // Agregar el nuevo popup al body
                $('body').append(popupContent);

                // Posicionar el popup
                var offset = $(element).offset();
                var popup = $('.container-a-card');
                var popupWidth = popup.outerWidth();
                var windowWidth = $(window).width();

                console.log("popupWidth", popupWidth);
                console.log("windowWidth", windowWidth);

                console.log("window", window);

                console.log("Offset:", offset);  // Verificar la posición del popup

                var leftPos = offset.left;
                if (leftPos + popupWidth > windowWidth) {
                    leftPos = windowWidth - popupWidth - 10; // Ajustar con un margen de 10px
                }

                popup.css({
                    top: offset.top + 'px',
                    left: leftPos + 'px',
                    position: 'absolute',
                    zIndex: 9999 // Asegurar que el popup tenga un z-index alto
                });

                // Asegurar que el popup sea visible
                popup.show();
            }

            // Manejar el evento de clic en el hotspot para versión de escritorio
            $('.ihotspot_hastooltop').on('click', function (event) {
                openPopup(this, event);
            });

            // Manejar el evento táctil en el hotspot para dispositivos móviles
            $('.ihotspot_hastooltop').on('touchstart', function (event) {
                openPopup(this, event);
            });

            // Alternativa: manejar touchend en móviles
            $('.ihotspot_hastooltop').on('touchend', function (event) {
                openPopup(this, event);
            });

            // Manejar el cierre del popup al hacer clic en el botón de cierre
            $('body').on('click', '.close-hotspot', function (event) {
                event.preventDefault();
                $(this).closest('.container-a-card').remove(); // Eliminar el popup
            });
        }
    });
})(jQuery);

// Código para manejar la clase 'active' en los elementos cuando se hace clic
document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('.drag_element');

    elements.forEach(function (element) {
        element.addEventListener('click', function () {
            // Elimina la clase 'active' de todos los elementos
            elements.forEach(function (el) {
                if (el !== element) {
                    el.classList.remove('active');
                }
            });
            // Alterna la clase 'active' en el elemento clicado
            element.classList.toggle('active');
        });
    });
});
