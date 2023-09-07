// header section start
var menu = document.getElementById("menu1");
function myclosebtn() {
    if(menu.style.display == "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}

let a = document.querySelectorAll("#menu1 a");
a.forEach(element => {
    element.onclick = () => menu.style.display = "none"
});

let b = document.querySelectorAll("#navbar1 span");
b.forEach(element => {
    element.onclick = () => menu.style.display = "none"
});
// header section end
