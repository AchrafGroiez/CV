import Groiez_module1 as module1
if __name__ == "__main__":
    listdetrajet = [('0', '1', '0', '2', '2', '4'), ('2', '2', '3')]
    point_depart = 0
    resulat = module1.meilleur_trajet(listdetrajet, point_depart)
    print(resulat)