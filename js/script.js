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
        const tableCell1 = document.querySelector(".js-table__cell1");
        const tableCell2 = document.querySelector(".js-table__cell2");
        const tableCell3 = document.querySelector(".js-table__cell3");
        const tableCell4 = document.querySelector(".js-table__cell4");
        const tableCell5 = document.querySelector(".js-table__cell5");
        const tableCell6 = document.querySelector(".js-table__cell6");
        const tableCell7 = document.querySelector(".js-table__cell7");
        const tableCell8 = document.querySelector(".js-table__cell8");
        const tableCell9 = document.querySelector(".js-table__cell9");
        const tableCell10 = document.querySelector(".js-table__cell10");
        const tableCell11 = document.querySelector(".js-table__cell11");
        const tableCell12 = document.querySelector(".js-table__cell12");
        const tableCell13 = document.querySelector(".js-table__cell13");
        const tableCell14 = document.querySelector(".js-table__cell14");
        const tableCell15 = document.querySelector(".js-table__cell15");
        const tableCell16 = document.querySelector(".js-table__cell16");
        const tableRow1 = document.querySelector(".js-table__row1");
        const tableRow2 = document.querySelector(".js-table__row2");
        const tableRow3 = document.querySelector(".js-table__row3");
        const tableRow4 = document.querySelector(".js-table__row4");

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
        tableCell1.classList.toggle("darkThemeTableCell");
        tableCell2.classList.toggle("darkThemeTableCell");
        tableCell3.classList.toggle("darkThemeTableCell");
        tableCell4.classList.toggle("darkThemeTableCell");
        tableCell5.classList.toggle("darkThemeTableCell");
        tableCell6.classList.toggle("darkThemeTableCell");
        tableCell7.classList.toggle("darkThemeTableCell");
        tableCell8.classList.toggle("darkThemeTableCell");
        tableCell9.classList.toggle("darkThemeTableCell");
        tableCell10.classList.toggle("darkThemeTableCell");
        tableCell11.classList.toggle("darkThemeTableCell");
        tableCell12.classList.toggle("darkThemeTableCell");
        tableCell13.classList.toggle("darkThemeTableCell");
        tableCell14.classList.toggle("darkThemeTableCell");
        tableCell15.classList.toggle("darkThemeTableCell");
        tableCell16.classList.toggle("darkThemeTableCell");
        tableRow1.classList.toggle("darkThemeTableRow");
        tableRow2.classList.toggle("darkThemeTableRow");
        tableRow3.classList.toggle("darkThemeTableRow");
        tableRow4.classList.toggle("darkThemeTableRow");

        buttonName.innerText = bodyContainer.classList.contains("darkTheme") ? "jasny" : "ciemny";
    };

    const init = () => {
        buttonTheme.addEventListener("click", toggleBackground);

        welcome();
    }

    init();
}


