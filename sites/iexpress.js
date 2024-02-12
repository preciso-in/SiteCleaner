const elementsToHide = [
  ".rightpanel",
  "header#common",
  ".breaking-news",
  "#id_newsletter_subscription",
  ".pune-related-widget",
  "footer",
  ".share-social",
];

doOnce(cleanPage);
repeat(() => {
  cleanPage();
});

function cleanPage() {
  elementsToHide.forEach((elem) => hideElements(elem));
}
