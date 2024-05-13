const elementsToHide = [
  ".theiaStickySidebar",
  ".__rhslisting_news",
  ".theiaStickySidebar",
  ".__scrolled_header",
  "footer",
  ".left_trending.left-sticky",
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
