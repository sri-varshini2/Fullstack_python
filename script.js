let heading = document.querySelector("#welcome");

console.log("Heading Element:", heading);

function showMessage() {
    alert("Welcome to NRIIT Learning Management System");
}

function changeHeading() {
    heading.innerHTML = "Welcome to Python Full Stack Course";
    heading.style.color = "blue";
}
