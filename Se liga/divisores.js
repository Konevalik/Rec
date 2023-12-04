const frm = document.querySelector("form")
const resp = document.querySelector ("h3")

//ouvinte
frm.addEventListener("submit", (e) => { 
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    let reposta= " " //não precia verificar se é ivisivel por 1

    for(let i = 1; i <= num/2; i++){  //não precisa copar mais que a metade do numero.
if (num % i == 0){
    resposta = reposta + i + ","
    
    }
   }
  resp.innerText = divisores de ${num}: ${respota}${num}
})