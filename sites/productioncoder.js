const elementsToHide = [".sidebar", ".sharrre-container"];

const elementsToStyle = [
  [".main-inner", "paddingRight", "0px"],
  [".main-inner", "backgroundColor", "#fff"],
];

doOnce(cleanPage);

function cleanPage() {
  elementsToHide.forEach(hideElements);
  elementsToStyle.forEach((elem) => changeStyle(...elem));
}
