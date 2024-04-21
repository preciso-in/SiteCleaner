function highlightWebtoons(page = "readManga") {
  const albumDivs = document.querySelectorAll(pathToProcess[page].albumDiv);

  albumDivs?.forEach((albumDiv) => {
    const albumNameDiv = albumDiv.querySelector(pathToProcess[page].nameDiv);
    let highlightAlbum = false;

    const [nameLink] = albumNameDiv.getElementsByTagName("a");
    const name = standardiseString(nameLink.innerText);

    if (currentlyReadingList.indexOf(name) > -1) {
      highlightAlbum = true;
    }

    if (highlightAlbum) {
      albumDiv.style.borderStyle = "solid";
      albumDiv.style.borderColor = "rgba(157,32,176,0.22)";
      albumDiv.style.boxShadow =
        "rgba(157,32,176,0.22) 0px 14px 28px, rgba(157,32,176,0.18) 0px 10px 10px";
    }
  });
}
