const elementsToHide = [
  "._3ABz7 ",
  ".socialwidget",
  "._2364r",
  ".gbhmV",
  "._3B93c",
  '[data-mod="sidebar"]',
  ".navigation",
  ".slick-track",
  ".contentwrapper.rpos",
  "[itemtype='https://schema.org/BreadcrumbList']",
  "#header-masthead",
  ".header-container.contentwrapper",
  ".nextASwidget",
  ".cmtwrapper",
  ".trending_list",
  "#widget-tp-sticky",
  "header#header",
  ".sidebar",
  ".leftsocial",
  "footer",
  ".footer_wrapper",
];

const elementsToStyle = [
  ["._15wZO .vX3bQ", "flex", "unset"],
  ["._15wZO .TFt6P", "width", "100%"],
  ["._15wZO ._2zb3b+._3B0JD", "width", "100%"],
];

doOnce(cleanPage);
repeat(() => {
  cleanPage();
});

function cleanPage() {
  elementsToHide.forEach((elem) => hideElements(elem));
  elementsToStyle.forEach((elem) => changeStyle(...elem));
}
