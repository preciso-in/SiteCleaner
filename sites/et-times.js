const elementsToHide = [
  "aside.sideBar",
  ".stickyBand",
  ".primeDW",
  ".band .bandCont",
  ".header",
  ".nav_block",
  "#topnavBlk",
  ".artShare",
  "#freeSCWidget",
  "#feedbackForm",
  ".bgOneTapGray .oneTapCloseBg",
];

const elementsToStyle = [[".pageContent.flt", "width", "100%"]];

doOnce(cleanPage);
repeat(() => {
  cleanPage();
});

function cleanPage() {
  elementsToHide.forEach((elem) => hideElements(elem));
  elementsToStyle.forEach((elem) => changeStyle(...elem));
}
