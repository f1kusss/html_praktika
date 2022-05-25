let themeButton = document.querySelectorAll('.theme-button');
let cardsButton = document.querySelectorAll('.card-view-button')
let prev = themeButton[0]
let prevCard = cardsButton[0]
themeButton[0].onclick = function(){
    document.querySelector('html').setAttribute('data-theme-name',"light")
    if (themeButton[0].classList.contains('theme-button active')==false){
        themeButton[0].classList.toggle('active')
        prev.classList.toggle('active')
        prev = themeButton[0]
    }
    
    
}
themeButton[1].onclick = function(){
    document.querySelector('html').setAttribute('data-theme-name',"dark")
    if (themeButton[1].classList.contains('theme-button active')==false){
        themeButton[1].classList.toggle('active')
        prev.classList.toggle('active')
        prev = themeButton[1]
    }
}
themeButton[2].onclick = function(){
    document.querySelector('html').setAttribute('data-theme-name',"texture")
    if (themeButton[2].classList.contains('theme-button active')==false){
        themeButton[2].classList.toggle('active')
        prev.classList.toggle('active')
        prev = themeButton[2]
    }
}
console.log(cardsButton[0].classList.contains('card-view-button active'))
cardsButton[0].onclick = function(){
    if(prevCard==cardsButton[1]){
        document.querySelector('.cards').classList.toggle('standard')
    }
    if (prevCard==cardsButton[2]){
        document.querySelector('.cards').classList.toggle('compact')
    }
    if (cardsButton[0].classList.contains('card-view-button active')==false){
        cardsButton[0].classList.toggle('active')
        prevCard.classList.toggle('active')
        prevCard = cardsButton[0]
    }
}
cardsButton[1].onclick = function(){
    if(prevCard==cardsButton[2]){
        document.querySelector('.cards').classList.toggle('compact')
    }
    document.querySelector('.cards').classList.toggle('standard')
    if (cardsButton[1].classList.contains('card-view-button active')==false){
        cardsButton[1].classList.toggle('active')
        prevCard.classList.toggle('active')
        prevCard = cardsButton[1]
    }
}
cardsButton[2].onclick = function(){
    if(prevCard==cardsButton[1]){
        document.querySelector('.cards').classList.toggle('standard')
    }
    document.querySelector('.cards').classList.toggle('compact')
    if (cardsButton[2].classList.contains('card-view-button active')==false){
        cardsButton[2].classList.toggle('active')
        prevCard.classList.toggle('active')
        prevCard = cardsButton[2]
    }
}

