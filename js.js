document.addEventListener("DOMContentLoaded", createBoard);

const section = document.querySelectorAll(".section");
const resutl = document.querySelector(".result span");
const time = document.querySelector(".time span");
const startOverBtn = document.getElementsByClassName("startOver")[0];

function createBoard() {
    let hitPosition = 0;
    let mole = 0;
    let score = 0;
    let count = 60;
    let moveMoleInterval = setInterval(randomSection, 800);
    let coundDownInterval = setInterval(timeCountDown, 1000);

    startOverBtn.addEventListener("click", createBoard);

    time.innerHTML = `${count}`;
    resutl.innerHTML = `${score}`;
    section.forEach((section) => section.addEventListener("mousedown", whack));

    function randomSection() {
        section.forEach((item) => {
            item.classList.remove("mole");
        });
        let random = Math.floor(Math.random() * 9);
        mole = random;

        section[random].classList.add("mole");
    }

    function whack() {
        hitPosition = this.id;
        whackedaMole();
    }

    function whackedaMole() {
        if (hitPosition == mole) {
            score++;
            resutl.innerHTML = `${score}`;
        }
    }

    function timeCountDown() {
        count--;
        time.innerHTML = `${count}`;
        if (count === 0) {
            const p = document.createElement("p");
            p.innerHTML = "time out";
            p.classList.add("timeOut");
            resutl.classList.add("finalResult");
            resutl.append(p);
            clearInterval(coundDownInterval);
            clearInterval(moveMoleInterval);
        }
    }
}