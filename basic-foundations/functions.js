// console.log("Global Scope:", this)
// function greet(){
//     console.log("Greet Scope:", this);
// }
// const greetArrow = () => {
//     console.log("This is an arrow function!")
// }
// greet()
// greetArrow()
const course = {
    courseName: "MERN + DSA",
    read: function(){
        this.bindu = "batch-4"
        console.log("this object inside read function:",this)
    },
    write: () => {
        console.log("this object inside write function:",this)
        setTimeout(() => {
            console.log(this);
        },1000)
    }
}
course.write()
course.read()