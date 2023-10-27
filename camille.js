var valeur1=document.querySelector("#valeur1")
var valeur2=document.querySelector("#valeur2")
var button= document.querySelector('button')
var select= document.querySelector("#selectOperateur")
var resultat= document.querySelector('#calcul')
var p=document.createElement('p')
resultat.append(p)
button.addEventListener('click', ()=>{
    var v1= Number(valeur1.value)
    var v2=Number(valeur2.value)
    var op=select.value
   if(op=="+"){
    p.innerHTML=v1+v2
   }
   else if(op=="-"){
    p.innerHTML=v1-v2
   }
   else if(op=="*"){
    p.innerHTML=v1*v2
   }
   else{
    p.innerHTML=v1/v2
   }
})

var inserer=document.querySelector("#inserer")
var text=document.querySelector("#texte")
var input=document.querySelectorAll("input")
inserer.addEventListener("click", ()=>{
    input.forEach(element => {
       console.log(element.value); 
 
    })}
)
