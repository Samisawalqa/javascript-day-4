document.getElementById("header").innerHTML = "Welcome to Javascript manipulation";

////

var item = document.getElementsByClassName("item")
for (let i in item) {
    item[i].innerHTML = "class item";
}


//////

let para = document.getElementsByTagName("p")
for (let i in item) {
    para[i].innerHTML = "Paragraph Element";
}


///////


document.querySelector(".highlight").innerHTML = "The first highlighted element"


/////


document.querySelectorAll("li")[0].innerHTML = "List item"
document.querySelectorAll("li")[1].innerHTML = "List item"
document.querySelectorAll("li")[2].innerHTML = "List item"
document.querySelectorAll("li")[3].innerHTML = "List item"


//////


document.getElementById("footer").innerHTML = "Footer Updated";


//////

document.querySelectorAll(".box")[0].innerHTML = "Box item"
document.querySelectorAll(".box")[1].innerHTML = "Box item"
document.querySelectorAll(".box")[2].innerHTML = "Box item"
document.querySelectorAll(".box")[3].innerHTML = "Box item"


//////


document.querySelector(".container p").innerHTML = "Combining selectors"


//////


document.querySelector("[data-role=admin]").innerHTML = "admin role"

/////


document.querySelector("span span span").innerHTML = "Span element"