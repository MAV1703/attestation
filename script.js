const notificationSec = document.querySelector("#notification-sec")
const notificationMin = document.querySelector("#notification-min")
const notificationHours = document.querySelector("#notification-hours")
const notificationDays = document.querySelector("#notification-days")

//таймер: секунды
        const timeouSec = setInterval(() => {
            let value = notificationSec.innerHTML
            value = value - 1
            notificationSec.innerHTML = value
            if (value == 0){
                notificationSec.innerHTML = 59
            }
        }, 1000)

//таймер: минуты

          const timeoutMin = setInterval(() => {
            let value = notificationMin.innerHTML
            value = value - 1
            notificationMin.innerHTML = value
            if (value == 0){
                notificationMin.innerHTML = 59
            }
        }, 60000)

//таймер: часы

          const timeoutHours = setInterval(() => {
            let value = notificationHours.innerHTML
            value = value - 1
            notificationHours.innerHTML = value
            if (value == 0){
                notificationHours.innerHTML = 23
            }
        }, 3600000)

//таймер: дни

          const timeoutDays = setInterval(() => {
            let value = notificationDays.innerHTML
            value = value - 1
            notificationDays.innerHTML = value
            if (value == 0){
                notificationDays.innerHTML = 0
            }
        }, 18000000)
        
//бургерное меню
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#menu-close-btn")
const menu = document.querySelector(".menu")

menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle("menu-opened")

})

closeBtn.addEventListener("click", ()=>{
    menu.classList.remove("menu-opened")
})




//форма обратной связи
const footerBtn = document.querySelector(".footer__btn")
const contactForm = document.querySelector(".contact")

footerBtn.addEventListener("click", ()=> {
    contactForm.classList.toggle("contact")

})


//кнопка избранное

    let favoriteIcons = document.querySelectorAll(".favorite-icon")
    favoriteIcons.forEach ((element) => {element.addEventListener("click", ()=>{
    element.classList.toggle("favorite-icon")})})

    
    //Корзина - не работает

    let cards = document.querySelectorAll(".card")
    cards.forEach((card) =>{
        let AddBtn = card.querySelector(".to-basket-btn")
        AddBtn.addEventListener("click", ()=>{
            localStorage.setItem("", card)
        })
    })
