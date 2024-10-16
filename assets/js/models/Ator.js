export default class Ator {
    nome;
    nomeAmigavel;
    id;
    fundoPrincipal;
    foto;

    constructor(nome, id) {
        this.nome = nome;
        this.id = id;
        this.amigarNome();
        this.obterFundoPrincipal();
        this.obterFoto();
    }

    amigarNome = () => {
        this.nomeAmigavel = `spiderman-${this.nome.split(' ')[0].toLowerCase()}`;
    }

    obterFundoPrincipal = () => {
        this.fundoPrincipal = `./assets/img/pic-sm-bg-${this.id.toString().padStart(2, '0')}.jpg`;
    }

    obterFoto = () => {
        this.foto = `./assets/img/spider-man-${this.id.toString().padStart(2, '0')}.png`;
    }
}