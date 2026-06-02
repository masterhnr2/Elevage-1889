import * as universal from '../entries/pages/folium/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/folium/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/folium/+page.js";
export const imports = ["_app/immutable/nodes/4.B739PhEp.js","_app/immutable/chunks/Uzf8I0sM.js","_app/immutable/chunks/DoiNmOAs.js","_app/immutable/chunks/BewNv0_R.js","_app/immutable/chunks/DsUSfprN.js","_app/immutable/chunks/3bASLz40.js","_app/immutable/chunks/BNRrBNS3.js","_app/immutable/chunks/C3JWc4s0.js","_app/immutable/chunks/nQrjMojE.js","_app/immutable/chunks/11N8thD5.js"];
export const stylesheets = ["_app/immutable/assets/Navbar.C0FCd9VB.css","_app/immutable/assets/4.DvfMyldV.css"];
export const fonts = [];
