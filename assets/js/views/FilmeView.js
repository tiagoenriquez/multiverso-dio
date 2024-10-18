export default function FilmeView(filme, filmes) {
    let html = `
    <div class="row filme-body" style="background-image: url('${filme.imagemDeFundo}');">
        <aside class="column filme-menu">
    `;
    filmes.forEach((filmePercorrido) => {
        html += `
            <a class="${filmePercorrido === filme ? 'checked-filme-a' : 'unchecked-filme-a'}">
                ${filmePercorrido.id.toString().padStart(2, '0')}
            </a>
    `;
    });
    html += `</aside>
        <main class="column-left filme-main">
            <div class="row-left logo">
                <img src="${filme.logotipo}" alt="Filme ${filme.id} de ${filme.ator.nome}" class="logo-img"/>
            </div>
            <div class="column-left info">
                <div class="row-left">
                    <div class="header-info">Ano: ${filme.ano}</div>
                    <div class="header-info">Diretor: ${filme.diretor}</div>
                </div>
                <p>${filme.sinopse}</p>
            </div>
            <button class="row-left">
                <img src="./assets/img/play.png" alt="Play" class="button-img" />
                Assistir trailer
            </button>
        </main>
    </div>
    `;
    document.getElementsByTagName('body')[0].innerHTML = html;
}