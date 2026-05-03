import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CMb1beWL.js","_app/immutable/chunks/7bYFGcZI.js","_app/immutable/chunks/51RuFlK9.js","_app/immutable/chunks/vN7LVBTN.js","_app/immutable/chunks/CHRj4bxW.js","_app/immutable/chunks/CrJHInmU.js"];
export const stylesheets = [];
export const fonts = [];
