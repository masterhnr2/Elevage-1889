import streamlit as st 
import os 
import folium
from streamlit_folium import st_folium
import rasterio as rio

with open('style2.css') as f:
    css = f.read()

st.markdown(f'<style>{css}</style>', unsafe_allow_html=True)


backg_path = os.path.join(os.getcwd(), "Data", "Carte_SRC_def_img.tif")



with rio.open(backg_path) as src:
    
    img = src.read()

    min_lon, min_lat, max_lon, max_lat = src.bounds
    bounds_orig = [[min_lat, min_lon], [max_lat, max_lon]]

    centre_lon = bounds_orig[0][1] + (bounds_orig[1][1] - bounds_orig[0][1])/2
    centre_lat = bounds_orig[0][0] + (bounds_orig[1][0] - bounds_orig[0][0])/2


m = folium.Map(location=[centre_lat, centre_lon], zoom_start=9.5)

aldrune_overlay = folium.raster_layers.ImageOverlay(
    img.transpose(1, 2, 0),
    bounds=bounds_orig,
    opacity=1,
    zindex=1)

aldrune_overlay.add_to(m)
#folium.LayerControl().add_to(m)
#m.fit_bounds(bounds=bounds_orig)

st_data = st_folium(m, use_container_width=True)




