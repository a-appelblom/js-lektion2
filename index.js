console.log(document);

const body = document.querySelector("body"); // Hämtar ett element baserat på en query, väljer endast det första som passar
const header = document.getElementById("header"); // Hämtar en element med ett specifikt id
const myImage = document.getElementById("myImage");

myImage.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1561127954-65393e6644d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhcnxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
);

for (let i = 0; i < 10; i++) {
  const newSection = document.createElement("section"); // Skapar ett element
  newSection.innerText = "A nicer section"; // Läggger till en text i det nya elementet
  body.appendChild(newSection); // Lägger till det nya elementet som sista child i det elementet vi lägger in det i.
}

const mySections = document.querySelectorAll("section"); // Hämtar alla element som matchar en query och lägger dem i en NodeList

mySections.forEach((element, i, list) => {
  const testElement = document.createElement("div");
  testElement.innerText = "A test";
  testElement.style.color = "blue";
  element.classList = "section";
  element.appendChild(testElement);
  element.style.fontSize = `${i * 2}px`;
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const createAndAppend = (tag, parent) => {
  const newElement = document.createElement(tag);
  parent.appendChild(newElement);
  return newElement;
};

// [{ styleAttribute: "width", style: "100%" }];

const createStyle = (element, styleArrayArray) => {
  styleArrayArray.forEach((styleArray) => {
    element.style[styleArray[0]] = styleArray[1];
  });
};

const footer = createAndAppend("footer", body);
const footerTitle = createAndAppend("h2", footer);
const footerList = createAndAppend("div", footer);

for (let i = 0; i < 3; i++) {
  createAndAppend("a", footerList);
  //   footerList.appendChild(document.createElement("a"));
}

footerTitle.innerText = "This is a footer";

createStyle(footerTitle, [
  ["width", "100%"],
  ["textAlign", "center"],
]);

createStyle(footer, [
  ["backgroundColor", "#cece"],
  ["padding", "1rem"],
  ["width", "100%"],
]);

createStyle(footerList, [
  ["width", "100%"],
  ["display", "flex"],
  ["justifyContent", "space-around"],
]);

// footerTitle.style.width = "100%";
// footerTitle.style.textAlign = "center";

// footer.style.backgroundColor = "#cece";
// footer.style.padding = "1rem";
// footer.style.width = "100%";

// footerList.style.width = "100%";
// footerList.style.display = "flex";
// footerList.style.justifyContent = "space-around";

const linkEndpoints = ["", "/utbildaren", "/lektioner"];
const url = "https://javascript.aappelblom.tech";

footerList.childNodes.forEach((element, i) => {
  element.setAttribute("href", `${url}${linkEndpoints[i]}`);
  element.setAttribute("target", "_blank");
  element.setAttribute("rel", "noopener noreferrer");
  if (!linkEndpoints[i]) {
    element.innerText = "Home";
  } else {
    element.innerText = linkEndpoints[i];
  }
});

// footer.appendChild(footerTitle);
// footer.appendChild(footerList);
// body.appendChild(footer);

// body.prepend(footer);

// console.log(mySections);

// let header = document.querySelectorAll(".header");

// console.log(body);
// console.log(header.children[0].innerHTML);

/* En strikt kontroll av värden i javascript görs med 3 likhetstecken
    2 likhetstecken gör att javascript försöker konvertera för att de ska bli av samma typ innan de jämförs.
    Exempelvis är 1==true -> true men 1===true -> false */

// let test = 1 + true;
// if (test === false) {
//   alert(test);
// }
