const hourEl = document.getElementById("hour");         
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds"); //for 00s(to get tags need to work on )
const ampmEl = document.getElementById("ampm");
function updateClock(){                                 // fn creation
    let h = new Date().getHours();
    let m = new Date().getMinutes();      // fn to adopt new time
    let s = new Date().getSeconds();   
    let ampm = "AM";
    if(h > 12) {
        h = h-12;                        // for am pm changing
        ampm = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;             // to add double digits
    s = s < 10 ? "0" + s : s;





    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;              // to print the upper fn
    ampmEl.innerText = ampm;
    setTimeout(()=>{
        updateClock()

    }, 1000)
    

}

updateClock();                           // for repeating code 
 




