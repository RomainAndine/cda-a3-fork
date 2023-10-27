const calculate = () => {
    let firstNumber = document.getElementById("value1").value;
    let secondNumber = document.getElementById("value2").value;
    const result = document.getElementById("result-value");
    const operation = document.getElementById("operator-select").value;
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Veuillez entrer des nombres");
    } else {
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
        switch (operation) {
            case "multiply":
                result.innerHTML = firstNumber * secondNumber;
                break;
            case "add":
                result.innerHTML = firstNumber + secondNumber;
                break;
            case "substract":
                result.innerHTML = firstNumber - secondNumber;
                break;
            case "divide":
                if (secondNumber == 0) {
                    alert("Division par zéro impossible");
                } else {
                    result.innerHTML = firstNumber / secondNumber;
                }
                break;
        }
    }

}

document.getElementById("calculate").addEventListener("click", calculate);

