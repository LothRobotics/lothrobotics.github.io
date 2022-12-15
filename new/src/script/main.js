const testimonialsText = document.getElementById("testimonialsText"),
  testimonialList = ["'It's not about doing, it's all about making'", "'Great power comes with great'"];

function changeTestimonials() {
  for (let i = 0; i < testimonialList.length; i++) {
    const testimonialItem = testimonialList[i];
    testimonialsText.innerHTML = testimonialItem
  }
}
