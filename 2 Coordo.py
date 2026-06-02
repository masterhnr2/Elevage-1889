

# TEST SUR LA CARTE TIFF DEFORMEE 


Rectangle = [
    [1744, 1203],
    [1804, 1203],
    [1804, 1239],
    [1744, 1239] 
]

centre_carte = [2019.5, 1659]

centre_folium = [48.226403474, -4.4005738835]

def centroid(forme) :
    x = 0
    y = 0 
        
    for i in forme : 
        xi = i[0]
        x += xi 

        yi = i[1]
        y += yi

    x = x / len(forme)
    y = y / len(forme)

    output = [x, y]
    return(output)

centroide = centroid(Rectangle)

distance_au_centre = [
    centroide[0]-centre_carte[0],
    centroide[1]-centre_carte[1]
    ]

print(distance_au_centre)

# pour obtenir 

lat_min = 47.024774457
lat_max = 49.428032491

lat = 2.403258034000004
long = 4.391180705

largeur_carte = 4039
hauteur_carte = 3318

un_px = lat / largeur_carte
deux_px = long / hauteur_carte

distance_geo = [distance_au_centre[0] * un_px, distance_au_centre[1] * deux_px]

print(distance_geo)

invert = [centre_folium[1], centre_folium[0]]

nouveau_centre = [invert[0] - distance_geo[0], invert[1] - distance_geo[1]]

print(nouveau_centre)
# inverser les deux coordonnées

print(f"large : {un_px}")
print(f"large : {deux_px}")





