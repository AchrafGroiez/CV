listcheck = []
envoyer.addEventListener('click', () => {
    if(envoyer.className == "end"){
        envoyer.className = "un"
    }
    
    if(envoyer.className == "un"){
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
        choice1label.innerText = "."
        choice2label.innerText = "#"
        choice3label.innerText = "/"
        choice4label.innerText = "*"
        laquestion.innerText = "Quel est le signe pour modifier une classe en css?"

    }

    else if(envoyer.className == "deux"){
        envoyer.className = "trois"
        indicateur.innerText = "Question: 2/10"
        choice1label.innerText = ")"
        choice2label.innerText = "%"
        choice3label.innerText = "#"
        choice4label.innerText = "."
        laquestion.innerText = "Quel est le signe pour modifier un id en css?"
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

    else if(envoyer.className == "trois"){
        envoyer.className = "quatre"
        indicateur.innerText = "Question: 3/10"
        choice1label.innerText = "logo = rgb(17, 122, 227)"
        choice2label.innerText = "var logo = rgb(17, 122, 227)"
        choice3label.innerText = "let logo = rgb(17, 122, 227)"
        choice4label.innerText = ":root{--logo: rgb(17, 122, 227);}"
        laquestion.innerText = "Comment déclarer une variable en css?"
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

    else if(envoyer.className == "quatre"){
        envoyer.className = "cinq"
        indicateur.innerText = "Question: 4/10"
        choice1label.innerText = "text-align: center;"
        choice2label.innerText = "text-position: center;"
        choice3label.innerText = "position: center;"
        choice4label.innerText = "float-text: center;"
        laquestion.innerText = "Quelle est la commande pour mettre un texte au centre?"
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
        envoyer.className = "six"
        indicateur.innerText = "Question: 5/10"
        choice1label.innerText = "color: ;"
        choice2label.innerText = "background-color: ;"
        choice3label.innerText = "text-color: ;"
        choice4label.innerText = "colour: ;"
        laquestion.innerText = "Comment peut-on faire pour changer la couleur d'un texte?"
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
        envoyer.className = "sept"
        indicateur.innerText = "Question: 6/10"
        choice1label.innerText = "font-size: ;"
        choice2label.innerText = "size: ;"
        choice3label.innerText = "height: ;"
        choice4label.innerText = "width: ;"
        laquestion.innerText = "Quelle est la commande pour augmenter la taille d'un texte?"
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

    else if(envoyer.className == "sept"){
        envoyer.className = "huit"
        indicateur.innerText = "Question: 7/10"
        choice1label.innerText = "text-decoration: none;"
        choice2label.innerText = "text-underline: none;"
        choice3label.innerText = "underlin: none;"
        choice4label.innerText = "decoration: none;"
        laquestion.innerText = "Comment enlever le soulignement d'une balise <a>"
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

    else if(envoyer.className == "huit"){
        envoyer.className = "neuf"
        indicateur.innerText = "Question: 8/10"
        choice1label.innerText = "Elle enleve le contenu a gauche"
        choice2label.innerText = "Elle enleve le contenu a droite"
        choice3label.innerText = "Elle met le contenu a droite"
        choice4label.innerText = "Elle met le contenu a gauche"
        laquestion.innerText = "Que fait la commande float: left;"
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
        envoyer.className = "dix"
        indicateur.innerText = "Question: 9/10"
        choice1label.innerText = "sa dépendand le cas"
        choice2label.innerText = "section"
        choice3label.innerText = ".faq"
        choice4label.innerText = "section[class='faq']"
        laquestion.innerText = "Quelle est la meilleur façon de modifier cette chose en css: <section class='faq'>"
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
        envoyer.className = "onze"
        envoyer.innerText = "envoyer"
        indicateur.innerText = "Question: 10/10"
        choice1label.innerText = "pc"
        choice2label.innerText = "px"
        choice3label.innerText = "%"
        choice4label.innerText = "km"
        laquestion.innerText = "Laquelle n'est pas une unité inclu dans le css?"
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
        if(choice4.checked == true){
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