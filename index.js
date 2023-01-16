const cardOne = document.querySelector(".card1")
const cardTwo = document.querySelector(".card2")
const submitBtn = document.querySelector(".submit")
const rateAgain = document.querySelector(".rate-again")
const rating = document.getElementById("ratings")
const rates = document.querySelectorAll(".btn")

submitBtn.addEventListener("click",() =>{
    cardTwo.classList.remove("hidden")
    cardOne.style.display = "none"
    
}
)

rateAgain.addEventListener("click",() =>{
    cardTwo.classList.add("hidden")
    cardOne.style.display = "block"
    
}
)

rates.forEach((rate) =>{
    rate.addEventListener("click", () =>{
     rating.innerHTML = rate.innerHTML   
    })
})