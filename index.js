console.log(document);

const body = document.querySelector("body"); // Hämtar ett element baserat på en query, väljer endast det första som passar
const header = document.getElementById("header"); // Hämtar en element med ett specifikt id
const myImage = document.getElementById("myImage"); // Hämtar ett bildelement med en id-selector

// Sätter ett attribut på ett element, exempelvis src, href, alt eller andra attribut som kan finnas på HTML-elementen
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

// Vi itererar här igenom en lista med de element vi fick genom våran selector ovanför.
// För varje element lägger vi till diverse attribut samt lägger till en child.
mySections.forEach((element, i, list) => {
  // En for each callback får 3 argument, Elementet, indexet i arrayen eller listan, arrayen eller listan
  const testElement = document.createElement("div");
  testElement.innerText = "A test";
  testElement.style.color = "blue";
  element.classList = "section";
  element.appendChild(testElement);
  element.style.fontSize = `${i * 2}px`;
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Denna funktion tar in en typ av element som ska skapas samt den parent vi vill att den läggs till i
// Den skapar sedan elementet och appendar det till sin parent.
// Den returnerar sedan det nya elementet så att vi har möjlighet att spara det i en variabel.
const createAndAppend = (tag, parent) => {
  const newElement = document.createElement(tag);
  parent.appendChild(newElement);
  return newElement;
};

// Denna funktion tar in ett element och en array med styles i form av en nästlad array.
// Den loopar igenom och lägger till alla styles på det inskickade elementet.
const createStyle = (element, styleArrayArray) => {
  if (element.length) {
    element.forEach((item) => {
      styleArrayArray.forEach((styleArray) => {
        item.style[styleArray[0]] = styleArray[1];
      });
    });
  } else {
    styleArrayArray.forEach((styleArray) => {
      element.style[styleArray[0]] = styleArray[1];
    });
  }
};

const footer = createAndAppend("footer", body); // Skapar ett element av "footer" typen och lägger till det i body
const footerTitle = createAndAppend("h2", footer); // Skapar ett element av "h2" typen och lägger till det i footer
const footerList = createAndAppend("div", footer); // Skapar ett element av "div" typen och lägger till det i footer
createStyle([body, footer], [["backgroundColor", "red"]]);

// Skapar 3 a taggar och lägger dem i en div nästlad i footer.
for (let i = 0; i < 3; i++) {
  createAndAppend("a", footerList);
  //   footerList.appendChild(document.createElement("a"));
}

footerTitle.innerText = "This is a footer"; // Sätter texten i vår footer-titel

// Lägger till styling vi vill ha på ett element med en array av nästlade arrayer med css-liknande syntax.
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

// Följande rader används inte längre men var och en sätter en specifik styling på ett specifikt element.

// footerTitle.style.width = "100%";
// footerTitle.style.textAlign = "center";

// footer.style.backgroundColor = "#cece";
// footer.style.padding = "1rem";
// footer.style.width = "100%";

// footerList.style.width = "100%";
// footerList.style.display = "flex";
// footerList.style.justifyContent = "space-around";

const linkEndpoints = ["", "/utbildaren", "/lektioner"]; // Hjälpvariabel för att kunna använda en loop
const url = "https://javascript.aappelblom.tech"; // Hjälpvariabel för att slippa skriva denna flera gånger.

// Itererar över de a-taggarna som ligger i footern och sätter href attribut på dem.
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

// Används inte längre, men appendar element till en parent, som nu görs genom en funktion högre upp.
// footer.appendChild(footerTitle);
// footer.appendChild(footerList);
// body.appendChild(footer);

// Det går även att prependa element så att de hamnar först och inte sist.
// body.prepend(footer);

// console.log(mySections);

// Det går att hämta en NodeList baserat på en query på exempelvis en klass som nedan.
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
