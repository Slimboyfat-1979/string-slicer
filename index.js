const mainInput = document.querySelector(".input p");
const input = document.querySelector(".input input");
const sliceValues = document.querySelectorAll(".form-control input");
const mainOutput = document.querySelector(".sliced-output")

const sliceIndex = [];

input.addEventListener("keyup", (e) => {
  mainInput.textContent = e.target.value;
});

sliceValues.forEach((value) => {
  value.addEventListener("input", (e) => {
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
  const sliced = mainInput.textContent.slice(first, second);
  console.log(typeof sliced);
  mainOutput.textContent = sliced;
}