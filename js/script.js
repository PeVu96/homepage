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
        const navigationLink1 = document.querySelector(".js-navigation__link1");
        const navigationLink2 = document.querySelector(".js-navigation__link2");
        const navigationLink3 = document.querySelector(".js-navigation__link3");
        const navigationLink4 = document.querySelector(".js-navigation__link4");
        const navigationLink5 = document.querySelector(".js-navigation__link5");
        const sectionHeader1 = document.querySelector(".js-section__header1");
        const sectionHeader2 = document.querySelector(".js-section__header2");
        const sectionHeader3 = document.querySelector(".js-section__header3");
        const sectionHeader4 = document.querySelector(".js-section__header4");
        const sectionHeader5 = document.querySelector(".js-section__header5");
        const sectionParagraph1 = document.querySelector(".js-section__paragraph1");
        const sectionParagraph2 = document.querySelector(".js-section__paragraph2");
        const sectionParagraph3 = document.querySelector(".js-section__paragraph3");
        const sectionParagraph4 = document.querySelector(".js-section__paragraph4");
        const sectionParagraph5 = document.querySelector(".js-section__paragraph5");

        bodyContainer.classList.toggle("darkTheme");
        buttonTheme.classList.toggle("darkThemeButton");
        headerTitle.classList.toggle("darkThemeTitle");
        navigation.classList.toggle("darkThemeNavigation");
        navigationLink1.classList.toggle("darkThemeNavigationLink");
        navigationLink2.classList.toggle("darkThemeNavigationLink");
        navigationLink3.classList.toggle("darkThemeNavigationLink");
        navigationLink4.classList.toggle("darkThemeNavigationLink");
        navigationLink5.classList.toggle("darkThemeNavigationLink");
        sectionHeader1.classList.toggle("darkThemeSectionHeader");
        sectionHeader2.classList.toggle("darkThemeSectionHeader");
        sectionHeader3.classList.toggle("darkThemeSectionHeader");
        sectionHeader4.classList.toggle("darkThemeSectionHeader");
        sectionHeader5.classList.toggle("darkThemeSectionHeader");
        sectionParagraph1.classList.toggle("darkThemeSectionParagraph");
        sectionParagraph2.classList.toggle("darkThemeSectionParagraph");
        sectionParagraph3.classList.toggle("darkThemeSectionParagraph");
        sectionParagraph4.classList.toggle("darkThemeSectionParagraph");
        sectionParagraph5.classList.toggle("darkThemeSectionParagraph");

        buttonName.innerText = bodyContainer.classList.contains("darkTheme") ? "jasny" : "ciemny";
    };

    const init = () => {
        buttonTheme.addEventListener("click", toggleBackground);

        welcome();
    }

    init();
}


