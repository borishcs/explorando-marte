const Coordenada = require('./coordenada');
const PontosCardeais = require('../enums/pontos-cardeais');
const ComandoParaVirar = require('../enums/comando-para-virar');

class Sonda {

    #coordenada;
    #direcao;

    constructor(coordenada, direcao) {
        this.#coordenada = new Coordenada(coordenada.x, coordenada.y);
        this.#direcao = direcao;
    }

    getCoordenada() {
        return this.#coordenada;
    }

    getDirecao() {
        return this.#direcao;
    }

    moverParaFrente(planalto) {

        switch (this.#direcao) {
            case PontosCardeais.norte:
                if (this.#coordenada.y < planalto.getBordaSuperiorDireita().y)
                    this.#coordenada = new Coordenada(this.#coordenada.x, this.#coordenada.y + 1);
                break;
            case PontosCardeais.leste:
                if (this.#coordenada.x < planalto.getBordaSuperiorDireita().x)
                    this.#coordenada = new Coordenada(this.#coordenada.x + 1, this.#coordenada.y);
                break;
            case PontosCardeais.sul:
                if (this.#coordenada.y > planalto.getBordaInferiorEsquerda().y)
                    this.#coordenada = new Coordenada(this.#coordenada.x, this.#coordenada.y - 1);
                break;
            case PontosCardeais.oeste:
                if (this.#coordenada.x > planalto.getBordaInferiorEsquerda().x)
                    this.#coordenada = new Coordenada(this.#coordenada.x - 1, this.#coordenada.y);
                break;
        }
    }

    girar(comandoParaVirar) {
        if (comandoParaVirar === ComandoParaVirar.esquerda)
            this._girar90GrausEsquerda();
        else if (comandoParaVirar === ComandoParaVirar.direita)
            this._girar90GrausDireita();
    }

    _girar90GrausDireita() {
        switch (this.#direcao) {
            case PontosCardeais.norte:
                this.#direcao = PontosCardeais.leste;
                break;
            case PontosCardeais.leste:
                this.#direcao = PontosCardeais.sul;
                break;
            case PontosCardeais.sul:
                this.#direcao = PontosCardeais.oeste;
                break;
            case PontosCardeais.oeste:
                this.#direcao = PontosCardeais.norte;
                break;
        }
    }

    _girar90GrausEsquerda() {
        switch (this.#direcao) {
            case PontosCardeais.norte:
                this.#direcao = PontosCardeais.oeste;
                break;
            case PontosCardeais.oeste:
                this.#direcao = PontosCardeais.sul;
                break;
            case PontosCardeais.sul:
                this.#direcao = PontosCardeais.leste;
                break;
            case PontosCardeais.leste:
                this.#direcao = PontosCardeais.norte;
                break;
        }
    }
}

module.exports = Sonda;