const menuOpenButton = document.querySelector("#open-menu");
const menuCloseButton = document.querySelector("#close-menu");

menuOpenButton.addEventListener("click", () => {

    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());


document.querySelector(".content-selection").addEventListener("click", function () {
    const gradeList = document.querySelector(".grade-list");
    gradeList.style.display = gradeList.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".dropdown-toggle").forEach(function (button) {
    button.addEventListener("click", function () {
        const submenu = button.nextElementSibling;
        submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });
});