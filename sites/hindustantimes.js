const elementsToHide = [
  ".adsSticky",
  ".adHolderAfterLoad",
  "#id-modal-backdrop",
  "#productInitForCompare",
  "#productInit",
  ".adHeight313",
  ".adMinHeight313",
  ".freemium-card",
  ".shareSticky",
  ".rgtAdSection",
  ".leftNav",
  ".closeStory.close-btn",
  ".blackOverlay",
  "#section_news",
  ".adHolderStory",
  "#header",
  ".fixHeight340",
  "#adfreeDeskSpace",
  ".leftSec",
  ".headMenu",
  ".shareSticky *",
  ".FirstAd",
  ".adsHeight300x250.mb20",
  ".SimilarCarsSlide",
  ".videoHolder",
  ".adsHeight300x250",
  "[class^=ads]",
  "[class*=Ads]",
];

const elementsToStyle = [
  [".mainSec", "width", "80%"],
  [".mainContainer", "width", "80%"],
  ["showAdBlocker", "overflow", "unset"],
  ["body", "overflow", "unset"],
  [".shareSticky", "padding", "0px"],
];

function cleanPage() {
  elementsToStyle.forEach((elem) => changeStyle(...elem));
  elementsToHide.forEach(hideElements);

  const freemiumNodes = [...document.getElementsByClassName("freemiumText")];
  freemiumNodes.map(removeClass("freemiumText"));
}

function removeClass(className) {
  return function (elem) {
    elem.classList.remove(className);
  };
}

let count = 1;
const options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

let interval = setInterval(() => {
  const formattedDate = new Intl.DateTimeFormat("en-IN", options).format(
    new Date()
  );
  console.log(formattedDate, ": Cleaning page");
  cleanPage();
  count++;
  if (count > 100) {
    clearInterval(interval);
  }
}, 1000);
