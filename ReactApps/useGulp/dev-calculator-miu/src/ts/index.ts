const main = <HTMLElement>document.querySelector("main");
const headerMode = <HTMLElement>document.querySelector("header>h1");
const tools = <HTMLElement>document.querySelector("#tools");
const targetValue = <HTMLElement>document.querySelector("#targetValue");
const selectMode = <HTMLSelectElement>document.querySelector("#selectMode");
const historyResult = <HTMLParagraphElement>document.querySelector("#history")

window.addEventListener("load", e => {
  targetValue.style.fontSize = `${Math.max(30, 81 - targetValue.innerText.length)}px`;
});

const returnResult = (targetResult : string) : string => {
  return targetResult.replace(",", ".").replace("e", String(Math.E))
}

const setupDesk = ({main, tools}: {main: HTMLElement; tools: HTMLElement}): void => {
  switch (main.dataset.mode) {
    case "default":
      tools.innerHTML = `
        <div
          class="grid grid-rows-2 grid-cols-5 max-sm:gap-4"
          id="operatorsRow">
          <button class="sm:border-r sm:border-b sm:h-[70px] sm:border-[#8d8d8d] text-orange-700 h-[40px]">AC</button>
          <button class="sm:border-r sm:border-b sm:h-[70px] sm:border-[#8d8d8d] text-orange-700 h-[40px]">C</button>
          <button class="sm:border-r sm:border-b sm:h-[70px] sm:border-[#8d8d8d] text-orange-700 h-[40px]">+</button>
          <button class="sm:border-r sm:border-b sm:h-[70px] sm:border-[#8d8d8d] text-orange-700 h-[40px]">-</button>
          <button class="sm:border-b sm:h-[70px] sm:border-[#8d8d8d] text-orange-700 h-[40px]">=</button>
          ${(() => {
            let numButtons: string = "";
            const numList = <Array<string>>["1", "2", "3", "4", ".", "5", "6", "7", "8", "e", "9", "0", "*", "/", "<"];

            numList.forEach((elemNum, indexNum) => {
              numButtons += getBtnCol({length: numList.length, index: indexNum, inner: elemNum});
            });

            return numButtons;
          })()}
        </div>
      `;
      break;
    default:
      tools.innerHTML = `sosi`;
      break;
  }
};

const getBtnCol = ({length, index, inner}: {length: number; index: number; inner: string}): string =>
  (index + 1) % 5 == 0
    ? `<button class="sm:h-[70px] ${
        length - index > 5 ? `sm:border-b` : ``
      } sm:border-[#8d8d8d] text-orange-700 h-[40px]">${inner === "." ? `,` : inner}</button>`
    : `<button class="sm:border-r sm:h-[70px] ${
        length - index > 5 ? `sm:border-b` : ``
      } sm:border-[#8d8d8d] h-[40px]">${inner}</button>`;

const setTargetValue =
  (targetValue: HTMLElement, btnValue: string): (() => void) =>
  () => {
    targetValue.style.fontSize = `${Math.round(Math.max(30, 81 - targetValue.innerText.length / 2))}px`;
    
    switch (btnValue) {
      case "=":
        targetValue.innerText += `=${eval(returnResult(targetValue.innerText))}`;
        targetValue.innerText = targetValue.innerText.replace(".", ",");
        return;
      case "C":
      case "AC":
        targetValue.innerText = `0`;
        return;
      case "<":
        if (targetValue.innerText.length > 1) {
          targetValue.innerText = targetValue.innerText.slice(0, -1);
          return;
        }
        targetValue.innerText = `0`;
        return;
      case ".":
        if (targetValue.innerText.at(-1) !== ",") {
          targetValue.innerText += `,`;
          return
        }
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
      case "e":
        if (targetValue.innerText.at(-1) === "0") {
          if (targetValue.innerText.at(0) === "0") {
            targetValue.innerText = ``;
          }
        }
        targetValue.innerText += btnValue;
        return;
      default:
        targetValue.innerText += btnValue;
        return;
    }
  };

setupDesk({tools, main});

selectMode.addEventListener("change", () => {
  main.dataset.mode = selectMode.value;
  setupDesk({tools, main});
});

document.querySelectorAll("button").forEach(e => {
  e.addEventListener("click", setTargetValue(targetValue, e.innerText));
});
