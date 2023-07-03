if (window.innerWidth < 550) {
    var widsc = document.getElementById("scrollef");
    var secwind = document.getElementById("scrollef2");
    var secbottom = secwind.getBoundingClientRect();
    var firstbottom = widsc.getBoundingClientRect();
    var value = 1;
    var sc = [];
    var n = sc.length;
    var total = 0;
    var newscrl = 0;
    

    var intervalId;
    function reversescroll(){
        
            while(value>0){
            widsc.scrollTo(0, value);
            value = value - 100;
            }

    }
  
    function startScrolling() {
        reversescroll();
        value = 1;
        widsc.addEventListener("mouseover",()=>{
            newstop();
            
            console.log(newscrl)
        })
        newscrl = widsc.scrollY;
        
        intervalId = setInterval(scrollFunction, 30);
    }
    widsc.addEventListener("mouseout",()=>{
        startScrolling();
        
        console.log(newscrl)
    })

    function newstop(){
        clearInterval(intervalId);
    }
  
    function stopScrolling() {
        
      clearInterval(intervalId);
      
      setTimeout(startScrolling, 1000);
    }
  
    function scrollFunction() {
      if (sc[n - 1] == sc[n - 2]) {
        total = total + 1;
        clearInterval(intervalId);
        stopScrolling();
        
   
      }
  
      widsc.scrollTo(0, value);
      value = value + 1;
  
      sc.push(widsc.scrollTop);
      n = sc.length;
   
    }
  
    startScrolling();
  }