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

doOnce(addCompletedLinkToNavBar, cleanPage);
customRepeat(500, () => {
  hideHeader();
  elementsToStyle.forEach((elem) => changeStyle(...elem));
  removeiFrame();
});

function cleanPage() {
  elementsToHide.forEach((x) => hideElements(x));
  elementsToStyle.forEach((elem) => changeStyle(...elem));
  hideWebtoons();
  // removeComments();
}

function hideWebtoons() {
  const pathToProcess = window.location.pathname;
  const queryParams = window.location.search;

  const showingCompletedAlbumsListPage = pathToProcess.includes("completed");

  const showingGenreListPage = pathToProcess.includes("webtoon-genre");

  let showingAlbumChapter = false;
  let showingAlbumPage = false;
  if (pathToProcess.includes("read")) {
    pathToProcess.includes("chapter-")
      ? (showingAlbumChapter = true)
      : (showingAlbumPage = true);
  }

  const showingAdultListPage = queryParams.includes(
    "post_type=wp-manga&adult=1"
  );

  const showingSearchListPage = queryParams.includes("?s=");

  console.log({
    pathToProcess,
    queryParams,
    showingAdultListPage,
    showingAlbumPage,
    showingAlbumChapter,
    showingCompletedAlbumsListPage,
    showingGenreListPage,
  });

  if (showingCompletedAlbumsListPage) {
    removePlainWebtoons("completed");
    removeIgnoredWebtoons("completed");
    highlightWebtoons("completed");
    return;
  }
  if (showingSearchListPage) {
    removeIgnoredWebtoons("search");
    highlightWebtoons("search");
    return;
  }
  if (showingGenreListPage) {
    removePlainWebtoons("genre");
    removeIgnoredWebtoons("genre");
    highlightWebtoons("genre");
    return;
  }
  if (showingAdultListPage) {
    removeIgnoredWebtoons("adult");
    highlightWebtoons("adult");
    return;
  }
  if (showingAlbumPage) {
    removeReadRelatedWebtoons();
    highlightWebtoons();
    highlightCurrentWebtoon();
    return;
  }
  if (showingAlbumChapter) {
    removeReadRelatedWebtoons();
    highlightWebtoons();
    highlightCurrentWebtoon("readChapter");
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
