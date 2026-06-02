import os 
import json

racine = os.getcwd()
chemin = os.path.join(racine,"drawn_data.geojson")

sortie = os.path.join(racine, "drawn_data1.geojson")


f = open(chemin)
data2 = f.read()
f.close()
final = json.loads(data2)

with open(sortie, 'w', encoding='utf-8') as f:
        json.dump(final, f, ensure_ascii=False, indent=2)
