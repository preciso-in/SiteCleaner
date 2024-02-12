const elementsToHide = [
  ".editor-tv-wrapper.editor-tv-active",
  ".page-header",
  ".editor-tv-component",
  ".editor-tv-title",
  ".theiaStickySidebar",
  ".bn-breaking-news",
  ".bn-effecgt-scroll",
  "#livebtbox",
  ".article-left-col",
];

const elementsToStyle = [
  [".article-right-col", "float", "unset"],
  [".article-right-col", "width", "100%"],
];

doOnce(cleanPage);

function cleanPage() {
  elementsToHide.forEach((elem) => hideElements(elem));
  elementsToStyle.forEach((elem) => changeStyle(...elem));
}
