function createCalculator() {
    return {
        display: document.querySelector(".display"), 
        clearBtn: document.querySelector(".btn-clear"),
        btnNumberClass: "btn-num",

        start () {
            this.clickButtons();
            this.pressEnter();
        },

        clearDisplay() {
            this.display.value = "";
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },


        performAccount() {
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
            }
        },

        pressEnter() {
            this.display.addEventListener("keyup", (event) => {
                if (event.keyCode === 13) {
                    this.performAccount();
                }
            });
        },

        clickButtons() {
            document.addEventListener("click", event => {
                const element = event.target;

                if (element.classList.contains(this.btnNumberClass)) {
                    this.btnForDisplay(element.innerText);
                }

                if (element === this.clearBtn) this.clearDisplay();

                if (element.classList.contains("btn-del")) this.deleteOne();

                if (element.classList.contains("btn-eq")) this.performAccount();
            });
        },

        btnForDisplay(value) {
            this.display.value += value;
        },
    };
}


const calculator = createCalculator();
calculator.start();

// block 13 58:37