const btn = document.getElementById("calcul");
const resultDIV = document.getElementById("result");

btn.addEventListener("click", () => {
  let value1 = Number(document.getElementById("value1").value);
  let value2 = Number(document.getElementById("value2").value);
  let operator = document.getElementById("operator").value;

  if (!value1 || !value2 || !operator) {
    alert("Il manque des valeurs");
  } else {
    let p = document.createElement("p");
    p.textContent = calculer(value1, operator, value2);
    resultDIV.append(p);
  }
});

function calculer(a, operator, b) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    if (b !== 0) {
      return a / b;
    } else {
      return "Zéro impossible";
    }
  }
}
