const btn_start = document.getElementById("btn-start")
const box_number = document.getElementById("box-number")
//Seleziono gli elementi della DOM

function random_number(){
//Funzione per la generazione di numeri casuali(da 1 a 99)
    const numeri_generati = []
    //Array dove conservare i numeri generati
    while(numeri_generati.length < 5){
    //Ciclo while eseguito fintantochè array(numeri_generati) non raggiunge lunghezza 5
        let num = Math.floor(Math.random() * 99) + 1
        random_number.push(num)
    }
    return numeri_generati
}

