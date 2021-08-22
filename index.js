const InstrucoesSonda = require('./enums/instrucoes-sonda');
const GerenciadorConsole = require('./helpers/gerenciador-console');
const Coordenada = require('./models/coordenada');
const Planalto = require('./models/planalto');
const Sonda = require('./models/sonda');

const gerenciadorConsole = new GerenciadorConsole();

explorarMarte();

async function explorarMarte() {

    const bordaSuperiorDireita = await gerenciadorConsole.receberBordaSuperiorDireita();

    const planalto = new Planalto(bordaSuperiorDireita);

    const sondas = await getSondas(planalto);

    exibirResultado(sondas);

}

function exibirResultado(sondas) {

    sondas.forEach(sonda => {
        const coordenada = sonda.getCoordenada();
        const direcao = sonda.getDirecao();

        console.log(`${coordenada.x} ${coordenada.y} ${direcao}`);
    });
}

async function getSondas(planalto) {

    const sondas = [];

    //Recebe coordenada inicial e instruções de todas as sondas
    let novaSonda;
    do {

        novaSonda = null;

        const { x, y, direcao, instrucoes } = await receberInputSonda();

        const coordenada = new Coordenada(x, y);

        if (coordenada && instrucoes) {

            novaSonda = new Sonda(coordenada, direcao);
            processaInstrucoesSonda(novaSonda, instrucoes, planalto);
            sondas.push(novaSonda);
        }

    } while (novaSonda);

    return sondas;
}

function processaInstrucoesSonda(sonda, instrucoes, planalto) {

    [...instrucoes].forEach(instrucao => {

        switch (instrucao) {
            case InstrucoesSonda.virarDireita:
            case InstrucoesSonda.virarEsquerda:
                sonda.girar(instrucao);
                break;
            case InstrucoesSonda.moverParaFrente:
                sonda.moverParaFrente(planalto);
                break;
        }
    });
}

async function receberInputSonda() {

    const coordenadaEDirecao = await gerenciadorConsole.receberCoordenadaEDirecao();
    const instrucoes = await gerenciadorConsole.receberLinha();

    return {
        ...coordenadaEDirecao,
        instrucoes
    }
}