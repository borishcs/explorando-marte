class GerenciadorConsole {

    constructor() {

    }

    async receberBordaSuperiorDireita() {

        const coordenada = await this.receberLinha();
        const arrayCoordenada = coordenada.split(' ');

        return {
            x: arrayCoordenada[0],
            y: arrayCoordenada[1]
        }
    }

    async receberCoordenadaEDirecao() {

        const coordenadaEdirecao = await this.receberLinha();
        const arrayCoordenadaEdirecao = coordenadaEdirecao.split(' ');

        return {
            x: arrayCoordenadaEdirecao[0],
            y: arrayCoordenadaEdirecao[1],
            direcao: arrayCoordenadaEdirecao[2]
        }
    }

    receberLinha() {
        return new Promise((resolve) => {

            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });

            readline.question('', (retorno) => {
                resolve(retorno);
                readline.close();
            });
        });
    }
}

module.exports = GerenciadorConsole;