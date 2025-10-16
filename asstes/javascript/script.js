const btn_start = document.getElementById("btn-start")
//bottone start per dare inizio al gioco
const box_number = document.getElementById("box-number")
//<div> dove verranno inseriti i numeri generati
const box_input = document.getElementById("box-input")
//<div> dove verranno inseriti gli <input> generati lato javascript
const check_result = document.getElementById("check-results")
//<div> contenete paragrafo nascosto e che accoglierà il bottone di verifica
//Selezione degli elementi della DOM

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

function clear_number(callback){
    box_number.innerHTML = ""

    if(typeof callback === "function"){
    /*tramite callback assicura che la seconda funzione(create_input) si esegue dopo la sparizione dei numeri.
     la condizione controlla che venga passata effettivamente una funzione*/

     callback()
     //Invoca la funzione passata, solo dopo aver terminato la prima funzione

    }
}

function create_input(){
    for(let i = 0; i < 5; i++){
        const input = document.createElement("input")
        //Genera -input(come effettivo nodo della DOM) e lo salva, lato javascript, nella variabile "input"
        input.id = "user-num" + i
        //Associa -id diversi ai diversi -input
        input.type = "number"
        //Definisce il -type del -input
        input.placeholder = "Inserire qui il numero"
        //Definisce -placeholder del -input

        box_input.appendChild(input)
        //Aggiunge il nodo generato (-input) all'interno del <div> dedicato
    }

    const btn_results = document.createElement("button")
    //Genera -button(come effettivo nodo della DOM) e lo salva, lato javascript, nella variabile "btn_results"
    btn_results.id = "btn-check"
    //Associa un -id al -button
    btn_results.type = "button"
    //Associa un -type al -button
    btn_results.classList.add("btn", "btn-light", "mt-3")
    //Definisce classi con le quali il -button deve generarsi
    btn_results.innerText = "Clicca per verifica"
    //Aggiunge testo all'interno del -button

    check_result.appendChild(btn_results)
    //Aggiunge il nodo generato(-button) all'interno del <div> dedicato
}

btn_start.addEventListener("click", ()=>{
    const numeri_generati = random_number()
    //Salva i numeri generati nella variabile "numeri_generati"
    box_number.innerText = numeri_generati

    setTimeout(()=>{
    //Peremtte di eseguire funzioni solo al passaggio di una determinata quantità di tempo
        clear_number(create_input)
        //Prima esegue "clear_number", dopo esegue "create_input"

    },30000)

})



