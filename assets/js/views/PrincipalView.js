import MultiversoController from "../controllers/MultiversoController.js";

export default function PrincipalView(atores) {
    let html = `
    <div class="main-body">
        <nav class="row main-nav">
    `;
    atores.forEach((ator) => {
        html += `
            <a href="#" class="main-a">${ator.nome.toUpperCase()}</a>
        `;
    });
    html += `
        </nav>
        <main class="row main">
        `;
    atores.forEach((ator) => {
        html += `
        <div id="ator-${ator.id}" class="actor" style="background-image: url(${ator.fundoPrincipal});">
            <img src="${ator.foto}" alt="${ator.nome}" class="actor-photo">
            <p class="actor-name">${ator.nome.toUpperCase()}</p>
        </div>
        `;
    });
    html += `
        </main>
    </div>
    `;
    document.getElementsByTagName('body')[0].innerHTML = html;
}

const mainAElements = document.getElementsByClassName('main-a');

for (let i = 0; i < mainAElements.length; i++) {
    const element = mainAElements[i];
    element.addEventListener('click', () => {
        new MultiversoController().mostrarPrimeiroFilme(element.textContent);
    });
}