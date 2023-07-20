{
    const welcome = () => {
        console.log("Witam wszystkich na mojej pierwszej stronie!");
    }

    const buttonTheme = document.querySelector(".js-button");

    const toggleBackground = () => {
        const bodyContainer = document.querySelector(".js-body__container");
        const buttonName = document.querySelector(".js-themeName");
        const headerTitle = document.querySelector(".js-header__title");
        const navigation = document.querySelector(".js-navigation__list");
        const navigationLink = document.querySelector(".js-navigation__link");
        const sectionHeader = document.querySelector(".js-section__header");
        const sectionParagraph = document.querySelector(".js-section__paragraph");

        bodyContainer.classList.toggle("darkTheme");
        buttonTheme.classList.toggle("darkThemeButton");
        headerTitle.classList.toggle("darkThemeTitle");
        navigation.classList.toggle("darkThemeNavigation");
        navigationLink.classList.toggle("darkThemeNavigationLink");
        sectionHeader.classList.toggle("darkThemeSectionHeader");
        sectionParagraph.classList.toggle("darkThemeSectionParagraph");

        buttonName.innerText = bodyContainer.classList.contains("darkTheme") ? "jasny" : "ciemny";
    };

    const init = () => {
        buttonTheme.addEventListener("click", toggleBackground);

        welcome();
    }

    init();
}


