const pathToProcess = {
  completed: {
    albumDiv: ".col-12.col-md-4.badge-pos-2",
    nameDiv: ".post-title.font-title",
  },
  genre: {
    albumDiv: ".col-12.col-md-6.badge-pos-2",
    nameDiv: ".post-title.font-title",
  },
  adult: {
    albumDiv: ".row.c-tabs-item__content",
    nameDiv: ".post-title",
  },
  readManga: {
    albumDiv: ".related-reading-wrap.related-style-1",
    nameDiv: ".widget-title",
    currentAlbumDiv: ".post-title",
    currentAlbumNameElement: "h1",
  },
  readChapter: {
    albumDiv: ".entry-header_wrap .c-breadcrumb",
    albumLi: "li:nth-child(2)",
    currentAlbumNameElement: "a",
    currentAlbumH1: "#chapter-heading",
  },
  search: {
    albumDiv: ".row.c-tabs-item__content",
    nameDiv: ".post-title",
  },
};

function standardiseString(str) {
  const adjustedName = str.replaceAll("’", "'").toLowerCase().trim();
  return adjustedName;
}
