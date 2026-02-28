const mainInput = document.querySelector(".input p");
const input = document.querySelector(".input input");
const sliceValues = document.querySelectorAll(".form-control input");
const mainOutput = document.querySelector(".sliced-output");

const sliceIndex = [];

window.addEventListener('DOMContentLoaded', () => {
    sliceIndex[0] = 0;
    sliceIndex[1] = 0;
})

input.addEventListener("keyup", (e) => {
  mainInput.textContent = e.target.value;
  mainOutput.textContent = e.target.value;
});

sliceValues.forEach((value) => {
  value.addEventListener("input", (e) => {
    if(e.target.value <= 0) {
        e.target.value = 0;
    }
    const type = e.target.dataset.type;
    const value = e.target.value;
    if (type === "firstIndex") {
      sliceIndex.splice(0, 1, value);
    }
    if (type === "secondIndex") {
      sliceIndex.splice(1, 1, value);
    }

    if (sliceIndex[0] !== undefined && sliceIndex[1] !== undefined) {
      runSlicer(sliceIndex);
    }
  });
});

function runSlicer(sliceIndex) {
  let [first, second] = sliceIndex;
  first = Number(first);
  second = Number(second);
  console.log(input.value);

  const letters = mainInput.textContent.split("");
  console.log(letters);
  const sliced = letters.map((letter, idx) => {
    if (idx >= first && idx < second) {
      return `<span style="color: yellow; background-color:black;">${letter}</span>`;
    }else{
        return letter;
    }
  });
  mainInput.textContent = mainInput.textContent.toLowerCase();
  const metaData = {
    string: mainInput.textContent,
    length: mainInput.textContent.length,
    startIndex: first,
    endIndex: second,
    firstIndexletter: mainInput.textContent[sliceIndex[0]],
    secondIndexLetter: mainInput.textContent[sliceIndex[1]]
  }

  renderMetadata(metaData)

  mainOutput.innerHTML = sliced.join("");
}

function renderMetadata(data) {
    const fieldSet = document.getElementById("meta");
    const pre = document.createElement("pre")
    const metaObject =  JSON.stringify(data, null, 2)
    pre.textContent = metaObject;
    fieldSet.appendChild(pre)
    fieldSet.scrollTop = fieldSet.scrollHeight
}
