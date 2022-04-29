const formBtn = document.querySelectorAll(".tabBtn");
const formItem = document.querySelectorAll(".tabItem");
formBtn.forEach((e) => {
    onTabClick(formBtn, formItem, e);
});
const formOuterBtn = document.querySelectorAll(".formOuterBtn");
const formOuterItem = document.querySelectorAll(".formOuterItem");
formOuterBtn.forEach((e) => {
    onTabClick(formOuterBtn, formOuterItem, e);
});
const heroBtn = document.querySelectorAll(".heroBtn");
const heroItem = document.querySelectorAll(".heroItem");
heroBtn.forEach((e) => {
    onTabClick(heroBtn, heroItem, e);
});
function onTabClick(formBtns, formItems, itemForm) {
    itemForm.addEventListener("click", function (e) {
        let currentformBtn = itemForm;
        let tabIdForm = currentformBtn.getAttribute("data-tab");
        let currentformItem = document.querySelector(tabIdForm);
        if (!currentformBtn.classList.contains("active")) {
            formBtns.forEach(function (itemForm) {
                itemForm.classList.remove("active");
            });
            formItems.forEach(function (itemForm) {
                itemForm.classList.remove("active");
            });
            currentformBtn.classList.add("active");
            currentformItem.classList.add("active");
        }
        // $(".listingPage__slider").slick("setPosition");
    });
}
