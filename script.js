document.addEventListener('DOMContentLoaded', function () {
    var openButtons = document.querySelectorAll('.btn');
    var popups = document.querySelectorAll('.popup');
    var closeButtons = document.querySelectorAll('.close');

    openButtons.forEach(function (button, index) {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Empêcher le comportement par défaut du lien
            popups[index].style.display = 'block';
        });
    });

    closeButtons.forEach(function (closeButton, index) {
        closeButton.addEventListener('click', function () {
            popups[index].style.display = 'none';
        });
    });

    // Fermer le pop-up en cliquant en dehors de la fenêtre modale
    window.addEventListener('click', function (event) {
        popups.forEach(function (popup) {
            if (event.target == popup) {
                popup.style.display = 'none';
            }
        });
    });
});
