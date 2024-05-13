const elementsToHide = [
  ".adSlotCnt",
  ".leagues-container",
  ".video-img",
  ".d-lg-block",
  ".article-social",
  "aside.inline.inline-track",
  ".no-gutters .sticky-top",
  "#header-wrapper",
  ".match-header-container",
  ".teads-ui-components-adchoices",
  ".teads-inread",
];

const elementsToStyle = [
  [".row .col-lg-10", "flex", "0 1 auto"],
  [".row .col-lg-10", "maxWidth", "100%"],
  [".article-body", "maxWidth", "100%"],
  [".match-info", "margin", "0"],
  [".match-header > .event", "padding", "0"],
  [".sticky-card", "position", "static"],
];

function cleanPage() {
  elementsToHide.forEach((elem) => hideElements(elem));
  elementsToStyle.forEach((elem) => changeStyle(...elem));
}

doOnce(cleanPage);
repeat(() => {
  cleanPage();
});
