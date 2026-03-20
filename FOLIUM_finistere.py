import folium
import branca
import os
import json
import rasterio as rio

# =============================================================================
# --- CHARGEMENT DE L'IMAGE
# =============================================================================

backg_path = r"Desktop\Bastien-GITHUB\Conception\data\Carte blanche 5.9_georef.tif"


with rio.open(backg_path) as src:
    img = src.read()
    min_lon, min_lat, max_lon, max_lat = src.bounds
    bounds_orig = [[min_lat, min_lon], [max_lat, max_lon]]
    centre_lon = bounds_orig[0][1] + (bounds_orig[1][1] - bounds_orig[0][1]) / 2
    centre_lat = bounds_orig[0][0] + (bounds_orig[1][0] - bounds_orig[0][0]) / 2

# =============================================================================
# --- CRÉATION DE LA CARTE
# =============================================================================

# II.1 -- Limites de navigation
#nav_min_lat, nav_max_lat = 48.892226, 47.595314
#nav_min_lon, nav_max_lon = -5.363484, -1.972688

# II.2 -- Carte centrée sur le Finistère
finistere = folium.Map(
    location=[centre_lat, centre_lon],
    zoom_start=9.4,
    zoom_control=True,
    tiles="openstreetmap",
    max_bounds=True,
    #min_lat=nav_min_lat,
    #max_lat=nav_max_lat,
    #min_lon=nav_min_lon,
    #max_lon=nav_max_lon,
)

# II.3 -- Points invisibles pour limiter la navigation
#folium.CircleMarker([nav_max_lat, nav_min_lon], tooltip="Upper Left Corner",  color="white").add_to(finistere)
#folium.CircleMarker([nav_min_lat, nav_min_lon], tooltip="Lower Left Corner",  color="white").add_to(finistere)
#folium.CircleMarker([nav_min_lat, nav_max_lon], tooltip="Lower Right Corner", color="white").add_to(finistere)
#folium.CircleMarker([nav_max_lat, nav_max_lon], tooltip="Upper Right Corner", color="white").add_to(finistere)

print("///// Structure de la carte créée ! /////")

# =============================================================================
# --- IMAGE RASTER EN OVERLAY 
# =============================================================================


offset_lat = 0.0
offset_lon = 0.0 
bounds_decales = [
    [bounds_orig[0][0] + offset_lat, bounds_orig[0][1] + offset_lon],
    [bounds_orig[1][0] + offset_lat, bounds_orig[1][1] + offset_lon], 
]

aldrune_overlay = folium.raster_layers.ImageOverlay(
    image=img.transpose(1, 2, 0),
    bounds=bounds_decales,
    opacity=1,
    zindex=1,
)
aldrune_overlay.add_to(finistere)

# =============================================================================
# --- POLYGONES GEOJSON + IFRAMES INTEGRES
# =============================================================================

geo_json_path = r"Desktop\Bastien-GITHUB\Conception\data\GEO-DATA_FINISTERE.json"

with open(geo_json_path, "r", encoding="utf-8") as f:
    geo_data = json.load(f)

def popup_html(nom, sujet):
    return f"""
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <style>
                body {{
                    font-family:Arial, sans-serif;
                    font-size:14px;
                    margin:10px;
                }}
                h4 {{
                    color:purple;
                    margin:0 0 6px 0;
                    border-bottom:1px solid purple;
                    padding-bottom:4px;
                }}
                p {{
                    margin:0;
                }}
            </style>
        </head>
        <body>
            <h4>Canton</h4>
            <p>{nom}</p>
            <br>
            <p>{sujet}</p>
        </body>
    </html>
    """

for feature in geo_data["features"]:
    nom = feature["properties"]["name"]
    sujet = feature["properties"]["subject"]
    folium.GeoJson(

        feature,

        style_function=lambda f: {
            "fillColor":"orange",
            "color":"black",
            "weight":0.5,
        },

        highlight_function=lambda f: {
            "fillColor":"white",
        },

        popup=folium.Popup(
            folium.IFrame(html=popup_html(nom, sujet), width=220, height=110),
            max_width=220,
        ),

        popup_keep_highlighted=False,
    ).add_to(finistere)

print("///// Polygones GeoJSON ajoutés ! /////")

# =============================================================================
# --- SAUVEGARDE
# =============================================================================

output_path = r"Desktop\Bastien-GITHUB\Conception\output\index.html"
finistere.save(output_path)
print(f"///// Fichier sauvegardé : {output_path} /////")