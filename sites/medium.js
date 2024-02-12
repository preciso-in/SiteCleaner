const elementsToHide = [
  '[data-test-id="post-sidebar"]',
  ".wo.kr.w",
  ".mk.dc.kr.ky.aj.wz.u.kw.la",
  ".ef",
];

const elementsToStyle = [[".di", "max-width", "90%"]];

doOnce(cleanPage);
repeat(() => {
  cleanPage();
});

function cleanPage() {
  elementsToHide.forEach((elem) => hideElements(elem));
  elementsToStyle.forEach((elem) => changeStyle(...elem));
}
