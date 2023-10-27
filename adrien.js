var text1 = document.querySelector('#text1')
var text2 = document.querySelector('#text2')
var button = document.querySelector('button')
var comboBox = document.querySelector('#select')
button.addEventListener('click', calcule)


function calcule(){
var result 
if (isNaN(text1.value) == true || isNaN(text2.value) == true){
    alert('is not number')
}else {
    var num1 = Number(text1.value)
    var num2 = Number(text2.value)
    if (comboBox.value == '-'){
        result = num1 - num2
    } else if (comboBox.value == '+'){
        result = num1 + num2
    }else if (comboBox.value == '/'){
        result = num1 / num2
    }else if (comboBox.value == '*'){
        result = num1 * num2
    }
}

text1.value =''
text2.value =''
var p = document.querySelector('p')
p.innerHTML =  result
}