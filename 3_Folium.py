import folium
import os
import rasterio as rio
from folium.plugins import Draw
import json

# --- Utility: save map and return filename
def save_map(m, name):
    filename = os.path.join(name)
    m.save(filename)
    print("Saved:", filename)
    return filename

backg_path = os.path.join(os.getcwd(), "data", "Carte blanche 5.9_georef.tif")
#backg_path = os.path.join(os.getcwd(), "Data", "Carte_SRC_def_img.tif")
chemin = os.path.join(os.getcwd(), "Data" \
"" "GEO-DATA_FINISTERE.json")

f = open(chemin)
data = f.read()
geoj = json.loads(data)


with rio.open(backg_path) as src:
    
    img = src.read()

    min_lon, min_lat, max_lon, max_lat = src.bounds
    bounds_orig = [[min_lat, min_lon], [max_lat, max_lon]]

    centre_lon = bounds_orig[0][1] + (bounds_orig[1][1] - bounds_orig[0][1])/2
    centre_lat = bounds_orig[0][0] + (bounds_orig[1][0] - bounds_orig[0][0])/2

    x = centre_lon
    y = centre_lat

coord = [centre_lat, centre_lon]
print(coord)
print(max_lat-min_lat)
print(max_lon-min_lon)

html = """
<button class="favorite styled" type="button", popovertarget="mypopover">Ploudalmezean</button>
"""
#iframe = folium.IFrame(html, width=250, height=260)
popup = folium.GeoJsonPopup(fields=["name"])

geojson_small = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {"name": html},
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[-4.25449815996769, 48.80607108966908], [x+0.3, y+0.1], [x+0.3, y+0.01], [x+0.1, y+0.01]]]
            }
        },{
            "type":"Feature",
            "properties":{"name": html},
            "geometry":{
                "type":"Polygon",
                "coordinates":[[[-4.7509,48.494312],[-4.725494,48.487942],[-4.706268,48.483846],[-4.678802,48.477929],[-4.659576,48.475197],[-4.634857,48.483846],[-4.613571,48.492947],[-4.592285,48.499318],[-4.577866,48.504777],[-4.565506,48.505687],[-4.549713,48.512966],[-4.532547,48.504777],[-4.520187,48.491582],[-4.505081,48.496588],[-4.494095,48.507962],[-4.496841,48.527064],[-4.502335,48.543433],[-4.502335,48.554796],[-4.505081,48.56434],[-4.527054,48.566612],[-4.55864,48.568883],[-4.571686,48.574336],[-4.584732,48.582513],[-4.600525,48.58433],[-4.624557,48.58433],[-4.637604,48.582967],[-4.637604,48.592959],[-4.652023,48.597046],[-4.66507,48.593867],[-4.674683,48.601587],[-4.682922,48.587963],[-4.693222,48.578424],[-4.704208,48.570701],[-4.720688,48.564794],[-4.737167,48.555705],[-4.750214,48.547978],[-4.764633,48.54116],[-4.770126,48.534795],[-4.766693,48.527064],[-4.761887,48.51433],[-4.761887,48.505687],[-4.7509,48.494312]]]}}

        ]
}
#print(geojson_small["features"][0]["geometry"]["coordinates"])

m = folium.Map(max_bounds=True,
                location=[centre_lat, centre_lon], 
                zoom_start=8.75,
                min_lat=min_lat,
                max_lat=max_lat,
                min_lon=min_lon,
                max_lon=max_lon)

#folium.map.FitBounds(bounds_orig).add_to(m)

folium.GeoJson(
    geoj,
    name="Regions",
    style_function=lambda feat: {
        "weight": 0,
        "fillOpacity": 0
        
    },
    #tooltip=folium.GeoJsonTooltip(fields=["name"], aliases=["Name:"]),
    highlight_function=lambda feature: {
        "fillColor": (
            "#e7be9e" if "e" in feature["properties"]["name"].lower() else None
        ),
        "fillOpacity": 0.5 if "e" in feature["properties"]["name"].lower() else 0
    },
    popup=popup,
    popup_keep_highlighted=True
    
).add_to(m)

aldrune_overlay = folium.raster_layers.ImageOverlay(
    image = img.transpose(1, 2, 0),
    bounds=bounds_orig,
    opacity=1,
    zindex=1)

aldrune_overlay.add_to(m)

Draw(export=True, filename="drawn_data.geojson").add_to(m)

#Draw(export=True, filename="drawn_data.geojson").add_to(m)


# Note: This external image will load only when you have internet in class.
#folium.LayerControl().add_to(m)

folium.LayerControl().add_to(m)
save_map(m, "Index3.html")