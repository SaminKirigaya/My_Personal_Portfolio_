// Get the reference to the div box
const divBox = document.getElementById('part1');

// Calculate the position at which the box should enter the display
const enterPosition = window.innerHeight * 0.5;

// Function to check if the div box should be shown or hidden
function checkVisibility() {
  const boxRect = divBox.getBoundingClientRect();
  const boxTop = boxRect.top;
  const boxBottom = boxRect.bottom;

  if (boxTop <= enterPosition && boxBottom >= enterPosition) {
    divBox.style.transform = 'translateX(0%)';
  } else {
    divBox.style.transform = 'translateX(-100%)';
  }
}
divBox.style.transition = 'transform 1.3s';
// Event listener for scroll and mousemove events
window.addEventListener('scroll', checkVisibility);
window.addEventListener('mousemove', checkVisibility);