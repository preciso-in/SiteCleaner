const elementsToHide = [
  ".rhs__section",
  ".AiRecommended_recommended__widget__ZkRo0",
  ".recommended_widget",
  "#shoppingWidgetLSH",
  ".taboola__container",
  ".inline-story-ad-scroll",
  ".ads__common",
  ".sticknavigation",
  ".ads__container",
  ".inline_ad1",
];

const elementsToStyle = [
  [".__story_detail .__inner_wrapper .right_full_story", "width", "100%"],
];

doOnce(cleanPage);
repeat(() => {
  cleanPage();
});

function cleanPage() {
  elementsToHide.forEach((elem) => hideElements(elem));
  elementsToStyle.forEach((elem) => changeStyle(...elem));
}
