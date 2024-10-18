import Filme from "../models/Filme.js";
import atores from "./atores.js";

const filmes = [
    new Filme(
        1,
        atores[0],
        3,
        2012,
        'Mark Webb',
        'Peter Parker está tentando saber mais sobre sua origem. Ele encontra uma pasta que pertenceu ao seu pai e ' + 
            'quer descobrir por que seus pais desapareceram. Sua busca o leva a Oscorp e ao dr. Curt Connors, que ' + 
            'tem como alterego o letal Lagarto.',
        'amazing-spiderman'
    ),
    new Filme(
        2,
        atores[0],
        3,
        2014,
        'Mark Webb',
        'O jovem Peter Parker está fascinado com as habilidades que adquiriu como Homem-Aranha. Agora, ele ' + 
            'precisa lidar com dois problemas: o retorno de um velho amigo, Harry Osborn, e a chegada de um ' + 
            'vilão mais forte e poderoso, Electro.',
        'amazing-spiderman2'
    ),
    new Filme(
        1,
        atores[1],
        3,
        2002,
        'Sam Raimi',
        'Depois de ser picado por uma aranha geneticamente modificada em uma demonstração científica, o jovem ' +
            'nerd Peter Parker ganha superpoderes. Inicialmente, ele pretende usá-los para para ganhar dinheiro, ' +
                'adotando o nome de Homem-Aranha e se apresentando em lutas de exibição. Porém, ao presenciar o ' +
                'assassinando de seu tio Ben e sentir-se culpado, Peter decide não mais usar seus poderes para ' +
                'proveito próprio e sim para enfrentar o mal, tendo como seu primeiro grande desafio o psicótico ' +
                'Duende Verde.',
        'spiderman'
    ),
    new Filme(
        2,
        atores[1],
        3,
        2004,
        'Sam Raimi',
        'O Dr. Otto Octavius é transformado em Doutor Octopus quando uma falha em uma experiência de fusão ' +
            'nuclear resulta em uma explosão que mata sua esposa. Ele culpa o Homem-Aranha pelo acidente e ' +
            'deseja vingança. Enquanto isso, o alter ego do herói, Peter Parker, perde seus poderes. Para ' +
            'complicar as coisas, o seu melhor amigo odeia o Homem-Aranha e sua amada fica noiva..',
        'spiderman2'
    ),
    new Filme(
        3,
        atores[1],
        3,
        2007,
        'Sam Raimi',
        'O relacionamento entre Peter Parker e Mary Jane parece estar dando certo, mas outros problemas começam ' +
            'a surgir. A roupa de Homem-Aranha torna-se preta e acaba controlando Peter - apesar de aumentar ' +
            'seus poderes, ela revela e amplia o lado obscuro de sua personalidade. Com isso, os vilões Venom e ' +
            'Homem-Areia tentam destruir o herói..',
        'spiderman3'
    ),
    new Filme(
        1,
        atores[2],
        4,
        2017,
        'Jon Watts',
        'Depois de lutar ao lado dos Vingadores, chegou a hora do jovem Peter Parker voltar para casa em Nova ' +
            'York ao lado de sua tia May. Sob o olhar atento do mentor Tony Stark, Peter começa a abraçar sua ' +
            'nova identidade como Homem-Aranha e combate diariamente pequenos crimes nas redondezas. Ele ' +
            'acredita que encontrou a missão de sua vida quando o terrível vilão Abutre surge ameaçando a ' +
            'cidade. O problema é que a tarefa não será tão fácil como ele imaginava.',
        'spiderman'
    ),
    new Filme(
        2,
        atores[2],
        0,
        2019,
        'Jon Watts',
        'Peter Parker está em uma viagem de duas semanas pela Europa, ao lado de seus amigos de colégio, quando ' +
            'é surpreendido pela visita de Nick Fury. Convocado para mais uma missão heroica, ele precisa ' +
            'enfrentar vários vilões que surgem em cidades-símbolo do continente, como Londres, Paris e Veneza, ' +
            'e também a aparição do enigmático Mysterio..',
        'spiderman2'
    ),
    new Filme(
        3,
        atores[2],
        0,
        2021,
        'jon Watts',
        'Pela primeira vez, o Homem-Aranha é desmascarado, o que não o deixa separar a vida pessoal da atuação ' +
            'como um dos maiores super-heróis do mundo. Peter Parker pede ajuda ao Doutor Estranho, mas os ' +
            'efeitos de mexer com as lógicas do Bruno Dórea podem ser catastróficos. As coisas complicam e muito ' +
            'com a chegada de vilões do multiverso..',
        'spiderman3'
    )
];

export default filmes;