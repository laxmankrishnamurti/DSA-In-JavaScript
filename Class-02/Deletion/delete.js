const input = document.querySelector("#input");
const button = document.querySelector("#submit");
const defaultDisplay = document.querySelector("#defaultDisplay");
const display = document.querySelector("#display");

const marks = [91, 95, 89, 81, 85, 75];
defaultDisplay.innerHTML = `Item list : ${marks} :: Input should be less than total number of display Item. {Negative Integer is not allowed}`;

//Validation is important without this it creates some problems. So, be careful about Validation

const delFunction = () => {
  const delPosition = parseInt(input.value);

  if (marks.length == 0) {
    alert("List is empty");
  }

  for (let i = delPosition; i < marks.length - 1; i++) {
    marks[i] = marks[i + 1];
  }
  marks.length = marks.length - 1;

  display.innerHTML = `Now, The Remain items : ${marks}`;
};

button.addEventListener("click", delFunction);
