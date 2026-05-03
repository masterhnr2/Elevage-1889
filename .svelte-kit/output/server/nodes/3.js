import * as universal from '../entries/pages/apropos/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/apropos/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/apropos/+page.js";
export const imports = ["_app/immutable/nodes/3.DlBT7Djo.js","_app/immutable/chunks/7bYFGcZI.js","_app/immutable/chunks/51RuFlK9.js","_app/immutable/chunks/C1qWmdcx.js","_app/immutable/chunks/CrJHInmU.js","_app/immutable/chunks/DhUw68Ip.js","_app/immutable/chunks/CoXX6Fni.js"];
export const stylesheets = ["_app/immutable/assets/Icone_livre.Cf0D7SHW.css","_app/immutable/assets/3.DXrz5a0i.css"];
export const fonts = [];
