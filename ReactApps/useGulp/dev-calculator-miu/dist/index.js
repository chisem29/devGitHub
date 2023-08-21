var main = document.querySelector("main");
var headerMode = document.querySelector("header>h1");
var tools = document.querySelector("#tools");
var targetValue = document.querySelector("#targetValue");
var selectMode = document.querySelector("#selectMode");
var historyResult = document.querySelector("#history");
window.addEventListener("load", function (e) {
    targetValue.style.fontSize = "".concat(Math.max(30, 81 - targetValue.innerText.length), "px");
});
var returnResult = function (targetResult) {
    return targetResult.replace(",", ".").replace("e", String(Math.E));
};
var setupDesk = function (_a) {
    var main = _a.main, tools = _a.tools;
    switch (main.dataset.mode) {
        case "default":
            tools.innerHTML = "\n        <div\n          class=\"grid grid-rows-2 grid-cols-5 max-sm:gap-4\"\n          id=\"operatorsRow\">\n          <button class=\"sm:border-r sm:border-b sm:h-[70px] sm:border-[#8d8d8d] text-orange-700 h-[40px]\">AC</button>\n          <button class=\"sm:border-r sm:border-b sm:h-[70px] sm:border-[#8d8d8d] text-orange-700 h-[40px]\">C</button>\n          <button class=\"sm:border-r sm:border-b sm:h-[70px] sm:border-[#8d8d8d] text-orange-700 h-[40px]\">+</button>\n          <button class=\"sm:border-r sm:border-b sm:h-[70px] sm:border-[#8d8d8d] text-orange-700 h-[40px]\">-</button>\n          <button class=\"sm:border-b sm:h-[70px] sm:border-[#8d8d8d] text-orange-700 h-[40px]\">=</button>\n          ".concat((function () {
                var numButtons = "";
                var numList = ["1", "2", "3", "4", ".", "5", "6", "7", "8", "e", "9", "0", "*", "/", "<"];
                numList.forEach(function (elemNum, indexNum) {
                    numButtons += getBtnCol({ length: numList.length, index: indexNum, inner: elemNum });
                });
                return numButtons;
            })(), "\n        </div>\n      ");
            break;
        default:
            tools.innerHTML = "sosi";
            break;
    }
};
var getBtnCol = function (_a) {
    var length = _a.length, index = _a.index, inner = _a.inner;
    return (index + 1) % 5 == 0
        ? "<button class=\"sm:h-[70px] ".concat(length - index > 5 ? "sm:border-b" : "", " sm:border-[#8d8d8d] text-orange-700 h-[40px]\">").concat(inner === "." ? "," : inner, "</button>")
        : "<button class=\"sm:border-r sm:h-[70px] ".concat(length - index > 5 ? "sm:border-b" : "", " sm:border-[#8d8d8d] h-[40px]\">").concat(inner, "</button>");
};
var setTargetValue = function (targetValue, btnValue) {
    return function () {
        targetValue.style.fontSize = "".concat(Math.round(Math.max(30, 81 - targetValue.innerText.length / 2)), "px");
        switch (btnValue) {
            case "=":
                targetValue.innerText += "=".concat(eval(returnResult(targetValue.innerText)));
                targetValue.innerText = targetValue.innerText.replace(".", ",");
                return;
            case "C":
            case "AC":
                targetValue.innerText = "0";
                return;
            case "<":
                if (targetValue.innerText.length > 1) {
                    targetValue.innerText = targetValue.innerText.slice(0, -1);
                    return;
                }
                targetValue.innerText = "0";
                return;
            case ".":
                if (targetValue.innerText.at(-1) !== ",") {
                    targetValue.innerText += ",";
                    return;
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
                        targetValue.innerText = "";
                    }
                }
                targetValue.innerText += btnValue;
                return;
            default:
                targetValue.innerText += btnValue;
                return;
        }
    };
};
setupDesk({ tools: tools, main: main });
selectMode.addEventListener("change", function () {
    main.dataset.mode = selectMode.value;
    setupDesk({ tools: tools, main: main });
});
document.querySelectorAll("button").forEach(function (e) {
    e.addEventListener("click", setTargetValue(targetValue, e.innerText));
});
