function highlightCurrentWebtoon(page = "readManga") {
  let albumName = "";
  if (page === "readManga") {
    const albumDiv = document.querySelector(
      pathToProcess[page].currentAlbumDiv
    );
    albumName = albumDiv.querySelector(
      pathToProcess[page].currentAlbumNameElement
    ).innerText;
  } else {
    albumName = document
      .querySelector(pathToProcess[page].albumDiv)
      .querySelector(pathToProcess[page].albumLi)
      .innerText.trim();
  }

  const albumDesc = getAlbumType(albumName);

  if (page === "readManga") {
    const albumDiv = document.querySelector(
      pathToProcess[page].currentAlbumDiv
    );
    albumDiv.appendChild(document.createTextNode(albumDesc));
  } else {
    document
      .querySelector(pathToProcess[page].currentAlbumH1)
      .insertAdjacentHTML("afterend", albumDesc);
  }
}

function getAlbumType(name) {
  const albumName = standardiseString(name);

  let albumType = "Album Not Yet Reviewed";

  if (currentlyReadingList.indexOf(albumName) > -1) {
    albumType = "Currently Reading This Album";
  }

  if (readOrIgnoreWebtoons.indexOf(albumName) > -1) {
    albumType = "Ignored / Read This Album";
  }

  return albumType;
}
