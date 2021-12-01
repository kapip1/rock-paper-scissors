export class Modal {
    #htmlElements = {
        rulesButton: document.querySelector('.rules__button'),
        modal: document.querySelector('.modal'),
        modalContainer: document.querySelector('.modal__container'),
        modalButton: document.querySelector('.modal__button--close'),
    };
    #addEvents() {
        this.#htmlElements.rulesButton.addEventListener('click', () => {
            this.#htmlElements.modal.classList.toggle('hide');
        });
        this.#htmlElements.modalButton.addEventListener('click', () => {
            this.#htmlElements.modal.classList.add('hide');
        });
        this.#htmlElements.modal.addEventListener('click', (e) => {
            if (e.target !== this.#htmlElements.modalContainer) {
                this.#htmlElements.modal.classList.add('hide');
            }
        });
    }
    init() {
        this.#addEvents();
    }
}
