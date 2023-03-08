// Variables
const dashboard = document.getElementById("dashboard");
const menuTab = document.querySelector("ul#myTab");
const menuTabs = document.querySelectorAll("ul#myTab li");
let tabs_width = 0;

const populate = (elem) => {
    let listTabs = document.querySelectorAll("#" + elem + " .carousel-item .grid");

    listTabs.forEach((el) => {
        const minPerSlide = 5;
        let next = el.nextElementSibling;
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = listTabs[0];
            }
            let cloneChild = next.cloneNode(true);
            el.appendChild(cloneChild.children[0]);
            next = next.nextElementSibling;
        }
    });
};

if (dashboard) {
    menuTabs.forEach((element) => {
        tabs_width += element.clientWidth;
    });

    const padding = (menuTab.clientWidth - tabs_width) / 2;

    // Centralize menu
    menuTab.setAttribute("style", "padding-left:" + padding + "px");
}

populate("newArrival");
populate("trending");
