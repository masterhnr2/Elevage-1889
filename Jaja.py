import streamlit
import folium
import os

from pyproj import Transformer 
import rasterio as rio

backg_path = os.path.join(os.getcwd(), "Data", "Carte_SRC_def_img.tif")

with rio.open(backg_path) as src:
    
    img = src.read()

    src_crs = src.crs
    
    min_lon, min_lat, max_lon, max_lat = src.bounds
    bounds_orig = [[min_lat, min_lon], [max_lat, max_lon]]

    print(bounds_orig)

centre_lon = bounds_orig[0][1] + (bounds_orig[1][1] - bounds_orig[0][1])/2
centre_lat = bounds_orig[0][0] + (bounds_orig[1][0] - bounds_orig[0][0])/2