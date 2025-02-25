let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let mapBox1 = document.querySelector(".map1-box");
let mapBox2 = document.querySelector(".map2-box");
let mapBox3 = document.querySelector(".map3-box");
let demo = document.querySelectorAll(".demo")

let currentIndex = 1;

function default_center_box() {
    mapBox1.style.display = "none";
    mapBox2.style.display = "none";
    mapBox3.style.display = "none";
    box1.style.transform = "translateY(0px)";
    box2.style.transform = "translateY(0px)";
    box3.style.transform = "translateY(0px)";
    demo[0].style.color = "#000";
    demo[1].style.color = "#000";
    demo[2].style.color = "#000";

    mapBox2.style.display = "block";
    box2.style.transform = "translateY(-30px)";
    demo[1].style.color = "#BE2A24";
}
default_center_box();

function updateDisplay() {
    mapBox1.style.display = "none";
    mapBox2.style.display = "none";
    mapBox3.style.display = "none";
    box1.style.transform = "translateY(0px)";
    box2.style.transform = "translateY(0px)";
    box3.style.transform = "translateY(0px)";
    demo[0].style.color = "#000";
    demo[1].style.color = "#000";
    demo[2].style.color = "#000";

    if (currentIndex === 0) {
        mapBox1.style.display = "block";
        box1.style.transform = "translateY(-30px)";
        demo[0].style.color = "#BE2A24";

    } else if (currentIndex === 1) {
        mapBox2.style.display = "block";
        box2.style.transform = "translateY(-30px)";
        demo[1].style.color = "#BE2A24";

    } else if (currentIndex === 2) {
        mapBox3.style.display = "block";
        box3.style.transform = "translateY(-30px)";
        demo[2].style.color = "#BE2A24";

    }
}

box1.addEventListener("click", function () {
    currentIndex = 0;
    updateDisplay();
});

box2.addEventListener("click", function () {
    currentIndex = 1;
    updateDisplay();
});

box3.addEventListener("click", function () {
    currentIndex = 2;
    updateDisplay();
});

prev.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + 3) % 3;
    updateDisplay();
});

next.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % 3;
    updateDisplay();
});
