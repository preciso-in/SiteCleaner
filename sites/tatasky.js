const elementsToHide = [".desktopChnnelView", ".header-section"];

const elementsToStyle = [
  [".video_player", "maxWidth", "100%"],
  ["#mainContainer", "paddingTop", "0px"],
];

doOnce(cleanPage);

function cleanPage() {
  elementsToHide.forEach((elem) => hideElements(elem));
  elementsToStyle.forEach((elem) => changeStyle(...elem));
}
