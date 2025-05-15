
let review_box = document.querySelector(".review_box")
let text = document.getElementById("text")
let btn = document.querySelector(".btn")
let back_btn = document.querySelector(".back_btn")

btn.addEventListener("click", function () {
    if (text.value == "") {
      back_btn.style.display = "block";
        
    }
    else{
        review_box.innerHTML += `${text.value} <br>`;
        text.value = "";
        back_btn.style.display = "none"
    }
})
