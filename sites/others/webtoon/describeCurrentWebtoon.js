function describeCurrentWebtoon(page) {
  function getAlbumName() {
    let albumName = "";
    if (page === "readAlbum") {
      const albumDiv = document.querySelector(
        pathToProcess[page].currentAlbumDiv
      );
      albumName = albumDiv.querySelector(
        pathToProcess[page].currentAlbumNameElement
      ).innerText;
    } else if (page === "readChapter") {
      albumName = document
        .querySelector(pathToProcess[page].albumDiv)
        .querySelector(pathToProcess[page].albumLi)
        .innerText.trim();
    }

    return albumName;
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

  const albumName = getAlbumName();
  const albumDesc_ReadOrIgnore = getAlbumType(albumName);

  if (page === "readManga") {
    const albumDiv = document.querySelector(
      pathToProcess[page].currentAlbumDiv
    );
    albumDiv.appendChild(document.createTextNode(albumDesc_ReadOrIgnore));
  } else {
    document
      .querySelector(pathToProcess[page].currentAlbumH1)
      .insertAdjacentHTML("afterend", albumDesc_ReadOrIgnore);
  }
}
