const elementsToHide = [
  "header",
  ".right-row",
  ".col-lg-4.pr-0",
  ".social-shar-bar",
];

doOnce(cleanPage);

function cleanPage() {
  elementsToHide.forEach(hideElements);
  document.querySelector(".main-cont-left").classList.remove("col-lg-8");
}
