const infoHepatites = {
    A: {
        titulo: "Hepatite A",
        descricao: `
            <b>Prevenção:</b> Lavar bem as mãos, consumir água tratada, higienizar alimentos.<br>
            <b>Vacina:</b> Existe vacina eficaz e disponível no SUS.<br>
            <b>Tratamento:</b> Não há tratamento específico, repouso e hidratação são recomendados.<br>
            <b>Curiosidade:</b> Não evolui para forma crônica.
        `
    },
    B: {
        titulo: "Hepatite B",
        descricao: `
            <b>Prevenção:</b> Uso de preservativos, não compartilhar objetos cortantes, vacinação.<br>
            <b>Vacina:</b> Disponível no SUS.<br>
            <b>Tratamento:</b> Casos agudos geralmente não precisam de tratamento específico. Casos crônicos podem ser tratados com antivirais.<br>
            <b>Curiosidade:</b> Pode evoluir para cirrose e câncer de fígado.
        `
    },
    C: {
        titulo: "Hepatite C",
        descricao: `
            <b>Prevenção:</b> Não compartilhar objetos cortantes, cuidado em procedimentos invasivos.<br>
            <b>Vacina:</b> Não existe vacina.<br>
            <b>Tratamento:</b> Medicamentos antivirais podem curar mais de 95% dos casos.<br>
            <b>Curiosidade:</b> Principal causa de transplante de fígado no Brasil.
        `
    },
    D: {
        titulo: "Hepatite D",
        descricao: `
            <b>Prevenção:</b> Vacinação contra hepatite B previne a D.<br>
            <b>Vacina:</b> Não existe vacina específica para D.<br>
            <b>Tratamento:</b> Difícil, pode ser usado interferon em alguns casos.<br>
            <b>Curiosidade:</b> Só ocorre em quem já tem hepatite B.
        `
    },
    E: {
        titulo: "Hepatite E",
        descricao: `
            <b>Prevenção:</b> Saneamento básico, higiene alimentar.<br>
            <b>Vacina:</b> Não disponível no Brasil.<br>
            <b>Tratamento:</b> Geralmente não necessita tratamento específico.<br>
            <b>Curiosidade:</b> Pode ser grave em gestantes.
        `
    }
};

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