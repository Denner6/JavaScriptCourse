// IMC = peso / altura^2
function main() {
    const form = document.querySelector("section div form")
    const result = document.querySelector(".result")
    const peso = form.querySelector("#peso");
    const altura = form.querySelector("#altura");
    const checkImc = (imc) =>  {
        if (imc < 18.5 ) return "Abaixo do peso"; 
        if (imc > 18.8 && imc < 24.9) return "Peso Normal";
        if (imc > 25 && imc < 29.9) return "Sobre peso";
        if (imc > 30 && imc < 34.9) return "Obesidade grau 1"; 
        if (imc > 35 && imc < 39.9)return "Obesidade grau 2";
        if (imc > 39.9) return "Obesidade grau 3";
    };
    const setResult = (message, isValid) => {
        const p = document.createElement("p");
        result.innerHTML = "";
        p.innerHTML = message;
        p.classList.add(isValid && "success" || !isValid && "error");
        result.appendChild(p);
    };
    
    const checkWeightAndHeight = (peso, altura) => {
        peso = Number(peso.value);
        altura = Number(altura.value);

        if (!peso || !altura)  {
            setResult("Erro, peso ou altura incorretos", false);
            return false;
        }
        return true;
    }


    function calcIMC(event) {
        event.preventDefault()
        const checaPesoEAltura = checkWeightAndHeight(peso, altura);

        if (checaPesoEAltura) {
            const imc = peso.value / altura.value**2;
            setResult(`Seu IMC é ${imc.toFixed(2)} (${checkImc(imc)})`, true);
        }
    }

    form.addEventListener("submit", calcIMC)
}

main();