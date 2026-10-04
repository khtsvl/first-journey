class Modal {
    constructor(id) {
        this.modal = document.getElementById(id);
        this.overlay = document.getElementById("overlay");
        this.closeButton = this.modal.querySelector(".modal__close");

        this.listenClose();
        this.listenEscape();
    }

    open() {
        this.modal.style.display = "block";
        this.overlay.style.display = "block";
    }

    close() {
        this.modal.style.display = "none";
        this.overlay.style.display = "none";
    }

    isOpen() {
        return this.modal.style.display === "block";
    }

    listenClose() {
        this.closeButton.addEventListener("click", () => {
            this.close();
        });
    }

    listenEscape() {
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && this.isOpen()) {
                this.close();
            }
        });
    }
}

export default Modal;