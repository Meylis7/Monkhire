const modBtn = document.querySelectorAll(".modBtn");
const mod = document.querySelectorAll(".mod");
modBtn.forEach((e) => {
  onModClick(modBtn, mod, e);
});
const modClose = document.querySelectorAll(".modClose").forEach((e) => {
  e.addEventListener("click", function (x) {
    var modId = x.target.dataset.mod;
    document.querySelector("#" + modId).classList.remove("active");
  });
});
function onModClick(modBtns, mods, modItem) {
  modItem.addEventListener("click", function (e) {
    let currentModBtn = modItem;
    let modTabId = currentModBtn.getAttribute("data-tab");
    let currentMod = document.querySelector(modTabId);
    if (!currentModBtn.classList.contains("active")) {
      modBtns.forEach(function (modItem) {
        modItem.classList.remove("active");
      });
      mods.forEach(function (modItem) {
        modItem.classList.remove("active");
      });
      currentMod.classList.add("active");
    }
  });
}


// const tabsBtn = document.querySelectorAll(".modBtn");
// const tabsItems = document.querySelectorAll(".mod");
// const tabsMaps = document.querySelectorAll(".st0");
// tabsBtn.forEach((e) => {
//     onTabClick(tabsBtn, tabsItems, e, tabsMaps);
// });
// function onTabClick(tabBtns, tabItems, item, tabsMaps) {
//   item.addEventListener("click", function (e) {
//     let currentBtn = item;
//     let tabId = currentBtn.getAttribute("data-tab");
//     let mapId = currentBtn.getAttribute("data-map");
//     let currentTab = document.querySelector(tabId);

//     if (e.srcElement.classList.contains("active")) {
//     } else if (!currentBtn.classList.contains("active")) {

//       // svgs(mapId);

//       tabBtns.forEach(function (item) {
//         item.classList.remove("active");
//       });
//       tabItems.forEach(function (item) {
//         item.classList.remove("active");
//       });
//       tabsMaps.forEach(function (item) {
//         item.classList.remove("active");
//       });
//       currentBtn.classList.add("active");
//       currentTab.classList.add("active");

//       let currentMap = document.querySelector(mapId);
//       currentMap.classList.add("active");
//     }
//   });
// }