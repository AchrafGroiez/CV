def ordretache(dictionnaire): #La déclaration de la fonction de l'exercice2
    the_keys = list(dictionnaire) #La liste des clés
    dictlen = {} #déclaration d'un dictionnaire
    for i in range(len(the_keys)): #un dictionnaire avec les clés des anciens et la longueurs de leurs valeurs qui était dans une liste
        dictlen = dictlen | {the_keys[i] : len(dictionnaire[the_keys[i]])} 
    ordre = sorted(dictlen) #Une liste ordonné est sauvegardé

    for i in range(len(dictionnaire)): #Cela met en ordre les valeurs des clés
        dictionnaire[list(dictionnaire)[i]].sort()

    comparaison = [ordre[0], ] #La déclaration de la liste qui va servir dans le while de la ligne 14
    i = 1 
    while i < len(ordre): #Le while pour vérifier si le dictionnaire principal est correct
        if(comparaison == dictionnaire[ordre[i]]):
            comparaison = comparaison + [ordre[i]]

        else:
            ordre = "error"
        i = i + 1   
    input_file = "groiez_2.txt" #Le fichier ou le résultat va être écrit
    with open(input_file, 'a') as f: #L'écriture dans le fichier groiez_2.txt du résultat
        f.write(f"The result is {ordre} and the dictionnary with sort value was {dictionnaire}\n")
    return ordre #Le retour du résultat