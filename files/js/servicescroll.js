if(window.innerWidth<580){
    var widsc= document.getElementById("scrollef");
    var secwind= document.getElementById("scrollef2");
    var secbottom = secwind.getBoundingClientRect();
    var firstbottom = widsc.getBoundingClientRect();
    var value = 1;
    var sc = [];
    var n = sc.length;
    var total=0;


    setInterval(()=>{
        if( sc[n-1] == sc[n-2] ){
            total = total+1;
            value = 1;
            
            
        }
        
            widsc.scrollTo(0,value);
            value = value + 1;

            sc.push(widsc.scrollTop)
            n=sc.length;
            console.log(sc[n-1])
            console.log(widsc.scrollTop)
            console.log(secbottom.bottom)

        

        
    },30)
       
    
}
