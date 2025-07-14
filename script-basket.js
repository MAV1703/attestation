
// не работает

let cards = localStorage.getItem("cards")
const cardsInside = document.querySelector(".cards-inside")

for( let i=0; i<cards.length; i++)
{
    cardsInside.appendChild(cards[i])

}
