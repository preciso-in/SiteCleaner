const elementsToHide = ["#outline-drawer"];

doOnce(cleanPage, resizeContent);

function cleanPage() {
  elementsToHide.forEach(hideElements);
}

function resizeContent() {
  const labContentContainer = document
    .querySelector("#lab-content-container")
    ?.shadowRoot?.querySelector?.(".content");

  labContentContainer?.style["margin-right"] = "0px";
  labContentContainer?.style["margin-left"] = "285px";
}
