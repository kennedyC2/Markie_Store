export const Populate = (elem) => {
    let items = document.querySelectorAll("#" + elem + " .carousel-item .grid");

    items.forEach((el) => {
        const minPerSlide = 5;
        let next = el.nextElementSibling;
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0];
            }
            let cloneChild = next.cloneNode(true);
            el.appendChild(cloneChild.children[0]);
            next = next.nextElementSibling;
        }
    });
};
