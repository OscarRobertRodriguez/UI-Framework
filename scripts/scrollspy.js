import getPosition from "./getPosition";
import throttle from "./throttle";

let sections = [...document.querySelectorAll(".section")];
let links = document.querySelectorAll(".scrollspy__link");
let mobile = document.querySelectorAll(".scrollspy__link-mobile");
let ids = [
    "buttons",
    "cards",
    "accordion",
    "tabs",
    "forms",
    "pagination",
    "modal",
    "carousel"
];

let sectionOffsets = {};

sections.forEach(
    section => (sectionOffsets[section.id] = getPosition(section).y)
);



window.addEventListener("scroll", () => {
    (function(sectionOffsets) {
        let scrollPosition = document.documentElement.scrollTop;
        for (let i in sectionOffsets) {
            if (sectionOffsets[i] <= scrollPosition + 400) {
                document
                    .querySelector(".scroll--active")
                    .classList.remove("scroll--active");
                document
                    .querySelector("a[href*=" + i + "]")
                    .classList.add("scroll--active");
            }
        }
    })(sectionOffsets);
});


