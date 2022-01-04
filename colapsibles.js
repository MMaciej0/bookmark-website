// Tabs

const tabs = document.querySelectorAll(".tab-list > button");
const tabList = document.querySelector(".tab-list");

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTab);
});

function changeTab(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute("aria-controls");
  const tabContainer = targetTab.parentNode;
  const mainContainer = tabList.parentNode;

  // hold underline indicators

  tabContainer
    .querySelector(`[aria-selected="true"]`)
    .setAttribute("aria-selected", false);

  targetTab.setAttribute("aria-selected", true);

  // hide all feature panels

  mainContainer
    .querySelectorAll(`[data-panel="feature"]`)
    .forEach((feature) => feature.classList.add("none"));

  // show correnct content

  mainContainer.querySelector(`#${targetPanel}`).classList.remove("none");
}

//
//  FAQ collapsible
//

const collapsible = document.querySelectorAll(".collapsible");

collapsible.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
