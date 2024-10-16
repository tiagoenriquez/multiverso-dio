export default class Filme {
    id;
    ator;
    imagensNaGaleria;
    imagemDeFundo;
    logotipo;
    ano;
    diretor;
    sinopse;
    video;

    constructor(id, ator, imagensNaGaleria, ano, diretor, sinopse, video) {
        this.id = id;
        this.ator = ator;
        this.ano = ano;
        this.diretor = diretor;
        this.sinopse = sinopse;
        this.adicionarImagensNaGaleria(imagensNaGaleria);
        this.adicionarImagensNaGaleria();
        this.obterImagemDeFundo();
        this.obterLogotipo();
        this.obterVideo(video);
    }

    adicionarImagensNaGaleria = (imagensNaGaleria) => {
        for (let i = 0; i < imagensNaGaleria; i++) {
            let imagem = `./assets/img/${this.ator.nomeAmigavel}/movie-${this.id.toString().padStart(2, '0')}`;
            imagem += `/gallery/image-${i.toString().padStart(2, '0')}.png`;
            this.imagensNaGaleria.push(imagem);
        }
    }

    obterImagemDeFundo = () => {
        this.imagemDeFundo = `./assets/img/${this.ator.nomeAmigavel}/movie-${this.id.toString().padStart(2, '0')}`;
        this.imagemDeFundo += `/background.png`;
    }

    obterLogotipo = () => {
        this.logotipo = `./assets/img/${this.ator.nomeAmigavel}/movie-${this.id.toString().padStart(2, '0')}`;
        this.logotipo += `/logo.png`;
    }

    obterVideo = (video) => {
        this.video = `./assets/videos/${video}-${this.ano}-trailer.mp4`;
    }
}