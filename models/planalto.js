const Coordenada = require('./coordenada');

class Planalto {

    #bordaInferiorEsquerda;
    #bordaSuperiorDireita;

    constructor(bordaSuperiorDireita) {
        this.#bordaSuperiorDireita = bordaSuperiorDireita;
        this.#bordaInferiorEsquerda= new Coordenada(0, 0);
    }

    getBordaSuperiorDireita() {
        return this.#bordaSuperiorDireita;
    }

    getBordaInferiorEsquerda() {
        return this.#bordaInferiorEsquerda;
    }
}

module.exports = Planalto;