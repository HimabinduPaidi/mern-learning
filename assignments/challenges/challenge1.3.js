// Challenge 3 — Digital Clock Simulation
function showTime(){
    let dateObj=new Date();//get current date & time
    let h=dateObj.getHours();
    let m=dateObj.getMinutes();
    let s=dateObj.getSeconds();
    //add leading 0 if single digit
    if(h<10)
        h="0"+h
    if(m<10)
        m="0"+m
    if(s<10)
        s="0"+s
    console.log(h+":"+m+":"+s);
}
let id=setInterval(showTime,1000);
setTimeout(()=>{
    clearInterval(id);
    console.log("clock stopped");
},10000);