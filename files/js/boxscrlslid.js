
if(window.innerWidth>1023){
    const divBox11 = document.getElementById('helo');

    // Calculate the position at which the box should enter the display
    const et1 = window.innerHeight * 0.5;
    
    // Function to check if the div box should be shown or hidden
    function checkvisb() {
      const boxRect10 = divBox11.getBoundingClientRect();
      const boxTop10 = boxRect10.top;
      const boxBottom10 = boxRect10.bottom;
    
      if (boxTop10 <= et1 && boxBottom10 >= et1) {
        divBox11.style.transform = 'translateX(0%)';
      } else {
        divBox11.style.transform = 'translateX(-100%)';
      }
    }
    divBox11.style.transition = 'transform 1.3s';
    // Event listener for scroll and mousemove events
    window.addEventListener('scroll', checkvisb);
    window.addEventListener('mousemove', checkvisb);
}

