import { handtypes } from './../App.js';

export class Arena {
    constructor(playerHand, computerHand) {
        this.playerHand = playerHand;
        this.computerHand = computerHand;
        this.result = null;
    }
    #htmlElements = {
        gameLobby: document.querySelector('.game__lobby'),
        gameArena: document.querySelector('.game__arena'),
        playerHand: document.querySelector('.player__hand'),
        computerHand: document.querySelector('.computer__hand'),
        resultTitle: document.querySelector('.result__title'),
        resultButton: document.querySelector('.result__button'),
    };
    init() {
        this.#hideLobby();
        this.#createArena();
        this.#getResult();
        this.#updateText();
    }

    #hideLobby() {
        this.#htmlElements.gameLobby.classList.add('hide');
    }
    #createArena() {
        this.#htmlElements.gameArena.classList.remove('hide');

        this.#htmlElements.resultButton.addEventListener('click', () => {
            this.#htmlElements.gameArena.classList.add('hide');
            this.#htmlElements.gameLobby.classList.remove('hide');
        });

        this.#htmlElements.playerHand.classList.add(this.playerHand);
        this.#htmlElements.computerHand.classList.add(this.computerHand);
    }
    #getResult() {
        if (this.playerHand === this.computerHand) {
            this.result = 'draw';
            return;
        }
        if (
            (this.playerHand === handtypes.ROCK &&
                this.computerHand === handtypes.SCISSORS) ||
            (this.playerHand === handtypes.SCISSORS &&
                this.computerHand === handtypes.PAPER) ||
            (this.playerHand === handtypes.PAPER &&
                this.computerHand === handtypes.ROCK)
        ) {
            this.result = 'win';
            return;
        }
        this.result = 'lose';
        return;
    }
    #updateText() {
        switch (this.result) {
            case 'win':
                this.#htmlElements.resultTitle.textContent = 'win';
                break;
            case 'lose':
                this.#htmlElements.resultTitle.textContent = 'lose';
                break;
            case 'draw':
                this.#htmlElements.resultTitle.textContent = 'draw';
                break;
        }
    }

    clearArena() {
        this.#htmlElements.resultButton.removeEventListener('click', () => {
            this.#htmlElements.gameArena.classList.add('hide');
            this.#htmlElements.gameLobby.classList.remove('hide');
        });
        this.#htmlElements.playerHand.classList.remove(this.playerHand);
        this.#htmlElements.computerHand.classList.remove(this.computerHand);
    }
}
