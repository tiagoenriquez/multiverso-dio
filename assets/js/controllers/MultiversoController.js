import PrincipalView from "../views/PrincipalView.js";
import atores from "../datas/atores.js";
import FilmeView from "../views/FilmeView.js";
import filmes from "../datas/filmes.js";

export default class MultiversoController {
    iniciar = () => {
        PrincipalView(atores);
    }

    mostrarPrimeiroFilme = (ator) => {
        const filmesDoAtor = filmes.filter(filme => filme.ator === ator);
        this.mostrarFilme(filmesDoAtor[0], filmesDoAtor);
    }

    mostrarFilme = (filme, filmesDoAtor) => {
        FilmeView(filme, filmesDoAtor);
    }
}