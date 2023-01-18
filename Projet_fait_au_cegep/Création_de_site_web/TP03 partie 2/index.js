/**Achraf Groiez */
ABC = ["Roche", "Papier", "Ciseaux"]
ABC2 = ["Roche", "Papier", "Ciseaux"]
joueur = ABC[Math.floor(Math.random()*ABC.length)];
ordinateur = ABC2[Math.floor(Math.random()*ABC2.length)];
let a = "Le programme a généré aléatoirement => "
let b = " pour le joueur && "
let d = " pour l'ordinateur ==> "
if(joueur == "Roche" & ordinateur == "Papier")
    var p = "C'est l'ordinateur qui gagne!"

if(joueur == "Roche" & ordinateur == "Ciseaux")
    var p = "C'est le joueur qui gagne!"

if(joueur == "Roche" & ordinateur == "Roche")
    var p = "Aucun gagnant [tie]"

if(joueur == "Papier" & ordinateur == "Papier")
    var p = "Aucun gagnant [tie]"

if(joueur == "Papier" & ordinateur == "Roche")
    var p = "C'est le joueur qui gagne!"
    
if(joueur == "Papier" & ordinateur == "Ciseaux")
    var p = "C'est l'ordinateur qui gagne!"
    
if(joueur == "Ciseaux" & ordinateur == "Papier")
    var p = "C'est le joueur qui gagne!"

if(joueur == "Ciseaux" & ordinateur == "Roche")
    var p = "C'est l'ordinateur qui gagne!"

if(joueur == "Ciseaux" & ordinateur == "Ciseaux")
    var p = "Aucun gagnant [tie]"

console.log(a + joueur + b + ordinateur + d + p)