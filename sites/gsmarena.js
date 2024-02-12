const elementsToHide = ["aside.sidebar.col.left"];

const elementsToStyle = [
  [".float-right", "float", "unset"],
  ["#body", "display", "block"],
  ["#body", "width", "90%"],
  [".main", "width", "90%"],
];

doOnce(cleanPage);
repeat(() => {
  cleanPage();
});

function cleanPage() {
  elementsToHide.forEach((elem) => hideElements(elem));
  elementsToStyle.forEach((elem) => changeStyle(...elem));
}
