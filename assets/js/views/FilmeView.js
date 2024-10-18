import MultiversoController from "../controllers/MultiversoController.js";

export default function FilmeView(filme, filmes) {
    let html = `
    <div id="filme-body" class="row filme-body" style="background-image: url('${filme.imagemDeFundo}');">
        <video id="video" muted>
            <source src="${filme.video}" type="video/mp4" class="video-source">
        </video>
        <aside class="column filme-menu">
            <a id="reset" class="unchecked-filme-a filme-a column">X</a>
    `;
    filmes.forEach((filmePercorrido) => {
        html += `
            <a
                class="${filmePercorrido === filme ? 'checked-filme-a' : 'unchecked-filme-a'} filme-a column"
                id="filme-${filmePercorrido.id}"
            >
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
            <button id="video-button" class="row-left">
                <img src="./assets/img/play.png" alt="Play" class="button-img" />
                Assistir trailer
            </button>
            <div class="galery">
    `;
    filme.imagensNaGaleria.forEach((imagem, index, imagens) => {
        html += `
                <img
                    src="${imagem}"
                    alt="imagem ${index + 1} do filme ${filme.id + 1} de ${filme.ator.nome}"
                    class="image-of-galery"
                    style="width: calc(80% / ${imagens.length})"
                />
        `;
    });
    html += `
            </div>
        </main>
    </div>
    `;
    document.getElementsByTagName('body')[0].innerHTML = html;

    document.getElementById('reset').addEventListener('click', () => {
        location.reload();
    });

    filmes.forEach((filme, array = filmes) => {
        document.getElementById(`filme-${filme.id}`).addEventListener('click', () => {
            new MultiversoController().mostrarFilme(filme, filmes);
        });
    });

    document.getElementById('video-button').addEventListener('click', () => {
        const video = document.getElementById('video');
        video.style.height = '100vh';
        video.style.width = '100vw';
        video.play();
        document.getElementById('filme-body').style.backgroundImage = '';
    });
}