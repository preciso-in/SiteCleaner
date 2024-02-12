// popup.js
document.addEventListener(
  "DOMContentLoaded",
  function () {
    var checkButton = document.getElementById("check");
    checkButton.addEventListener(
      "click",
      function () {
        alert("Cleaning Page");
        cleanGCPDocs();
      },
      false
    );
  },
  false
);
