import * as universal from '../entries/pages/apropos/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/apropos/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/apropos/+page.js";
export const imports = ["_app/immutable/nodes/3.qM5KVslZ.js","_app/immutable/chunks/Uzf8I0sM.js","_app/immutable/chunks/DoiNmOAs.js","_app/immutable/chunks/BewNv0_R.js","_app/immutable/chunks/DsUSfprN.js","_app/immutable/chunks/3bASLz40.js","_app/immutable/chunks/BNRrBNS3.js","_app/immutable/chunks/11N8thD5.js","_app/immutable/chunks/BFSUXsBh.js"];
export const stylesheets = ["_app/immutable/assets/Navbar.C0FCd9VB.css","_app/immutable/assets/Arrowup.DQ1gOlLu.css","_app/immutable/assets/3.f54pibmh.css"];
export const fonts = [];
