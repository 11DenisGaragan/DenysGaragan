document.addEventListener("DOMContentLoaded", function(){
   document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("#wraper").classList.toggle("active")
   })
})