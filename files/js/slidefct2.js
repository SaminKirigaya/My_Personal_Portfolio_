// Get the reference to the div box
const divBox2 = document.getElementById('part2');

// Calculate the position at which the box should enter the display
const enterPosition2 = window.innerHeight * 0.5;

// Function to check if the div box should be shown or hidden
function checkVisibility2() {
  const boxRect2 = divBox2.getBoundingClientRect();
  const boxTop2 = boxRect2.top;
  const boxBottom2 = boxRect2.bottom;

  if (boxTop2 <= enterPosition2 && boxBottom2 >= enterPosition2) {
    divBox2.style.transform= 'translateX(0%)';
  } else {
    divBox2.style.transform= 'translateX(-100%)';
  }
}
divBox2.style.transition = 'transform 1.3s';
// Event listener for scroll and mousemove events
window.addEventListener('scroll', checkVisibility2);
window.addEventListener('mousemove', checkVisibility2);