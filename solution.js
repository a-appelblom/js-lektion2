"use strict";

const HEADING_COLOR = "darkgoldenrod";
// helper functions >>>>>>>>>>>>>>>>>>>

/**
 * @param {string} tag
 * @param {HTMLElement} parent
 * @param {?string} textContent
 * @returns {HTMLElement} new element
 */
const createAndAppend = (tag, parent, textContent) => {
  const newElement = document.createElement(tag);
  if (textContent) {
    newElement.innerText = textContent;
  }
  parent.appendChild(newElement);
  return newElement;
};

/**
 * @param {HTMLElement} element
 * @param {Array<Array<string>>} styleArrayArray
 * @returns {HTMLElement} new element
 */
const createStyle = (element, styleArrayArray) => {
  styleArrayArray.forEach(([attr, style]) => {
    element.style[attr] = style;
  });
};
/**
 * @param {HTMLElement} element
 * @param {Array<Array<string>>} attrArrayArray
 * @returns {HTMLElement} new element
 */
const createAttributes = (element, attrArrayArray) => {
  attrArrayArray.forEach(([attr, val]) => {
    element.setAttribute(attr, val);
  });
};

// Body >>>>>>>>>>>>>>>
const body = document.querySelector("body");
createStyle(body, [
  ["display", "flex"],
  ["flexDirection", "column"],
  ["alignItems", "center"],
  ["backgroundColor", "#030303"],
  ["color", "#fff"],
]);

// Header >>>>>>>>>>>>>>>>>>>>>>
const header = createAndAppend("header", body);
createStyle(header, [["margin", "3rem auto"]]);

const pageTitle = createAndAppend(
  "h1",
  header,
  "This page is made in JavaScript"
);

createStyle(pageTitle, [
  ["fonstSize", "2.5rem"],
  ["marginBottom", "1rem"],
]);

const pageSubTitle = createAndAppend(
  "p",
  header,
  "I built this using only JavaScript"
);

createStyle(pageSubTitle, [["textAlign", "center"]]);

// MAIN >>>>>>>>>>>>>>>>>
const main = createAndAppend("main", body);

// Image Section >>>>>>>>>>>>>>>>
const imageSection = createAndAppend("section", main);
const imageSectionTitle = createAndAppend(
  "h2",
  imageSection,
  "This is the main section"
);
const imageSectionContent = createAndAppend("div", imageSection);
createStyle(imageSectionContent, [
  ["display", "grid"],
  ["gridTemplateColumns", "1fr 1fr"],
]);

const textContent = createAndAppend("div", imageSectionContent);
createStyle(textContent, [
  ["display", "grid"],
  ["placeContent", "center"],
]);
const p1 = createAndAppend(
  "p",
  textContent,
  "Lets have some text next to an image"
);
const p2 = createAndAppend(
  "p",
  textContent,
  "And some more text just to make it interesting"
);

const imageSectionImage = createAndAppend("img", imageSectionContent);
createAttributes(imageSectionImage, [
  [
    "src",
    "https://images.unsplash.com/photo-1544377712-f7a323240581?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGJlYXJ8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ],
  ["alt", "A sneezing cute polar bear"],
]);

// Grid section >>>>>>>>>>>>>>>>>>>>>>>>>>>
const gridSection = createAndAppend("section", main);
const gridSectionTitle = createAndAppend(
  "h2",
  gridSection,
  "This is the main section"
);
const gridSectionGrid = createAndAppend("section", gridSection);
createStyle(gridSectionGrid, [
  ["display", "grid"],
  ["gridTemplateColumns", "repeat(3, 1fr)"],
  ["gap", "1rem"],
]);

// Multiples >>>>>>>>>>>>>>

const headings = document.querySelectorAll("h1,h2,h3");
headings.forEach((element) => {
  createStyle(element, [
    ["color", HEADING_COLOR],
    ["textAlign", "center"],
  ]);
  if (element.nodeName === "H2") {
    createStyle(element, [
      ["marginBottom", "1rem"],
      ["fontSize", "1.5rem"],
    ]);
  }
});
