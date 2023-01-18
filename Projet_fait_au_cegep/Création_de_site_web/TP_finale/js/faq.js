const ouvrir = document.getElementById("ouvriretfermer")
const content11 = document.getElementById("content11")
const content12 = document.getElementById("content12")
const faq1 = document.getElementById("faq1")
ouvrir.addEventListener('click', () => {
    if(ouvrir.innerText == "fermer"){
        setTimeout(function off(){
            content11.className = "off"
            content12.className = "off";
        }, 200)
        faq1.className = "notactive"
        ouvrir.innerText = "ouvrir";
    }

    else if(ouvrir.innerText == "ouvrir"){
        faq1.className = "active"
        ouvrir.innerText = "fermer";
        setTimeout(function on(){
            content11.className = "on"
            content12.className = "on";
        }, 420)
    }
})

const ouvrir2 = document.getElementById("ouvriretfermer2")
const content21 = document.getElementById("content21")
const content22 = document.getElementById("content22")
const faq2 = document.getElementById("faq2")
ouvrir2.addEventListener('click', () => {
    if(ouvrir2.innerText == "ouvrir"){
        setTimeout(function on2(){
            content21.className = "on"
        }, 200)
        faq2.className = "active"
        ouvrir2.innerText = "fermer";
    }

    else if(ouvrir2.innerText == "fermer"){
        faq2.className = "notactive"
        ouvrir2.innerText = "ouvrir";
        setTimeout(function off2(){
            content21.className = "off";
        }, 420)
    }
})


const ouvrir3 = document.getElementById("ouvriretfermer3")
const content31 = document.getElementById("content31")
const faq3 = document.getElementById("faq3")
ouvrir3.addEventListener('click', () => {
    if(ouvrir3.innerText == "ouvrir"){
        setTimeout(function on3(){
            content31.className = "on"
        }, 200)
        faq3.className = "active"
        ouvrir3.innerText = "fermer";
    }

    else if(ouvrir3.innerText == "fermer"){
        faq3.className = "notactive"
        ouvrir3.innerText = "ouvrir";
        setTimeout(function off3(){
            content31.className = "off";
        }, 420)
    }
})


const ouvrir4 = document.getElementById("ouvriretfermer4")
const content41 = document.getElementById("content41")
const faq4 = document.getElementById("faq4")
ouvrir4.addEventListener('click', () => {
    if(ouvrir4.innerText == "ouvrir"){
        setTimeout(function on4(){
            content41.className = "on"
        }, 200)
        faq4.className = "active"
        ouvrir4.innerText = "fermer";
    }

    else if(ouvrir4.innerText == "fermer"){
        faq4.className = "notactive"
        ouvrir4.innerText = "ouvrir";
        setTimeout(function off4(){
            content41.className = "off";
        }, 420)
    }
})


const ouvrir5 = document.getElementById("ouvriretfermer5")
const content51 = document.getElementById("content51")
const faq5 = document.getElementById("faq5")
ouvrir5.addEventListener('click', () => {
    if(ouvrir5.innerText == "ouvrir"){
        setTimeout(function on5(){
            content51.className = "on"
        }, 200)
        faq5.className = "active"
        ouvrir5.innerText = "fermer";
    }

    else if(ouvrir5.innerText == "fermer"){
        faq5.className = "notactive"
        ouvrir5.innerText = "ouvrir";
        setTimeout(function off5(){
            content51.className = "off";
        }, 420)
    }
})


const ouvrir6 = document.getElementById("ouvriretfermer6")
const content61 = document.getElementById("content61")
const faq6 = document.getElementById("faq6")
ouvrir6.addEventListener('click', () => {
    if(ouvrir6.innerText == "ouvrir"){
        setTimeout(function on6(){
            content61.className = "on"
        }, 200)
        faq6.className = "active"
        ouvrir6.innerText = "fermer";
    }

    else if(ouvrir6.innerText == "fermer"){
        faq6.className = "notactive"
        ouvrir6.innerText = "ouvrir";
        setTimeout(function off6(){
            content61.className = "off";
        }, 420)
    }
})


const ouvrir7 = document.getElementById("ouvriretfermer7")
const content71 = document.getElementById("content71")
const faq7 = document.getElementById("faq7")
ouvrir7.addEventListener('click', () => {
    if(ouvrir7.innerText == "ouvrir"){
        setTimeout(function on7(){
            content71.className = "on"
        }, 200)
        faq7.className = "active"
        ouvrir7.innerText = "fermer";
    }

    else if(ouvrir7.innerText == "fermer"){
        faq7.className = "notactive"
        ouvrir7.innerText = "ouvrir";
        setTimeout(function off7(){
            content71.className = "off";
        }, 420)
    }
})


const ouvrir8 = document.getElementById("ouvriretfermer8")
const content81 = document.getElementById("content81")
const faq8 = document.getElementById("faq8")
ouvrir8.addEventListener('click', () => {
    if(ouvrir8.innerText == "ouvrir"){
        setTimeout(function on8(){
            content81.className = "on"
        }, 200)
        faq8.className = "active"
        ouvrir8.innerText = "fermer";
    }

    else if(ouvrir8.innerText == "fermer"){
        faq8.className = "notactive"
        ouvrir8.innerText = "ouvrir";
        setTimeout(function off8(){
            content81.className = "off";
        }, 420)
    }
})


const ouvrir9 = document.getElementById("ouvriretfermer9")
const content91 = document.getElementById("content91")
const faq9 = document.getElementById("faq9")
ouvrir9.addEventListener('click', () => {
    if(ouvrir9.innerText == "ouvrir"){
        setTimeout(function on9(){
            content91.className = "on"
        }, 200)
        faq9.className = "active"
        ouvrir9.innerText = "fermer";
    }

    else if(ouvrir9.innerText == "fermer"){
        faq9.className = "notactive"
        ouvrir9.innerText = "ouvrir";
        setTimeout(function off9(){
            content91.className = "off";
        }, 420)
    }
})


const ouvrir10 = document.getElementById("ouvriretfermer10")
const content101 = document.getElementById("content101")
const faq10 = document.getElementById("faq10")
ouvrir10.addEventListener('click', () => {
    if(ouvrir10.innerText == "ouvrir"){
        setTimeout(function on10(){
            content101.className = "on"
        }, 200)
        faq10.className = "active"
        ouvrir10.innerText = "fermer";
    }

    else if(ouvrir10.innerText == "fermer"){
        faq10.className = "notactive"
        ouvrir10.innerText = "ouvrir";
        setTimeout(function off10(){
            content101.className = "off";
        }, 420)
    }
})