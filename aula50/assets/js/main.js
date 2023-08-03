function Calculator() {
    this.display = document.querySelector(".display");
    this.clearBtn = document.querySelector(".btn-clear");
    this.btnNumberClass = "btn-num";

    this.start = () => {
        this.clickButtons();
        this.pressEnter();
    }

    this.clearDisplay  = () => {
        this.display.value = "";
    }

    this.deleteOne = () => {
        this.display.value = this.display.value.slice(0, -1);
    }


    this.performAccount = () => {
        let conta = this.display.value;
        try {
            conta = eval(conta);

            if (!conta) {
                alert("Conta inválida");
                return;
            }

            this.display.value = conta
        }
        catch (e){
            alert("Conta inválida");
            return;
        }
    }

    this.pressEnter = () => {
        this.display.addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
                this.performAccount();
            }
        });
    },

    this.clickButtons = () => {
        document.addEventListener("click", event => {
            const element = event.target;

            if (element.classList.contains(this.btnNumberClass)) {
                this.btnForDisplay(element.innerText);
            }

            if (element === this.clearBtn) this.clearDisplay();

            if (element.classList.contains("btn-del")) this.deleteOne();

            if (element.classList.contains("btn-eq")) this.performAccount();
        });
    }

    this.btnForDisplay = (value) => {
        this.display.value += value;
    }
}


const calculator = new Calculator();
calculator.start();