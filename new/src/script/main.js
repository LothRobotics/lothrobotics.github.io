const testimonialsText = document.getElementById("testimonialsText");
const testimonialsList = [
  "'It's not about doing, it's all about making'",
  "'Great power comes with great responsibility'",
];
const testimonialsListLength = testimonialsList.length;
let counter = testimonialsList.indexOf(testimonialsText.innerHTML);

function windowOnload() {
  testimonialsText.innerHTML = testimonialsList[0];
  counter = testimonialsList.indexOf(testimonialsText.innerHTML);
}

function changeTestimonialsForwards() {
  if ( counter < testimonialsListLength - 1 ) {
    counter++;
  }else{
    counter = 0;
  }
  testimonialsText.innerHTML = testimonialsList[counter];
}

function changeTestimonialsBackwards() {
  if ( counter > 0 ) {
    counter--;
  }else{
    counter = testimonialsListLength - 1;
  }
  testimonialsText.innerHTML = testimonialsList[counter]
}
