import streamlit as st 
import os 
#import streamlit.components.v1 as components
import folium
from streamlit_folium import st_folium

#path = os.path.join(os.getcwd(), "Pages", "Page_2.py")
backg_path = os.path.join(os.getcwd(), "Data", "Expo_univ_1889_Elevage_enfants_premier_age_Finistere_41.jpg")

st.set_page_config(
    layout="wide",
)

#st.sidebar.success('select page')

#st.page_link(path, icon="🔥")

image = "http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272005"

widh_media = 2500
height_media = 1878

#st.image(image)


m = folium.Map(crs='Simple', zoom_start=0, tiles=None) #

aldrune_overlay = folium.raster_layers.ImageOverlay(
    image='./Data/Expo_univ_1889_Elevage_enfants_premier_age_Finistere_7.jpg',
    bounds=[[0, 0], [1800, 2000]],
    zindex=1)
aldrune_overlay.add_to(m)
m.fit_bounds(bounds=[[0, 0], [1800, 2000]])

st_data = st_folium(m, use_container_width=True)

places = [
    {"name": "Paris — University", "lat": 48.8566, "lon": 2.3522, "desc": "University years"},
    {"name": "Tehran — Birthplace", "lat": 35.6892, "lon": 51.3890, "desc": "Where it all began"},
    {"name": "Berlin — Future Work", "lat": 52.52, "lon": 13.405, "desc": "Dream job city"}
]


st.markdown(
        r"""
        <style>
        .stAppViewBlockContainer {
               padding: 0rem;
            }
        </style>
        """, unsafe_allow_html=True
    )