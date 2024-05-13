const elementsToHide = [
  ".sectionRight",
  ".article_related_story",
  ".mainHeader",
  "#stickyNavContainer",
  ".secondNav",
  "#footer_ajax_div",
  ".insidefollwicon",
  "aside#right",
];

doOnce(cleanPage);
repeat(() => {
  cleanPage();
});

function cleanPage() {
  elementsToHide.forEach((elem) => hideElements(elem));
}
