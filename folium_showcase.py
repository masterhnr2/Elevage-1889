"""
folium_showcase.py
Comprehensive Folium demo that generates example HTML files into ./output/
Run: python folium_showcase.py
Author: ChatGPT (for Hannah)
"""

import os
import json
from datetime import datetime, timedelta
import folium
from folium import FeatureGroup, LayerControl, Map, Marker, Popup, IFrame, Icon, TileLayer
from folium.plugins import (
    MarkerCluster, HeatMap, MiniMap, MeasureControl, Fullscreen,
    Draw, FastMarkerCluster, TimestampedGeoJson, Search, LocateControl
)

# --- Create output directory
OUTDIR = "output"
os.makedirs(OUTDIR, exist_ok=True)

# --- Utility: save map and return filename
def save_map(m, name):
    filename = os.path.join(OUTDIR, name)
    m.save(filename)
    print("Saved:", filename)
    return filename

# ----------------------------
# Example 1: Basic map + markers + popups + custom icons
# ----------------------------
m1 = Map(location=[48.8566, 2.3522], zoom_start=5, control_scale=True)  # center Paris

# Basic markers with simple popups
places = [
    {"name": "Paris — University", "lat": 48.8566, "lon": 2.3522, "desc": "University years"},
    {"name": "Tehran — Birthplace", "lat": 35.6892, "lon": 51.3890, "desc": "Where it all began"},
    {"name": "Berlin — Future Work", "lat": 52.52, "lon": 13.405, "desc": "Dream job city"}
]

for p in places:
    popup = Popup(f"<b>{p['name']}</b><br>{p['desc']}", max_width=250)
    Marker([p["lat"], p["lon"]], popup=popup, icon=Icon(color="blue", icon="info-sign")).add_to(m1)

# Custom Icon (emoji-style using DivIcon)
from folium.features import DivIcon
Marker(
    [48.8584, 2.2945],
    icon=DivIcon(html='<div style="font-size:24px">🗼</div>'),
    popup="Eiffel Tower (custom DivIcon)"
).add_to(m1)

save_map(m1, "01_basic_markers.html")

# ----------------------------
# Example 2: MarkerCluster, FastMarkerCluster, and clustered demo
# ----------------------------
m2 = Map(location=[48.8566, 2.3522], zoom_start=12)
cluster = MarkerCluster(name="MarkerCluster (click to expand)").add_to(m2)

# Add many close points to demonstrate clustering
cluster_points = [
    (48.8566 + 0.01*i, 2.3522 + 0.01*(i%3)) for i in range(30)
]
for idx, (lat, lon) in enumerate(cluster_points):
    Marker([lat, lon], popup=f"Point #{idx}").add_to(cluster)

# FastMarkerCluster (better for very many points; no individual popup support)
fast_points = [[48.8566 + 0.02*(i%6), 2.3522 + 0.02*(i//6)] for i in range(200)]
FastMarkerCluster(fast_points, name="FastMarkerCluster (200 pts)").add_to(m2)

LayerControl().add_to(m2)
save_map(m2, "02_clusters.html")

# ----------------------------
# Example 3: HeatMap (density visualization)
# ----------------------------
m3 = Map(location=[48.8566, 2.3522], zoom_start=12)
heat_data = [
    [48.8584, 2.2945],  # Eiffel
    [48.8606, 2.3376],  # Louvre
    [48.853, 2.3499],   # Île de la Cité
] * 20  # repeat to intensify

HeatMap(heat_data, radius=15, blur=10, min_opacity=0.3, name="HeatMap").add_to(m3)
LayerControl().add_to(m3)
save_map(m3, "03_heatmap.html")

# ----------------------------
# Example 4: Polylines, Polygons, CircleMarkers (movement & shapes)
# ----------------------------
m4 = Map(location=[48.8566, 2.3522], zoom_start=12)

# A sample path (polyline) — like a tracked walk or performance route
path = [
    [48.8566, 2.3522],
    [48.8584, 2.2945],  # Eiffel
    [48.8606, 2.3376],  # Louvre
    [48.853, 2.3499]
]
folium.PolyLine(path, color="purple", weight=4, opacity=0.8, tooltip="Performance path").add_to(m4)

# Polygon: a small custom area (e.g., a stage footprint)
polygon = folium.Polygon(locations=[
    [48.8575, 2.3500],
    [48.8578, 2.3530],
    [48.8555, 2.3540],
    [48.8552, 2.3510]
], color="green", fill=True, fill_opacity=0.2, tooltip="Stage footprint").add_to(m4)

# Circle and CircleMarker differences
folium.Circle(location=[48.8566, 2.3522], radius=200, color="red", fill=True, fill_opacity=0.1, tooltip="200m radius").add_to(m4)
folium.CircleMarker(location=[48.8584, 2.2945], radius=8, color="blue", fill=True, fill_opacity=0.9, tooltip="CircleMarker at Eiffel").add_to(m4)

save_map(m4, "04_paths_polygons.html")

# ----------------------------
# Example 5: ImageOverlay and Custom Tiles
# ----------------------------
m5 = Map(location=[48.8566, 2.3522], zoom_start=13)
# Small transparent overlay example (we'll create a tiny red square as base64 image could be used,
# but to keep this offline-friendly we will use folium's built-in rectangle drawing instead)
folium.Rectangle(bounds=[[48.853, 2.345], [48.861, 2.36]], color="#ff7800", weight=2, fill=True, fill_opacity=0.15, tooltip="Overlay-like rectangle").add_to(m5)
# Add another tile layer (Stamen Toner) so users can toggle basemaps
TileLayer(
    tiles="Stamen Toner",
    name="Stamen Toner",
    attr="Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap contributors"
).add_to(m5)

save_map(m5, "05_overlays_tiles.html")

# ----------------------------
# Example 6: FeatureGroups + LayerControl (turn layers on/off)
# ----------------------------
m6 = Map(location=[48.8566, 2.3522], zoom_start=12)
fg_markers = FeatureGroup(name="Markers group").add_to(m6)
fg_heat = FeatureGroup(name="Heat group").add_to(m6)

# Add some markers to the feature group
for i, (lat, lon) in enumerate([[48.8566, 2.3522], [48.86, 2.34], [48.85, 2.35]]):
    Marker([lat + i*0.002, lon + i*0.002], popup=f"FG marker {i}").add_to(fg_markers)

HeatMap([[48.8566, 2.3522], [48.859, 2.348], [48.853, 2.349]], name="heat_sample").add_to(fg_heat)

LayerControl().add_to(m6)
save_map(m6, "06_featuregroups_layers.html")

# ----------------------------
# Example 7: Draw plugin (allow the viewer to draw shapes on the map)
# ----------------------------
m7 = Map(location=[48.8566, 2.3522], zoom_start=13)
Draw(export=True, filename="drawn_data.geojson").add_to(m7)
save_map(m7, "07_draw_plugin.html")

# ----------------------------
# Example 8: MiniMap, MeasureControl, Fullscreen, LocateControl, Search
# ----------------------------
m8 = Map(location=[48.8566, 2.3522], zoom_start=12)
MiniMap().add_to(m8)
MeasureControl(primary_length_unit='meters').add_to(m8)
Fullscreen().add_to(m8)
LocateControl().add_to(m8)

# For Search demo, create a FeatureGroup with named places
search_fg = FeatureGroup(name="Searchable places")
for p in places:
    Marker([p["lat"], p["lon"]], popup=p["name"], tooltip=p["name"]).add_to(search_fg)
search_fg.add_to(m8)

# Add the search control (search by 'tooltip' or 'popup' value)
# Note: folium.Search expects a GeoJson or FeatureGroup with .get_name matching; using the FeatureGroup below
Search(layer=search_fg, search_label='tooltip', placeholder='Search places...').add_to(m8)
LayerControl().add_to(m8)
save_map(m8, "08_ui_plugins.html")

# ----------------------------
# Example 9: TimestampedGeoJson (time-aware points) — simulates movement over time
# ----------------------------
# We'll build a tiny GeoJSON with features each having a time stamp
features = []
base_time = datetime.now()
for i, (lat, lon) in enumerate([
    (48.8566, 2.3522),
    (48.8575, 2.3490),
    (48.8584, 2.3470),
    (48.8595, 2.3450)
]):
    t = (base_time + timedelta(seconds=10 * i)).isoformat()
    features.append({
        "type": "Feature",
        "properties": {"time": t, "style": {"color": "red"}, "icon": "circle", "popup": f"t={i}"},
        "geometry": {"type": "Point", "coordinates": [lon, lat]}
    })
tg = {"type": "FeatureCollection", "features": features}

m9 = Map(location=[48.8575, 2.3490], zoom_start=14)
TimestampedGeoJson(
    tg,
    period="PT10S",
    add_last_point=True,
    auto_play=False,
    loop=False,
    max_speed=1,
    loop_button=True,
    date_options='YYYY/MM/DD HH:mm:ss',
    time_slider_drag_update=True
).add_to(m9)
save_map(m9, "09_time_series.html")

# ----------------------------
# Example 10: GeoJSON polygon with tooltip and choropleth-style coloring (simple internal data)
# ----------------------------
# Create a tiny GeoJSON with two simplistic "regions" (fake)
geojson_small = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {"name": "Region A", "value": 10},
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[2.34, 48.86], [2.36, 48.86], [2.36, 48.85], [2.34, 48.85], [2.34, 48.86]]]
            }
        },
        {
            "type": "Feature",
            "properties": {"name": "Region B", "value": 40},
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[2.36, 48.86], [2.38, 48.86], [2.38, 48.85], [2.36, 48.85], [2.36, 48.86]]]
            }
        }
    ]
}

m10 = Map(location=[48.8566, 2.3522], zoom_start=14)
folium.GeoJson(
    geojson_small,
    name="Regions",
    style_function=lambda feat: {
        "fillColor": "#ffff00" if feat["properties"]["value"] < 20 else "#ff7800",
        "color": "black",
        "weight": 1,
        "fillOpacity": 0.5
    },
    tooltip=folium.GeoJsonTooltip(fields=["name", "value"], aliases=["Name:", "Value:"])
).add_to(m10)
LayerControl().add_to(m10)
save_map(m10, "10_geojson_regions.html")

# ----------------------------
# Example 11: Popup with rich HTML content and iframe embedding (images / links)
# ----------------------------
m11 = Map(location=[48.8566, 2.3522], zoom_start=13)
html = """
<h4>Custom popup</h4>
<p>This popup includes an image and a link.</p>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_Eiffel_Wikimedia_Commons.jpg/220px-Tour_Eiffel_Wikimedia_Commons.jpg" width="200"><br>
<a href="https://en.wikipedia.org/wiki/Eiffel_Tower" target="_blank">Wikipedia: Eiffel Tower</a>
"""
# Note: This external image will load only when you have internet in class.
iframe = IFrame(html, width=250, height=260)
Popup(iframe).add_to(Marker([48.8584, 2.2945]).add_to(m11))
save_map(m11, "11_rich_popup.html")

# ----------------------------
# Create one "all-in-one" map that layers many features and plugins for a live demo
# ----------------------------
m_all = Map(location=[48.8566, 2.3522], zoom_start=13, control_scale=True)
# Basemaps
TileLayer("OpenStreetMap", name="OpenStreetMap").add_to(m_all)
TileLayer(
    tiles="Stamen Terrain",
    name="Stamen Terrain",
    attr="Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap contributors"
).add_to(m_all)

TileLayer(
    tiles="Stamen Toner",
    name="Stamen Toner",
    attr="Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap contributors"
).add_to(m_all)


# Add clusters
mc = MarkerCluster(name="Cluster demo").add_to(m_all)
for i, (lat, lon) in enumerate(cluster_points[:40]):
    Marker([lat, lon], popup=f"Cluster item {i}").add_to(mc)

# Heat layer
HeatMap(heat_data, name="Heat").add_to(m_all)

# GeoJSON regions
folium.GeoJson(geojson_small, name="Regions Demo", tooltip=folium.GeoJsonTooltip(fields=["name", "value"])).add_to(m_all)

# Path and polygon
folium.PolyLine(path, color="purple", weight=4, tooltip="Path demo").add_to(m_all)
folium.Polygon(locations=polygon.locations, color="green", fill=True, fill_opacity=0.15, tooltip="Stage polygon").add_to(m_all)

# Plugins
MiniMap().add_to(m_all)
MeasureControl().add_to(m_all)
Fullscreen().add_to(m_all)
Draw(export=True).add_to(m_all)
LocateControl().add_to(m_all)

LayerControl(collapsed=False).add_to(m_all)  # show the layers control open for demo
save_map(m_all, "00_all_in_one.html")

# ----------------------------
# Build a simple index.html to open all examples quickly in browser during class
# ----------------------------
files = sorted([f for f in os.listdir(OUTDIR) if f.endswith(".html")])
index_lines = [
    "<!doctype html>",
    "<html><head><meta charset='utf-8'><title>Folium Showcase index</title></head><body>",
    "<h1>Folium Showcase — examples</h1>",
    "<p>Click any demo to open it in a new tab.</p>",
    "<ul>"
]
for f in files:
    index_lines.append(f"<li><a target='_blank' href='{f}'>{f}</a></li>")
index_lines.extend(["</ul>", "<p>Generated by folium_showcase.py</p>", "</body></html>"])

with open(os.path.join(OUTDIR, "index.html"), "w", encoding="utf-8") as fh:
    fh.write("\n".join(index_lines))

print("\nAll files generated in ./output/ . Open output/index.html to browse demos.")
