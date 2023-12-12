let boxclass = document.getElementsByClassName("box");
let boxRemove = [];
let win = 0, count = 0, loss = 0;

for (let i = 0; i < 10; i++) {
    let randomchar = Math.floor(Math.random() * 26) + 65;
    boxclass[i].textContent = String.fromCharCode(randomchar);
}

document.addEventListener('keydown', function (event) {
    revent(event);
});

function revent(event) {
    for (let i = 0; i < 10; i++) {
        if (boxclass[i].textContent === event.key.toUpperCase()) {
            Remove(i);
            Add(i);
            count++;
            break;
        }
    }
}

function Remove(index) {
    boxRemove.push(boxclass[index]);
    boxclass[index].remove();
}

function Add(index) {
    let time = Math.floor(Math.random() * 10);
    let timedelay = Math.floor(Math.random() * 5);
    let lastbox = boxRemove.pop();
    document.body.appendChild(lastbox);
    let randomchar = Math.floor(Math.random() * 26) + 65;
    boxclass[index].textContent = String.fromCharCode(randomchar);
    boxclass[index].style.Animation = `slide-in ${time}s ease-in ${timedelay}s infinite `;
}
let timer = 60;
let timerid=document.getElementById("timer");
let Interval=setInterval(function () {
        timer--;
        timerid.innerHTML=timer;
    }, 1000);




// Modification in future for losses boxes

// function checkloss() {
//     for (let k = 0; k < 10; k++) {
//         let pos = boxclass[k].getBoundingClientRect();
//         if (pos.bottom > window.innerHeight && !boxclass[i].processed) {
//             count--;
//             console.log("Box " + i + " reached the bottom!");
//             boxclass[i].processed = true; 
//         } else if (pos.bottom <= window.innerHeight && boxclass[i].processed) {
//             boxclass[i].processed = false;
//         }
//     }
//     requestAnimationFrame(checkloss);
// }

// for (let l = 0; l < 10; l++) {
//     boxclass[l].processed = false;
// }

// requestAnimationFrame(checkloss);

setTimeout(() => {
    let boxes = document.body.getElementsByClassName("box");
    Array.from(boxes).forEach(box => {
        box.remove();
    })
    clearInterval(Interval);
    timerid.remove();
    let newEle = document.createElement("div");
    newEle.className = "Result";
    if (count > 50) {
        newEle.innerHTML = `<b class="bold">Excellent,</b>Your score is ${count}. `;
    } else if (count > 30) {
        newEle.innerHTML = `<b class="bold">Good,</b>Your score is ${count}.`;
    } else {
        newEle.innerHTML = `Your score is ${count}.`;
    }
    document.body.appendChild(newEle);

    document.body.style.cssText = "display: flex;flex-direction: column;justify-content: center;align-items: center;font-size:3rem;color:blue;background-color:yellow;height:100vh;";
}, 60000);

