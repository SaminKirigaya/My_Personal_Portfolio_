// Get the reference to the div box
const divBox5 = document.getElementById('part4');
const divBox6 = document.getElementById('part5');
// Calculate the position at which the box should enter the display
const enterPosition4 = window.innerHeight * 0.5;

// Function to check if the div box should be shown or hidden
function checkVisibility4() {
  const boxRect4 = divBox5.getBoundingClientRect();
  const boxTop4 = boxRect4.top;
  const boxBottom4 = boxRect4.bottom;

  if (boxTop4 <= enterPosition4 && boxBottom4 >= enterPosition4) {
    divBox5.style.opacity= '1';
    divBox6.style.opacity= '1';
  } else {
    divBox5.style.opacity= '0';
    divBox6.style.opacity= '0';
  }
}
divBox5.style.transition = 'opacity 1.3s';
divBox6.style.transition = 'opacity 1.3s';
// Event listener for scroll and mousemove events
window.addEventListener('scroll', checkVisibility4);
window.addEventListener('mousemove', checkVisibility4);