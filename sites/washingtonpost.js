const elementsToHide = ["#wall-bottom-drawer", ".regwall-overlay"];

const elementsToStyle = [
  ["html", "overflow", "auto"],
  ["html", "height", "auto"],
  ["body", "overflow", "auto"],
];

doOnce(cleanPage);
repeat(() => {
  cleanPage();
});

function cleanPage() {
  elementsToHide.forEach((elem) => hideElements(elem));
  elementsToStyle.forEach((elem) => changeStyle(...elem));
}
