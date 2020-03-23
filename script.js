const onInstructionsChange = field => {};

const cellClick = cell => {
  document.getElementById("startY").value = parseInt(
    cell.getAttribute("row"),
    10
  );
  document.getElementById("startX").value = parseInt(
    cell.getAttribute("col"),
    10
  );
  onParametersChange();
};

const onPlayClick = () => {
  setTimeout(() => {
    processNextInstruction(
      document.getElementById("instructions").value.split("")
    );
  }, 1500);
};

const processNextInstruction = instructions => {
  const lastCell = document.querySelector("[last-cell]");
  const [instruction] = instructions.slice(0, 1);
  if (instruction === "M") {
    const row = parseInt(lastCell.getAttribute("row"), 10);
    const col = parseInt(lastCell.getAttribute("col"), 10);
    const orientation = lastCell.getAttribute("orientation");

    const nextCell = setNextCell(row, col, orientation);
    nextCell.classList.add("rover");
    nextCell.classList.add(`rover-orientation-${orientation}`);
    lastCell.removeAttribute("last-cell");
    nextCell.setAttribute("last-cell", "true");
    nextCell.setAttribute("orientation", orientation);
  } else {
    rotateRover(lastCell, instruction);
  }
  if (instructions.length > 1) {
    setTimeout(() => {
      processNextInstruction(instructions.slice(1));
    }, 1500);
  } else {
    document.querySelector("[last-cell]").classList.add("end-cell");
  }
};
const setNextCell = (row, col, orientation) => {
  let dR = row;
  let dC = col;

  switch (orientation) {
    case "N":
      dR++;
      break;
    case "E":
      dC++;
      break;
    case "S":
      dR--;
      break;
    case "W":
      dC--;
      break;
    default:
  }

  if (dC < 0) {
    dC = 0;
  }
  dC > 5 ? 5 : dC;
  dR < 0 ? 0 : dR;
  dR > 5 ? 5 : dR;

  console.log(`[col="${dC}"][row="${dR}"]`);

  return document.querySelector(`[col="${dC}"][row="${dR}"]`);
};

const onParametersChange = () => {
  const startX = document.getElementById("startX").value;
  const startY = document.getElementById("startY").value;
  const orientation = document.getElementById("orientation").value;

  const plateauCells = document.querySelectorAll(".plateau-cell");
  plateauCells.forEach(plateauCell => {});

  lastStart = document.querySelector(".start-cell");
  if (lastStart) {
    lastStart.classList.remove("rover");
    lastStart.classList.remove("start-cell");
    lastStart.removeAttribute("last-cell");
  }

  const startCell = document.querySelector(
    `[col="${startX}"][row="${startY}"]`
  );

  startCell.classList.add("rover");
  startCell.classList.add("start-cell");
  startCell.setAttribute("last-cell", "true");
  orientRover(startCell, orientation);
};

const rotateRover = (rover, rotateDirection) => {
  const currentOrientation = rover.getAttribute("orientation");
  const newOrientation = setOrientation(currentOrientation, rotateDirection);
  orientRover(rover, newOrientation);
  rover.setAttribute("orientation", newOrientation);
};

const setOrientation = (currentOrientation, rotateDirection) => {
  let currentOrdinal = 0;
  switch (currentOrientation) {
    case "E":
      currentOrdinal = 1;
      break;
    case "S":
      currentOrdinal = 2;
      break;
    case "W":
      currentOrdinal = 3;
      break;
    default:
  }

  let ordinalAdjustment = 0;
  switch (rotateDirection) {
    case "R":
      ordinalAdjustment = 1;
      break;
    case "L":
      ordinalAdjustment = -1;
      break;
    default:
  }
  const newOrientationOrdinal = currentOrdinal + ordinalAdjustment;
  let returnValue = "";
  switch (newOrientationOrdinal) {
    case 0:
    case 4:
      returnValue = "N";
      break;
    case 1:
      returnValue = "E";
      break;
    case 2:
      returnValue = "S";
      break;
    case 3:
    case -1:
      returnValue = "W";
      break;
    default:
  }
  return returnValue;
};

const orientRover = (rover, orientation) => {
  const requiredClass = `rover-orientation-${orientation}`;

  if (rover.className.includes(requiredClass)) {
    return;
  }
  rover.classList.forEach(c => {
    if (c !== requiredClass && c.includes("rover-orientation-")) {
      rover.classList.remove(c);
    }
  });
  rover.classList.add(requiredClass);
  rover.setAttribute("orientation", orientation);
};

const gridInit = g => {
  const plateau = document.getElementById("plateau");
  let html = "";
  for (let rowIndex = g - 1; rowIndex >= 0; --rowIndex) {
    html += "<tr>";
    for (let colIndex = 0; colIndex < g; colIndex++) {
      html += `<td class="plateau-cell" onclick="cellClick(this)" row="${rowIndex}" col="${colIndex}">`;
      html += "</td>";
    }
    html += "</tr>";
  }
  plateau.innerHTML = html;
};
window.addEventListener("DOMContentLoaded", () => {
  gridInit(6);
  onParametersChange();
});
