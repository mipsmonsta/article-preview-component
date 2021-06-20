const sharebar = document.body.querySelector(".sharebar");
const avartarShareBtn = document.body.querySelector(".shareicon");
const avartar = document.body.querySelector(".avatar");
let shareOpened = false;

// console.log(sharebar, avartarShareBtn);

avartarShareBtn.addEventListener("click", (event) => {
  if (shareOpened === false) {
    sharebar.classList.toggle("open");
    avartar.classList.toggle("open");
    shareOpened = true;
  } else {
    sharebar.classList.toggle("open");
    avartar.classList.toggle("open");
    shareOpened = false;
  }

  event.stopPropagation(); //prevent bubbling up
});
