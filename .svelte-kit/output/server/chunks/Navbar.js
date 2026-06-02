import { a as attr, s as stringify } from "./renderer.js";
import { b as base } from "./server.js";
import "./url.js";
import "@sveltejs/kit/internal/server";
import "./root.js";
const Livre = "/Elevage-1889/_app/immutable/assets/Ico%20livre.CODWWVHc.png";
function Navbar($$renderer) {
  $$renderer.push(`<nav class="svelte-rfuq4y"><ul class="svelte-rfuq4y"><li class="icone svelte-rfuq4y"><a href="http://www.collections.musee-bretagne.fr/ark:/83011/FLMjo506404" target="_blank" class="svelte-rfuq4y"><img${attr("src", Livre)} alt="Icône livre" class="svelte-rfuq4y"/> <span class="svelte-rfuq4y">Version numérique de l'ouvrage</span></a></li> <li class="svelte-rfuq4y"><a${attr("href", `${stringify(base)}/`)} class="svelte-rfuq4y">Accueil</a></li> <li class="svelte-rfuq4y"><a${attr("href", `${stringify(base)}/folium`)} class="svelte-rfuq4y">Carte interactive</a></li> <li class="svelte-rfuq4y"><a${attr("href", `${stringify(base)}/apropos`)} class="svelte-rfuq4y">À propos</a></li></ul></nav>`);
}
export {
  Navbar as N
};
