const elem1 = document.getElementById("elem-1")
const elem2 = document.getElementById("elem-2")
const elem3 = document.getElementById("elem-3")
const elem4 = document.getElementById("elem-4")
const elem5 = document.getElementById("elem-5")
const elem6 = document.getElementById("elem-6")
const elem7 = document.getElementById("elem-7")
const elem8 = document.getElementById("elem-8")
const elem9 = document.getElementById("elem-9")

document.body.addEventListener("keyup",(e)=>{
    playOnKey(e.code.toLowerCase())
})
function playOnKey(som) {
    const audio = document.querySelector(`#s-${som}`)
    audio.currentTime = 0
    audio.play()
}

elem1.addEventListener("click",()=>{
    const audio = document.querySelector("#s-keyq")
    audio.play()
    audio.currentTime = 0

})

elem2.addEventListener("click",()=>{
    const audio = document.querySelector("#s-keyw")
    audio.play()
    audio.currentTime = 0

})

elem3.addEventListener("click",()=>{
   const audio = document.querySelector("#s-keye")
   audio.play()
    audio.currentTime = 0

})

elem4.addEventListener("click",()=>{
   const audio = document.querySelector("#s-keya")
   audio.play()
    audio.currentTime = 0

})

elem5.addEventListener("click",()=>{
   const audio = document.querySelector("#s-keys")
   audio.play()
    audio.currentTime = 0

})

elem6.addEventListener("click",()=>{
   const audio = document.querySelector("#s-keyd")
   audio.play()
    audio.currentTime = 0

})

elem7.addEventListener("click",()=>{
   const audio = document.querySelector("#s-keyz")
   audio.play()
    audio.currentTime = 0

})

elem8.addEventListener("click",()=>{
    const audio = document.querySelector("#s-keyx")
    audio.play()
    audio.currentTime = 0

})

elem9.addEventListener("click",()=>{
    const audio = document.querySelector("#s-keyc")
    audio.play()
    audio.currentTime = 0

})
