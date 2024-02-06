//  create a modal for various function
class Modal {
    constructor() {
        this._modal = document.querySelector("#modal");

        this._modalBtn = document.querySelector("#modal-btn");

        this.addEventListeners();
    }
    //  event listeners function
    addEventListeners()
    {
        //  declare and initialize all event operations
        this._modalBtn.addEventListener("click", this.open.bind(this));

        this._modal.addEventListener("click", this.outsideClick.bind(this));

        document.addEventListener("closemodal", () => this.close());
    }

    //  open modal function
    open() {
        this._modal.style.display = "block";
    }
    //  close modal 
    close() {
        this._modal.style.display = "none";
    }

    //  create a function to find click operations in the modal ]
    outsideClick(e) {
        if (e.target === this._modal) {
            this.close();
        }
    }
}

//  export modal
export default Modal;
