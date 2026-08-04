console.log("Hello world")

let student_name="sri"
console.log("Student name is:"+student_name)
let student_age=21
let course_name="Python Full Stack"
console.log("Student age is:"+student_age,"course name is:"+course_name)
let fee=10000
let discount=10
let discounted_fee=fee-(fee*discount/100)
console.log("Discounted fee is:"+discounted_fee)
let age=20
if(age>=18){
    console.log("Eligible for admission")
}else{
    console.log("Not eligible for admission")

}
for(let i=1;i<=5;i++){
    console.log("Iteration number:"+i)

}
const pi=3.14
console.log("Value of pi is:"+pi)
let student={
    name:"sri",
    age:20,
    course:"Python Full Stack",
    fee:10000
}
console.log("Student Details:"+JSON.stringify(student))
function greetStudent(name){
    console.log("Hello"+name+",welcome to NRIIT Learning Management System")
}
greetStudent(student_name)
console.log("welcome to NRIIT Learning Management System");
let heading=document.getElementById("welcome");
if (heading) {
    heading.innerHTML = "welcome Future software Engineers";
}
console.log("Heading element:", heading)

function squareNumber(num){
    return num*num;
}
let x = squareNumber(5);
console.log("Square of 5 is:", x)





