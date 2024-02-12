const elementsToHide = [
  ".page_right_wrapper",
  ".scroll-paginate",
  ".f-menulist-in.footer-menu-open",
  ".social_icons_mobile_wrapper",
  ".social_icons_list",
];

const elementsToStyle = [[".page_left_wrapper", "width", "90%"]];

doOnce(cleanPage);
repeat(() => {
  cleanPage();
});

function cleanPage() {
  elementsToHide.forEach((elem) => hideElements(elem));
  elementsToStyle.forEach((elem) => changeStyle(...elem));
}
