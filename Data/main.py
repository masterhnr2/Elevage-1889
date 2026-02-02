import folium
import os
import rasterio as rio

OUTDIR = "output"
os.makedirs(OUTDIR, exist_ok=True)

# --- Utility: save map and return filename
def save_map(m, name):
    filename = os.path.join(name)
    m.save(filename)
    print("Saved:", filename)
    return filename

backg_path = os.path.join(os.getcwd(), "data", "Carte_blanche_3_2.tif")
#backg_path = os.path.join(os.getcwd(), "Data", "Carte_SRC_def_img.tif")


with rio.open(backg_path) as src:
    
    img = src.read()

    min_lon, min_lat, max_lon, max_lat = src.bounds
    bounds_orig = [[min_lat, min_lon], [max_lat, max_lon]]

    centre_lon = bounds_orig[0][1] + (bounds_orig[1][1] - bounds_orig[0][1])/2
    centre_lat = bounds_orig[0][0] + (bounds_orig[1][0] - bounds_orig[0][0])/2


m = folium.Map(location=[centre_lat, centre_lon], zoom_start=9.5)

aldrune_overlay = folium.raster_layers.ImageOverlay(
    image = img.transpose(1, 2, 0),
    bounds=bounds_orig,
    opacity=1,
    zindex=1)

aldrune_overlay.add_to(m)

save_map(m, "Index.html")