//1. Print full name
function printFullName(firstName, lastName){
    console.log(firstName + " " + lastName)
}
printFullName("Hima", "Bindu")
printFullName("Bindu","Hima")




//2. Area of rectangle
function areaOfRectangle(length,breadth){
    return length * breadth;
}
let res= areaOfRectangle(12,8);
console.log(res);




//3. Function calling another function
function greetUser(){
    console.log("Welcome to Student Tribe!");
}
function showmenu(){
    greetUser();
    console.log("Here is your course menu!");
}
showmenu();




//4.  Add ingredients
function makeJuice(fruit1, fruit2, liquid){
    return "Juice made of "+ fruit1 + " + " + fruit2 + " + " + liquid;
}
let juice = makeJuice("Apple" ,"Banana" ,"Milk");
console.log(juice);




//5.  Calculator (using if-else)
function calculate(num1,num2,operation){
    if(operation == "add"){
        return num1 + num2
    }
    else if(operation == "subtract"){
        return num1 - num2
    }
    else if(operation == "multiply"){
        return num1*num2
    }
    else{
        return "Invalid operation"
    }
}
console.log(calculate(12,3,"add"));
console.log(calculate(12,3,"subtract"));
console.log(calculate(12,3,"multiply"));
