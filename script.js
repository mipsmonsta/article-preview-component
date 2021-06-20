const sharebar = document.body.querySelector(".sharebar");
const avartarShareBtn = document.body.querySelector(".avatar__share");
const avartar = document.body.querySelector(".avatar");
let shareOpened = false;

console.log(sharebar, avartarShareBtn);

avartarShareBtn.addEventListener("click", (event) => {
  if (shareOpened === false) {
    sharebar.classList.toggle("open");
    avartar.style.backgroundColor = "hsl(217, 19%, 35%)"
    shareOpened = true;
  } else {
    sharebar.classList.toggle("open");
    shareOpened = false;
    avartar.style.backgroundColor = "white";
  }

  event.stopPropagation(); //prevent bubbling up
});
