{
    const welcome = () => {
        console.log("Witam wszystkich na mojej pierwszej stronie!");
    }

    const toggleBackground = () => {
        const bodyContainer = document.querySelector(".js-body__container");
        const buttonTheme = document.querySelector(".js-button__theme");

        bodyContainer.classList.toggle("darkTheme");
        buttonBarca.classList.toggle("darkThemeButton");
        buttonTheme.innerText = bodyContainer.classList.contains("darkTheme") ? "barceloński" : "czarno-biały";
    };

    const init = () => {
        const buttonBarca = document.querySelector(".js-button");

        buttonBarca.addEventListener("click", toggleBackground);

        welcome();
    }

    init();
}