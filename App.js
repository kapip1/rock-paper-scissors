import { Arena } from './script/Arena.js';
import { Modal } from './script/Modal.js';
export const handtypes = {
    SCISSORS: 'scissors',
    ROCK: 'rock',
    PAPER: 'paper',
};

class App {
    #htmlElements = {
        handPaper: document.querySelector('.hand__paper'),
        handScissors: document.querySelector('.hand__scissors'),
        handRock: document.querySelector('.hand__rock'),
        scoreNumber: document.querySelector('.score__number'),
    };

    #score = 0;

    #arena = null;
    #modal = null;

    #cumpterHandPlay() {
        const handtypes = ['scissors', 'rock', 'paper'];
        return handtypes[Math.floor(Math.random() * handtypes.length)];
    }

    #addEvents() {
        this.#htmlElements.handPaper.addEventListener('click', () =>
            this.#createArena(handtypes.PAPER)
        );
        this.#htmlElements.handScissors.addEventListener('click', () => {
            this.#createArena(handtypes.SCISSORS);
        });
        this.#htmlElements.handRock.addEventListener('click', () => {
            this.#createArena(handtypes.ROCK);
        });
    }
    #createArena(handType) {
        if (this.#arena) this.#arena.clearArena();
        this.#arena = new Arena(handType, this.#cumpterHandPlay());
        this.#arena.init();
        this.#updateScore(this.#arena.result);
    }
    #updateScore(result) {
        switch (result) {
            case 'win':
                this.#score++;
                break;
            case 'lose':
                this.#score--;
                break;
        }
        this.#htmlElements.scoreNumber.textContent = this.#score;
    }

    #createRules() {
        this.#modal = new Modal();
        this.#modal.init();
    }

    init() {
        this.#addEvents();
        this.#createRules();
    }
}

window.onload = function () {
    const app = new App();
    app.init();
};
