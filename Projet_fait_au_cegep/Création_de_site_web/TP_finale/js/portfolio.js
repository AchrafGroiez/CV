const change1 = document.getElementById("change1")
const change2 = document.getElementById("change2")
change1.checked = true;
change1.addEventListener('click', () => {
    if(change1.checked){
        imgchangein.src = "/img_video/TP04.jpg"
        changediv.className = "divwhite"
        tp04.className = "yes"
        tp02.className = "no"
    }

    else{
        imgchangein.src = "/img_video/TP02.jpg"
        changediv.className = "divblack"
        tp04.className = "no"
        tp02.className = "yes"

    }
})

change2.addEventListener('click', () => {
    if(change2.checked){
        imgchangein.src = "/img_video/TP02.jpg"
        changediv.className = "divblack"
        tp04.className = "no"
        tp02.className = "yes"
    }

    else{
        imgchangein.src = "/img_video/TP04.jpg"
        changediv.className = "divwhite"
        tp04.className = "yes"
        tp02.className = "no"
    }
})
