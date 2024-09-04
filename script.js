let flyselskapEl = document.querySelector("#flyselskap")
let statusEl = document.querySelector("#status")
let bookingklasseEl = document.querySelector("#bookingklasse")
let milesEl = document.querySelector("#miles")
let poengEl = document.querySelector("#poeng")
let oppdaterEl = document.querySelector("#oppdater")



oppdaterEl.addEventListener("click", () => {

    let poeng = (milesEl.value) * (statusEl.value) *(bookingklasseEl.value) * (flyselskap.value)
    poengEl.innerHTML = poeng
    
})