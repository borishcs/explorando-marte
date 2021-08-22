class Coordenada {

    #x;
    #y;

    constructor(x, y) {

        this.#x = Number(x);
        this.#y = Number(y);
    }

    getCoordenadas() {
        return {
            x: this.#x,
            y: this.#y
        }
    }

    get x() { return this.#x }

    get y() { return this.#y }
}

module.exports = Coordenada;