// //Challenge 1 — Sequential Cooking Steps (callback chain)
// let totaltime = 0;
// function boilWater(callback) {
//     console.log("Boiling water...");
//     setTimeout(function() {
//         console.log("Water boiled!");
//         totaltime += 2000; //add 2 seconds
//         callback();
//     },2000);
// }
// function addNoodles(callback) { //add noodles
//     console.log("Adding noodles...");
//     setTimeout(function() {
//         console.log("Noodles cooked!");
//         totaltime += 3000; //add 3 seconds
//         callback();
//     },3000);
// }
// function serveNoodles() {
//     console.log("Serving noodles");
//     //print total cooking time in seconds
//     console.log("Total cooking time:", totaltime / 1000, "seconds");
// }
// //calling them in oder(callback chain)
// boilWater(function(){
//     addNoodles(function(){
//         serveNoodles();
//     });
// });
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
