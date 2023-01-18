def trajet_list(dictionnaire, la_list_key, trajet, value, lenlist): #fonction pour trouver trajet
    if(value == "trajet1"): #vérification pour savoir si c'est trajet1
        
        for i2 in range(len(dictionnaire)): #le triage du dictionnaire du trajet1
            dictionnaire[la_list_key[i2]].sort()

    if(value == "trajet2"): #vérification pour savoir si c'est trajet2
        for i2 in range(len(dictionnaire)): #le triage du dictionnaire du trajet2
            dictionnaire[la_list_key[i2]].sort(reverse=True)

    for i in range(len(dictionnaire) + 1): #C'est pour trouver le meilleur chemin(Trajet1)
        la_list_key = list(dictionnaire)    
        if(trajet[i] in la_list_key):
            trajet = trajet + [dictionnaire[trajet[i]][0]]
            dictionnaire[trajet[i]].remove(dictionnaire[trajet[i]][0]) #La suppression des valeurs
            if(len(dictionnaire[trajet[i]]) == 0): #La suppression des clés
                del dictionnaire[trajet[i]] 
                 
        else:
            trajet = "le trajet n'est pas correct"   
    return trajet

def returndictionnaire(copy_listdetrajet):  #La fonction qui fabrique un dictionnaire
    dictionnary = {}
    for i in range(len(copy_listdetrajet)): #La fabrication du dictionnaire
        liste_no_keys = copy_listdetrajet[i][1::]
        if(copy_listdetrajet[i][0] in list(dictionnary)):
            dictionnary[copy_listdetrajet[i][0]] = dictionnary[copy_listdetrajet[i][0]] + liste_no_keys
        
        else:
            dictionnary = dictionnary | {copy_listdetrajet[i][0]:liste_no_keys}
    for i2 in range(len(dictionnary)): #Pour mettre tous les valeurs des clés du dictionnaire dans une liste
        dictionnary[list(dictionnary)[i2]] = list(dictionnary[list(dictionnary)[i2]])
    return dictionnary

def check(point_depart, list_of_key_for_check): #La vérification pour savoir si le point de départ est vrai
    if(point_depart not in list_of_key_for_check): #La vérification pour savoir si le point de départ est vrai
        return "Your starting point is false"
    
    else:
        return "rien"

def meilleur_trajet(listdetrajet, point_depart): #La fonction principale
    point_depart = str(point_depart)
    for i in range(len(listdetrajet)): # La transformation des tuples en listes
        listdetrajet[i] = list(listdetrajet[i])
    
    copy_listdetrajet = listdetrajet[:]
    list_of_key_for_check = []
    for i in range(len(listdetrajet)): #Cela fait une liste avec toutes les clés, aussi avec celle en double
        list_of_key_for_check = list_of_key_for_check + [copy_listdetrajet[i][0]]
    
    point_depart_erreur = check(point_depart, list_of_key_for_check)
    dictionnaire_trajet2 = returndictionnaire(copy_listdetrajet) #Le dictionnaire de trajet2
    dictionnaire_trajet1 = returndictionnaire(copy_listdetrajet) #Le dictionnaire de trajet1
    trajet1 = trajet_list(dictionnaire_trajet1, list(dictionnaire_trajet1), [point_depart, ], "trajet1", list_of_key_for_check)
    trajet2 = trajet_list(dictionnaire_trajet2, list(dictionnaire_trajet2), [point_depart, ], "trajet2", list_of_key_for_check)
    input_file = "groiez_1.txt"
    with open(input_file, 'a') as f: #L'écriture dans le fichier groiez_1.txt des résultats
        if(trajet1 == "le trajet n'est pas correct" and point_depart_erreur == "rien"):
            f.write(f"Starting point = {point_depart}, the list = {listdetrajet} and {trajet1}\n")

        elif(point_depart_erreur == "Your starting point is false"):
            f.write(f"Starting point = {point_depart} is false and the list of point = {listdetrajet}\n")
        
        else:
            f.write(f"Starting point = {point_depart}, the list = {listdetrajet} and the best way = {trajet1}\n")
    return "Le résultat a été écrit dans groiez_1.txt"