////////////////////Lev1_1_js-vertiefung_BOM_setTimeout_setInterval:
// setTimeout(function textDelay() {
//     console.log("it's me")

// }, 3000)
//********************************************************* */
// let myLet = setInterval(dateDelay, 2000)
// function dateDelay() {
//     let d = new Date();
//     var t = d.toLocaleTimeString();
//     console.log(t)
// }
//********************************************************* */
// let myLet = setInterval(numDelay, 1000)
// let num = 11
// let text = "Feier Abend!!!!"
// function numDelay() {
//     if (num) {
//         num--
//         console.log(num)
//     } else {
//         console.log(text)
//         clearInterval(myLet)
//     }
// }
///////////////////////////////////////////////////////////////////
///////////////////Lev1_2_js-vertiefung_BOM_setTimeout_setInterval:
// let ergebnis = document.querySelector(".zeit");
// let num = 100
// let set = setInterval(zahlen, 1000)
// function zahlen() {
//     if (num) {
//         let a = num--
//         ergebnis.innerHTML = a + "%"
//     } else {
//         clearInterval(set)
//     }
// }
////////////////////Lev2_1_js-vertiefung_BOM_meldung
// let ergebnis = document.getElementById("count")
// let hide = document.querySelector(".message")
// let num = 10
// let set = setInterval(counter, 1000)
// function counter() {
//     if (num <= 0) {
//         hide.style.display = 'none'
//         clearInterval(set)
//     } else {
//         let a = num--
//         ergebnis.innerHTML = a
//     }
// }
///////////////////////////////////////////////////////////////////
///////////////////Lev2_2_js-vertiefung_BOM_countdown
let min = document.getElementById("minutes")
let time = document.getElementById("time")
let minutes;
let secondes = 0;
let timeId;
function startMinCountdown() {
    minutes = min.value
    timeId = setInterval(() => {
        if (secondes == 0) {
            minutes--;
            secondes = 59
            formatTime(minutes, secondes)
        } else {
            secondes--
            formatTime(minutes, secondes)
        }
        if (minutes == 0 && secondes == 0) {
            clearInterval(timeId)
        }
        console.log(minutes, secondes)
    }, 50)
}
function pauseMinCountdown() {
    clearInterval(timeId)
}
function restartMinCountdown() {
    minutes = min.value
    timeId = setInterval(() => {
        if (secondes == 0) {
            minutes--;
            secondes = 59
            formatTime(minutes, secondes)
        } else {
            secondes--
            formatTime(minutes, secondes)
        }
        if (minutes == 0 && secondes == 0) {
            clearInterval(timeId)
        }
        console.log(minutes, secondes)
    }, 50)
}

function formatTime(minutes, secondes) {
    if (minutes > 9) {
        if (secondes > 9) {
            time.innerText = `${minutes}:${secondes}`
        } else {
            time.innerText = `${minutes}:0${secondes}`
        }

    } else {
        if (secondes > 9) {
            time.innerText = `${minutes}:${secondes}`
        } else {
            time.innerText = `0${minutes}:0${secondes}`
        }
    }
}
