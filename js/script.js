console.log("Witam wszystkich na mojej pierwszej stronie!");

let bodyContainer = document.querySelector(".js-body__container");
let buttonBarca = document.querySelector(".js-button");
let buttonTheme = document.querySelector(".js-button__theme");

buttonBarca.addEventListener("click", () => {
    bodyContainer.classList.toggle("darkTheme");
    buttonBarca.classList.toggle("darkThemeButton");
    buttonTheme.innerText = bodyContainer.classList.contains("darkTheme") ? "barceloński" : "czarno-biały";
});