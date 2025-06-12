document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.doenca, .doencaE').forEach(function(card) {
        card.addEventListener('click', function() {
            document.getElementById('modal-titulo').textContent = card.querySelector('h4').textContent;
            document.getElementById('modal-descricao').textContent = card.querySelector('p').textContent;
            document.getElementById('modal-hepatite').style.display = 'flex';
        });
    });
    document.querySelector('.close-modal').onclick = function() {
        document.getElementById('modal-hepatite').style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            document.getElementById('modal-hepatite').style.display = 'none';
        }
    };
});