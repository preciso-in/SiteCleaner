function removeIgnoredWebtoons(page) {
  const albumDivs = document.querySelectorAll(pathToProcess[page].albumDiv);

  albumDivs.forEach((albumDiv) => {
    const albumNameDiv = albumDiv.querySelector(pathToProcess[page].nameDiv);
    let ignoreAlbum = false;

    const [nameLink] = albumNameDiv.getElementsByTagName("a");
    const name = standardiseString(nameLink.innerText);

    if (readOrIgnoreWebtoons.indexOf(name) > -1) {
      ignoreAlbum = true;
    }

    if (ignoreAlbum) {
      albumDiv.style.display = "none";
    }
  });
}

function removeReadRelatedWebtoons() {
  const albumDivs = document
    .querySelector(".row.c-row.related-manga")
    ?.querySelectorAll(".col-12.col-sm-6.col-md-3");

  albumDivs?.forEach((albumDiv) => {
    const albumNameDiv = albumDiv?.querySelector?.(".related-reading-content");
    let ignoreAlbum = false;
    const [nameLink] = albumNameDiv?.getElementsByTagName?.("a");

    const name = standardiseString(nameLink?.innerText);
    if (readOrIgnoreWebtoons?.indexOf?.(name) > -1) {
      ignoreAlbum = true;
    }
    if (ignoreAlbum) {
      albumDiv.style.display = "none";
    }
  });
}

function removePlainWebtoons(page) {
  console.log("removing plain webtoons");

  const albums = document.querySelectorAll(pathToProcess[page].albumDiv);
  albums?.forEach((album) => {
    let keepAlbum = false;
    const [...spans] = album?.getElementsByTagName?.("span");
    if (Array.isArray(spans)) {
      spans.forEach((span) => {
        if (span) {
          if ([...span?.classList].includes("adult")) {
            keepAlbum = true;
          }
        }
      });
    }

    if (!keepAlbum) {
      album.style.display = "none";
    }
  });
}
