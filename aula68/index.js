// CPF verifier
// 705.484.450-52 111.111.111-11
const cpf = "705.484.450-52";
const cpfWithoutDots = cpf.replace(/\D+/g, "");

let secondaryCpf = Array.from(cpfWithoutDots).slice(0, -2);

const checkFormula = formula => formula > 9 ? 0 : formula;
const formula = sum => checkFormula(11 - (sum % 11));
const checkSequence = (cpf) => cpf[0].repeat(cpf.length) === cpf;

const validateCpf = (cpf) => {
    return cpf === cpfWithoutDots && !checkSequence(cpf) ? "CPF Válido" : "CPF Inválido";
};

const calc = (counter, cpfArray) => {
    const digit = cpfArray
        .map(value => {
            value = Number(value) * counter;
            counter--;
            return value;
        })
        .reduce((accumulator, value) => accumulator + value, 0);

    secondaryCpf.push(String(formula(digit)));
}
    
calc(10, secondaryCpf);
calc(11, secondaryCpf);

secondaryCpf = secondaryCpf.join("");

console.log(validateCpf(secondaryCpf));

