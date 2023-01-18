listcheck = []
envoyer.addEventListener('click', () => {
    if(envoyer.className == "end"){
        envoyer.className = "un"
        imgsource.src = ""
        imgsource.className = "off"
    }
    
    if(envoyer.className == "un"){
        imgsource.src = "/img_video/fordescape.jpg"
        imgsource.className = "on"
        choice1.checked = false
        choice2.checked = false
        choice3.checked = false
        choice4.checked = false
        listcheck = []
        envoyer.className = "deux"
        envoyer.innerText = "suivant"
        choice1.className = "" 
        choice2.className = "" 
        choice3.className = "" 
        choice4.className = ""
        envoyer.className = "deux"
        indicateur.innerText = "Question: 1/10"
        choice1label.innerText = "Porsche Cayenne"
        choice2label.innerText = "Honda CR-V"
        choice3label.innerText = "Ford Escape"
        choice4label.innerText = "Acura MDX"
        laquestion.innerText = "Quel est le SUV à gauche?"

    }

    else if(envoyer.className == "deux"){
        imgsource.src = "/img_video/rarevoiture.jpg"
        imgsource.className = "on"
        envoyer.className = "trois"
        indicateur.innerText = "Question: 2/10"
        choice1label.innerText = "1) Lexus LFA"
        choice2label.innerText = "2) Maybach Exelero"
        choice3label.innerText = "3) Honda S2000"
        choice4label.innerText = "4) Mercedes-Benz CLK GTR Roadster"
        laquestion.innerText = "Quel est la voiture la plus rare?"
        if(choice3.checked == true){
            listcheck = listcheck + ['true ']
        }

        else{
            listcheck = listcheck + ['false ']
        }
        choice1.checked = false
        choice2.checked = false
        choice3.checked = false
        choice4.checked = false
    }

    else if(envoyer.className == "trois"){
        imgsource.src = ""
        imgsource.className = "off"
        envoyer.className = "quatre"
        indicateur.innerText = "Question: 3/10"
        choice1label.innerText = "les voitures chinoises"
        choice2label.innerText = "les voitures américaines"
        choice3label.innerText = "les voitures allemandes"
        choice4label.innerText = "les voitures japonaises"
        laquestion.innerText = "Quelles sont les voitures qui sont réputés pour être les plus fiables?"
        if(choice2.checked == true){
            listcheck = listcheck + ['true ']
        }

        else{
            listcheck = listcheck + ['false ']
        }
        choice1.checked = false
        choice2.checked = false
        choice3.checked = false
        choice4.checked = false

    }

    else if(envoyer.className == "quatre"){
        imgsource.src = "/img_video/mitsubishi.jpg"
        imgsource.className = "on"
        envoyer.className = "cinq"
        indicateur.innerText = "Question: 4/10"
        choice1label.innerText = "Mitsubishi"
        choice2label.innerText = "Porsche"
        choice3label.innerText = "Infinity"
        choice4label.innerText = "Nissan"
        laquestion.innerText = "Quelle la marque de voiture à gauche?"
        if(choice4.checked == true){
            listcheck = listcheck + ['true ']
        }

        else{
            listcheck = listcheck + ['false ']
        }
        choice1.checked = false
        choice2.checked = false
        choice3.checked = false
        choice4.checked = false

    }

    else if(envoyer.className == "cinq"){
        imgsource.src = "/img_video/tesla.jpg"
        imgsource.className = "on"
        envoyer.className = "six"
        indicateur.innerText = "Question: 5/10"
        choice1label.innerText = "Versa"
        choice2label.innerText = "Civic"
        choice3label.innerText = "Fusion"
        choice4label.innerText = "Model S"
        laquestion.innerText = "Quel est la berline à gauche?"
        if(choice1.checked == true){
            listcheck = listcheck + ['true ']
        }

        else{
            listcheck = listcheck + ['false ']
        }
        choice1.checked = false
        choice2.checked = false
        choice3.checked = false
        choice4.checked = false

    }

    else if(envoyer.className == "six"){
        imgsource.src = "/img_video/infinity.jpg"
        imgsource.className = "on"
        envoyer.className = "sept"
        indicateur.innerText = "Question: 6/10"
        choice1label.innerText = "Tesla"
        choice2label.innerText = "Infinity"
        choice3label.innerText = "Nissan"
        choice4label.innerText = "Cadillac"
        laquestion.innerText = "Quelle la marque de voiture à gauche?"
        if(choice4.checked == true){
            listcheck = listcheck + ['true ']
        }

        else{
            listcheck = listcheck + ['false ']
        }
        choice1.checked = false
        choice2.checked = false
        choice3.checked = false
        choice4.checked = false

    }

    else if(envoyer.className == "sept"){
        imgsource.src = "/img_video/acura.png"
        imgsource.className = "on"
        envoyer.className = "huit"
        indicateur.innerText = "Question: 7/10"
        choice1label.innerText = "RSX Type S"
        choice2label.innerText = "NSX Type R"
        choice3label.innerText = "MDX"
        choice4label.innerText = "TLX"
        laquestion.innerText = "Quel est le coupé à gauche?"
        if(choice2.checked == true){
            listcheck = listcheck + ['true ']
        }

        else{
            listcheck = listcheck + ['false ']
        }
        choice1.checked = false
        choice2.checked = false
        choice3.checked = false
        choice4.checked = false

    }

    else if(envoyer.className == "huit"){
        imgsource.src = "/img_video/citroen.jpg"
        imgsource.className = "on"
        envoyer.className = "neuf"
        indicateur.innerText = "Question: 8/10"
        choice1label.innerText = "Audi"
        choice2label.innerText = "Tesla"
        choice3label.innerText = "Volkswagen"
        choice4label.innerText = "Aucune de ses réponses"
        laquestion.innerText = "Quel est la marque à gauche?"
        if(choice1.checked == true){
            listcheck = listcheck + ['true ']
        }

        else{
            listcheck = listcheck + ['false ']
        }
        choice1.checked = false
        choice2.checked = false
        choice3.checked = false
        choice4.checked = false

    }

    else if(envoyer.className == "neuf"){
        imgsource.src = "/img_video/accord.png"
        imgsource.className = "on"
        envoyer.className = "dix"
        indicateur.innerText = "Question: 9/10"
        choice1label.innerText = "Accord"
        choice2label.innerText = "Insight"
        choice3label.innerText = "Maxima"
        choice4label.innerText = "Aucune de ses réponses"
        laquestion.innerText = "Quelle est la voiture à gauche?"
        if(choice4.checked == true){
            listcheck = listcheck + ['true ']
        }

        else{
            listcheck = listcheck + ['false ']
        }
        choice1.checked = false
        choice2.checked = false
        choice3.checked = false
        choice4.checked = false

    }


    else if(envoyer.className == "dix"){
        imgsource.src = "/img_video/cadillac.jpg"
        imgsource.className = "on"
        envoyer.className = "onze"
        envoyer.innerText = "envoyer"
        indicateur.innerText = "Question: 10/10"
        choice1label.innerText = "Cadillac"
        choice2label.innerText = "GM"
        choice3label.innerText = "Apple"
        choice4label.innerText = "Buick"
        laquestion.innerText = "Quel est la marque à gauche?"
        if(choice1.checked == true){
            listcheck = listcheck + ['true ']
        }

        else{
            listcheck = listcheck + ['false ']
        }
        choice1.checked = false
        choice2.checked = false
        choice3.checked = false
        choice4.checked = false

    }



    else if(envoyer.className == "onze"){
        imgsource.src = ""
        imgsource.className = "off"
        envoyer.className = "end"
        envoyer.innerText = "recommencer"
        choice1label.innerText = ""
        choice2label.innerText = ""
        choice3label.innerText = ""
        choice4label.innerText = ""
        laquestion.innerText = ""
        choice1.className = "none" 
        choice2.className = "none" 
        choice3.className = "none" 
        choice4.className = "none"
        if(choice1.checked == true){
            listcheck = listcheck + ['true']
        }

        else{
            listcheck = listcheck + ['false']
        }

        listcheck = listcheck.split(" ")
        i = 0
        rep = 0
        if(envoyer.className == "end"){
            while(i < listcheck.length){
                if(listcheck[i].includes('true')){
                    var rep = rep + 1
                }
                i = i + 1
            }
        }
        text = "Votre résultat est de "
        div = "/10"
        indicateur.innerText = text + rep+div
        rep = 0
    }
})