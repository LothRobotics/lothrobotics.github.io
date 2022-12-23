const sloganText = document.getElementById("slogan-text");
let counter = 0;
const sloganList = [
  '"It is not about doing it is all about making"',
  '"Great power comes with great responsiblty"',
];
const listLength = sloganList.length;

function windowOnLoad() {
  sloganText.innerHTML = sloganList[0];
}

function changeSloganBackwards() {
  if (counter <= 0) {
    counter = listLength - 1;
  } else if (counter > 0) {
    counter--;
  }
  sloganText.innerHTML = sloganList[counter];
}

function changeSloganForwards() {
  if (counter >= listLength - 1) {
    counter = 0;
  } else if (counter < listLength - 1) {
    counter++;
  }
  sloganText.innerHTML = sloganList[counter];
}
