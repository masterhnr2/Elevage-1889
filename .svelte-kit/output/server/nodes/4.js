import * as universal from '../entries/pages/folium/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/folium/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/folium/+page.js";
export const imports = ["_app/immutable/nodes/4.C73rgGqR.js","_app/immutable/chunks/7bYFGcZI.js","_app/immutable/chunks/51RuFlK9.js","_app/immutable/chunks/C1qWmdcx.js","_app/immutable/chunks/CrJHInmU.js","_app/immutable/chunks/CoXX6Fni.js","_app/immutable/chunks/CHRj4bxW.js","_app/immutable/chunks/CQGBZTu-.js","_app/immutable/chunks/D6fkD4d_.js","_app/immutable/chunks/DhUw68Ip.js"];
export const stylesheets = ["_app/immutable/assets/Icone_livre.Cf0D7SHW.css","_app/immutable/assets/4.CWANhoQD.css"];
export const fonts = [];
