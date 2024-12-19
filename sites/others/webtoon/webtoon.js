const elementsToHide = [
  ".c-sub-header-nav", // remove sub-header
  ".c-ads", // clean ads
  ".c-top-sidebar", // clean topbar
  ".c-sub-header-nav.sticky.with-border",
  ".site-footer", // clean footer
  ".c-sidebar.c-bottom-sidebar.wp-manga",
  "#manga-discussion",
  ".ad.c-ads.custom-code.body-top-ads",
  ".ad.c-ads.custom-code.body-top-ads div",
  ".c-ads.body-top-ads",
  ".mn-thumb",
  "div.c-sidebar.c-top-sidebar.wp-manga",
  ".widget_text.widget-content",
  ".c-ads",
  ".widget_text.widget-content",
  "#disqus_thread",
  "iframe",
];

const elementsToStyle = [
  // ["#posts", "color", "white"],
  ["#layout  p", "color", "white"],
];

const elementsToDelete = [
  //
  ".c-sub-header-nav.with-border.sticky .container",
];

doOnce(addCompletedLinkToNavBar, cleanPage);
customRepeat(500, () => {
  hideHeader();
  elementsToStyle.forEach((elem) => changeStyle(...elem));
  // removeiFrame();
  elementsToDelete.forEach((elem) => deleteElement(elem));
});

function cleanPage() {
  elementsToHide.forEach((x) => hideElements(x));
  elementsToStyle.forEach((elem) => changeStyle(...elem));
  processWebtoons();
  elementsToDelete.forEach((elem) => deleteElement(elem));
  // removeComments();
}

function whatPage(location) {
  const pathToProcess = location.pathname;
  const queryParams = location.search;

  const isCompletedAlbums = pathToProcess.includes("completed");

  const isGenreList = pathToProcess.includes("webtoon-genre");

  let isAlbumChapter = false;
  let isAlbum = false;
  if (pathToProcess.includes("read")) {
    pathToProcess.includes("chapter-")
      ? (isAlbumChapter = true) // Current webpage shows chapter releases for the manhwa
      : (isAlbum = true); // Current webpage is the chapter in the album
  }

  const isAdultList = queryParams.includes("post_type=wp-manga&adult=1");

  const isSearchList = queryParams.includes("?s=");

  const isAllWebtoons =
    queryParams.includes("/webtoons") ||
    queryParams.includes("/webtoon-genre/");

  return {
    isCompletedAlbums,
    isGenreList,
    isAlbumChapter,
    isAlbum,
    isAdultList,
    isSearchList,
    isAllWebtoons,
  };
}

function processWebtoons() {
  const page = whatPage(window.location);

  if (page.isCompletedAlbums) {
    removePlainWebtoons("completed");
    removeIgnoredWebtoons("completed");
    highlightWebtoons("completed");
    return;
  }
  if (page.isSearchList) {
    removeIgnoredWebtoons("search");
    highlightWebtoons("search");
    return;
  }
  if (page.isGenreList) {
    removePlainWebtoons("genre");
    removeIgnoredWebtoons("genre");
    highlightWebtoons("genre");
    return;
  }
  if (page.isAdultList) {
    removeIgnoredWebtoons("adult");
    highlightWebtoons("adult");
    return;
  }
  if (page.isAlbum) {
    removeReadRelatedWebtoons();
    highlightWebtoons();
    describeCurrentWebtoon("readAlbum");
    return;
  }
  if (page.isAlbumChapter) {
    removeReadRelatedWebtoons();
    highlightWebtoons();
    describeCurrentWebtoon("readChapter");
    return;
  }
}

function hideHeader() {
  hideElements(".c-sub-header-nav.sticky.with-border");
}

function addCompletedLinkToNavBar() {
  const completedLink = document.querySelector("#menu-item-938");
  const adultLink = completedLink?.cloneNode?.(true);
  if (adultLink?.firstChild) {
    adultLink.firstChild.innerText = "Adult";
    adultLink.firstChild.href =
      "https://www.webtoon.xyz/?s&post_type=wp-manga&adult=1&m_orderby=latest";
    adultLink.id = "menu-item-939";
    completedLink.parentElement.appendChild(adultLink);
  }
}

function removeComments() {
  var blogPostElement = document.querySelector(".c-blog-post");
  var commentsElement = blogPostElement?.nextElementSibling;
  commentsElement?.remove?.();
}
