import MultiversoController from "../controllers/MultiversoController.js";

export default function PrincipalView(atores) {
    function mostrarFilme(ator) {
        new MultiversoController().mostrarPrimeiroFilme(ator);
    }

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

    atores.forEach((ator, index) => {
        document.getElementsByClassName('main-a')[index].addEventListener('click', () => {
            mostrarFilme(ator);
        })
    });
}