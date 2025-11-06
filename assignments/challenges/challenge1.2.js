//Challenge 2 — Countdown Timer (clearInterval logic)
function countDown(startNumber) {
    let number = startNumber;
    const timer = setInterval(function() {
        console.log(number);
        number--;
        if(number === 0){
            console.log("Happy New Year!🎉");
            clearInterval(timer); //stop the interval
        }
    },1000);
}
countDown(5);
