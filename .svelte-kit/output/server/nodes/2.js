import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.GPQsGUB7.js","_app/immutable/chunks/7bYFGcZI.js","_app/immutable/chunks/51RuFlK9.js","_app/immutable/chunks/C1qWmdcx.js","_app/immutable/chunks/CrJHInmU.js","_app/immutable/chunks/DhUw68Ip.js","_app/immutable/chunks/CoXX6Fni.js"];
export const stylesheets = ["_app/immutable/assets/Icone_livre.Cf0D7SHW.css","_app/immutable/assets/2.Cvmz6fp_.css"];
export const fonts = [];
