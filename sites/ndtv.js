const elementsToHide = [
  "#jiosaavn-widget",
  ".story_footer",
  ".col-300",
  ".social_link",
  "#stk_cnt",
  ".ads_tb-c",
  ".sp_ad-t",
];

const elementsToStyle = [];

function cleanPage() {
  elementsToHide.forEach((elem) => hideElements(elem));
  elementsToStyle.forEach((elem) => changeStyle(...elem));

  const articleNodes = [...document.getElementsByClassName("col-650")];
  articleNodes.map((elem) => elem.classList.remove("col-650"));
}

doOnce(cleanPage);
repeat(() => {
  cleanPage();
});
