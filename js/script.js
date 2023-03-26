{
    const welcome = () => {
        console.log("Witam wszystkich na mojej pierwszej stronie!");
    }

    const buttonTheme = document.querySelector(".js-button");

    const toggleBackground = () => {
        const bodyContainer = document.querySelector(".js-body__container");
        const buttonName = document.querySelector(".js-themeName");

        bodyContainer.classList.toggle("darkTheme");
        buttonTheme.classList.toggle("darkThemeButton");
        buttonName.innerText = bodyContainer.classList.contains("darkTheme") ? "barceloński" : "czarno-biały";
    };

    const init = () => {
        buttonTheme.addEventListener("click", toggleBackground);

        welcome();
    }

    init();
}


