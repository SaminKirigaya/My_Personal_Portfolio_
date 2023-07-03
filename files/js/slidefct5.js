const divBox7 = document.getElementById('part6');

// Calculate the position at which the box should enter the display
const enterPosition5 = window.innerHeight * 0.5;

// Function to check if the div box should be shown or hidden
function checkVisibility5() {
  const boxRect5 = divBox7.getBoundingClientRect();
  const boxTop5 = boxRect5.top;
  const boxBottom5 = boxRect5.bottom;

  if (boxTop5 <= enterPosition5 && boxBottom5 >= enterPosition5) {
    divBox7.style.opacity= '1';
    
  } else {
    divBox7.style.opacity= '0';
    
  }
}
divBox7.style.transition = 'opacity 1.3s';

// Event listener for scroll and mousemove events
window.addEventListener('scroll', checkVisibility5);
window.addEventListener('mousemove', checkVisibility5);