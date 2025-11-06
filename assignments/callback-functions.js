// 1.Simple callback greeting
function greet(name, callback){
    console.log("Hello" + name);
    callback();
}
greet("Himabindu", function(){
    console.log("Have a nice day!")
});




// 2.callback with order
function cookRice(callback){
    console.log("Cooking rice...");
    setTimeout(function(){
        console.log("Rice ready!");
        callback();  //call eatRice
    },2000);  //wait 2 seconds
}
function eatRice() {
    console.log("Eating now");
}
cookRice(eatRice);




//3.Countdown using setInterval
function startCountdown(){
    const num = 5;
    const timer = setInterval(function(){
        console.log(num);
        num --;
        if (num === 0) {
            console.log("Time's up!");
            clearInterval(timer);
        }
    }, 1000); // runs every 1 second
}
startCountdown();




//4.setTimeout + callback chain
function washClothes(callback){
    console.log("Washing clothes...");
    setTimeout(function(){
        console.log("Done washing!");
        callback(); //call dryclothes()
    },3000); //wait 3 seconds
}
function dryClothes() {
    console.log("Drying clothes...");
}
washClothes(dryClothes);




//5.Button click simulation ------> callback-functions.html
//6. Repeated callback practice
function repeatMessage(message, times) {
    let count = 0;
    const timer = setInterval(function(){
        console.log(message);
        count++;
        if(count === times) {
            clearInterval(timer);
        }
    },1000);
}
repeatMessage("Practice makes perfect!",3);



//7.Custom delay function
function waitAndSay(message, delay){
    setTimeout(function(){
        console.log(message);
    },delay);

}
waitAndSay("Good morning!", 1000);
waitAndSay("Good afternoon!",2000);
waitAndSay("Good night!",3000);




//8.Callback inside callback(nesting)
function makeTea(callback) {
    setTimeout(function(){
        console.log("Tea ready!");
        callback();
    },2000);
}
function serveTea(callback) {
    setTimeout(function(){
        console.log("Serving tea...");
        callback();
    },1000);
}
function drinkTea() {
    console.log("Drinking tea");
}
makeTea(function() {
    serveTea(function() {
        drinkTea();
    });
});


