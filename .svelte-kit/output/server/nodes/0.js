import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0._Guivz8r.js","_app/immutable/chunks/Uzf8I0sM.js","_app/immutable/chunks/DoiNmOAs.js","_app/immutable/chunks/YhjufpQq.js","_app/immutable/chunks/C3JWc4s0.js","_app/immutable/chunks/DsUSfprN.js"];
export const stylesheets = [];
export const fonts = [];
