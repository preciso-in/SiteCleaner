const elementsToStyle = [
  ["span.ezoic-ad>*", "min-height", "5px"],
  ["span.ezoic-ad", "min-height", "5px"],
];

const elementsToHide = [".ezoic-ad"];

doOnce(cleanPage);
repeat(() => {
  cleanPage();
});

function cleanPage() {
  console.log("Cleaning wujizun");
  elementsToHide.forEach((elem) => hideElements(elem));
  elementsToStyle.forEach((elem) => changeStyle(...elem));
}