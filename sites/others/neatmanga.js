const elementsToHide = [".container .row .col-lg-6.col-sm-12.col-md-6"];

const elementsToStyle = [];

console.log("Running extension");
doOnce(cleanPage);
repeat(() => {
  cleanPage();
});

function cleanPage() {
  elementsToHide.forEach((elem) => hideElements(elem));
  elementsToStyle.forEach((elem) => changeStyle(...elem));
}
