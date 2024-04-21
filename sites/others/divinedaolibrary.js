const elementsToHide = [
  ".ezoic-ad",
  ".ezmob-footer.ezoic-floating-bottom.ezo_ad.ezmob-footer-desktop",
];

const elementsToStyle = [
  [".ezoic-ad.box-2101", "min-height", "0px"],
  [".ezoic-ad.box-4109", "min-height", "0px"],
  [".ezoic-ad.box-3139", "min-height", "0px"],
];

function cleanPage() {
  elementsToHide.forEach((elem) => hideElements(elem));
  elementsToStyle.forEach((elem) => changeStyle(...elem));
}

// doOnce(cleanPage, hideAds);
doOnce(cleanPage);
repeat(() => {
  cleanPage();
});

function hideAds() {
  const adSelector = "[class^=ezoic]";

  const adElementsWithFullClassList = [...document.querySelectorAll(adSelector)]
    .map((elem) => elem.classList.value)
    .map(
      (elemClassListWithSpaces) =>
        `.${elemClassListWithSpaces.replace(" ", ".")}`
    );

  adElementsWithFullClassList.forEach((elem) => {
    elem.style.display = "none";
  });
}
