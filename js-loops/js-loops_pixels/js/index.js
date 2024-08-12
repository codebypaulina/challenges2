console.clear();
const pixelValues = [
  [
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
  ],
  [
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
  ],
  [
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
  ],
  [
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
  ],
  [
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
  ],
];

const canvas = document.querySelector('[data-js="canvas"]');

for (
  let rowPixelValues = 0;
  rowPixelValues < pixelValues.length;
  rowPixelValues++
) {
  const currentRow = pixelValues[rowPixelValues];

  for (
    let columnPixelValues = 0;
    columnPixelValues < currentRow.length;
    columnPixelValues++
  ) {
    const colorPixel = currentRow[columnPixelValues];

    const pixelElement = document.createElement("div");
    pixelElement.classList.add("pixel");
    pixelElement.style.backgroundColor = colorPixel;

    canvas.append(pixelElement);
  }
}

/********************** IN WORTEN: **********************
 
for (
  let rowPixelValues = 0; // Startpunkt der Loop = erste Zeile
  rowPixelValues < pixelValues.length; // Loop wird ausgeführt, solange rowPixelValues kleiner ist als pixelValues.length: Loop wird so oft ausgeführt, wie es Zeilen in pixelValues gibt
  rowPixelValues++ // bei jedem Durchlauf wird rowPixelValues auf den nächsten Zeilenindex gesetzt
) {
  const currentRow = pixelValues[rowPixelValues]; // aktuelle Zeile aus pixelValues-Array; jede Zeile wird durchlaufen

  for (
    let columnPixelValues = 0; // Startpunkt der Loop = erste Spalte in aktueller Zeile
    columnPixelValues < currentRow.length; // Loop wird ausgeführt, solange columnPixelValues kleiner ist als currentRow.length: Loop wird so oft ausgeführt, wie es Spalten in der aktuellen Zeile gibt
    columnPixelValues++ // bei jedem Durchlauf wird columnPixelValues auf den nächsten Spaltenindex gesetzt
  ) {
    const colorPixel = currentRow[columnPixelValues]; // Farbwert der aktuellen Spalte aus der aktuellen Zeile; jeder Farbwert in jeder Zeile wird durchlaufen

    const pixelElement = document.createElement("div");
    pixelElement.classList.add("pixel");
    pixelElement.style.backgroundColor = colorPixel;

    canvas.append(pixelElement);
  }
}

********************************************************/
