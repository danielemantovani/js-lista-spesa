// test
// alert ("Lista della spesa")

const shoppingList = ["Latte", "Biscotti", "Pasta", "Formaggio"];

// Prelevo la classe dell' "ul" in cui dovrò andare ad insierire gli "li"
// Lo prelevo fuori dal ciclo for per alleggerire il codice, nel caso in cui l'avessi inserito all'interno del ciclo for sarebbe stato eseguito 4 volte (nr di elementi dell'array)
let listElem = document.querySelector(".shopping-list");

let i = 0

//apro ciclo while
while (i < shoppingList.length) {

    //creo variabile per far visualizare gli elementi dell'array
    const curItem = shoppingList[i];
    console.log (curItem)

    //creo l'elemento html "li"
    const listItemElem = document.createElement("li"); 
    //inserisco gli item dell'array all'interno del contenuto html creato sopra (li)
    listItemElem.innerHTML = curItem;
    console.log(listItemElem);

    //aggiungo in html gli li all'elemento padre ul
    listElem.append(listItemElem);

    i++
}

