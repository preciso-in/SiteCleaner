const elementsToHide = [
  ".dtls-right-col",
  ".TABOOLA",
  ".taboola_body_ad",
  ".newadd",
  ".newtopadd",
  "#jiosaavn-widget",
];

doOnce(cleanPage);
repeat(() => {
  cleanPage();
});

function cleanPage() {
  elementsToHide.forEach((elem) => hideElements(elem));
}
