const elementsToHide = [
  ".rightBlock",
  ".trendingSimilarHeight",
  ".adMinHeight280",
  ".adHeight280",
  ".moreNews",
  ".btnClose",
  "aside.leftSec",
  ".socialHolder",
  ".outsideSso",
  ".outbrainAdHeight",
  "#mylistView",
  ".subscriptionBox",
  "#adHeightstory",
  "#lastAd",
  "#adfreeDeskSpace",
  ".lhsBlock",
  ".stckyShareIcons",
  ".navNew",
];

const elementsToStyle = [
  [".mainSec", "width", "80%"],
  [".mainSec", "min-height", "100%"],
  [".subscription.contentSec .paywall", "height", "100%"],
];

doOnce(cleanPage);
repeat(() => {
  cleanPage();
});

function cleanPage() {
  elementsToHide.forEach((elem) => hideElements(elem));
  elementsToStyle.forEach((elem) => changeStyle(...elem));
  document.querySelector(".paywall")?.classList?.remove?.("paywall");
}
