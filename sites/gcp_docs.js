function cleanPage() {
  elementsToHide.forEach(hideElements);
}

const elementsToHide = ["devsite-book-nav-bg"];

doOnce(cleanPage);
