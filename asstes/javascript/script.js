const btn_start = document.getElementById("btn-start")
const box_number = document.getElementById("box-number")
//<div> dove verranno inseriti i numeri generati
const box_input = document.getElementById("box-input")
//<div> dove verranno inseriti gli <input> geenrati lato javascript
//Seleziono gli elementi della DOM

function random_number(){
//Funzione per la generazione di numeri casuali(da 1 a 99)
    const numeri_generati = []
    //Array dove conservare i numeri generati
    while(numeri_generati.length < 5){
    //Ciclo while eseguito fintantochè array(numeri_generati) non raggiunge lunghezza 5
        let num = Math.floor(Math.random() * 99) + 1
        numeri_generati.push(num)
    }
    return numeri_generati.join("--")
}

function clear_number(){
    box_number.innerHTML = ""
}

function create_input(){
    for(let i = 0; i < 5; i++){
        const input = document.createElement("input")
        input.id = "user-num" + i
        input.type = "number"
        input.placeholder = "Inserire qui il numero"

        box_input.appendChild(input)
    }
}


    



