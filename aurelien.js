const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const operator = document.querySelector('#operator')
const btn = document.querySelector('button')
const result = document.querySelector("#result")
const arrayInputs = [input1, input2];

const calc = (a, b, op) => {
        if (op == "+") return a + b;    
        else if (op == "-") return a - b;
        else if (op == "*") return a * b;
        else if (op == "/") return a / b;   
    }

const valueChecker = (input) => {
    input.addEventListener('keyup', (e) => {
    if (isNaN(e.key) && input.value !== ""){
        alert("merci de rentrer uniquement un nombre !")
        input.value = "";
        return isComplete = false;
    } 
    return isComplete = true;
})
}

for (const input of arrayInputs) {
    valueChecker(input)
}

btn.addEventListener('click', () => { 
    if (input1.value && input2.value) {
        const a = Number(input1.value);
        const b = Number(input2.value);
        const p = document.createElement("p");
        p.textContent = calc(a, b, operator.value);
        result.append(p);   
    }
})



