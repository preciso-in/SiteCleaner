const elementsToHide = [".pgAdWrapper", ".ad_336", ".adSpinner"];
const favCountCriteria = 50;
const ratingCriteria = 3.8;

doOnce(cleanPage, hideNovels);
setTimeout(cleanPage, 2000);

function cleanPage() {
  // console.log('Running Extension to clean page')
  elementsToHide.forEach(hideElements);
}

function hideNovels() {
  const novelsListDivs = getNovelsListDivs(document);

  novelsListDivs.map((novel, i) => {
    const ignoreTitle = isIgnoredTitle(novel);
    const notEnoughFavorities = isBelowFavCriteria(novel, favCountCriteria, i);
    const badRating = isBadRating(novel, ratingCriteria, i);

    if (ignoreTitle || notEnoughFavorities || badRating) {
      novel.style.display = "none";
    }
  });
}

function isBadRating(novel) {
  const ratingStr = novel.querySelector(
    ".search_img .search_ratings"
  ).innerText;

  const rating = ratingStr.replace(/[()]+/g, "") * 1;

  return rating < ratingCriteria;
}

function getNovelsListDivs(document) {
  const [novelsListContainer] = document.getElementsByClassName(
    "site-content-contain"
  );
  return [...novelsListContainer?.getElementsByClassName("search_main_box")];
}

function isIgnoredTitle(novel) {
  const novelTitle = novel.querySelector(".search_title i");

  return novelTitle && novelTitle.title === "Dont read";
}

function isBelowFavCriteria(novel, favCountCriteria, novelCount) {
  const [, favoriteStrSpan, chapterCountSpan] =
    novel.querySelectorAll(".nl_stat.destp");

  const [, favCount] = favoriteStrSpan.innerText
    .split(" ")
    .map((v) => (isNaN(v) ? v : +v));
  const [, chapterCount] = chapterCountSpan.innerText
    .split(" ")
    .map((v) => (isNaN(v) ? v : +v));

  favRatio = favCount / chapterCount;
  const favCountRatioUnfavorable =
    favCount < 2 * favCountCriteria && favRatio < 10;
  const tooFewFavs = favCount < favCountCriteria;

  return favCountRatioUnfavorable || tooFewFavs;
}
