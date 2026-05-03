import { a as attr, s as stringify } from "../../chunks/renderer.js";
import { I as Icone_livre } from "../../chunks/Icone_livre.js";
import { b as base } from "../../chunks/server.js";
import "../../chunks/url.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
const logobretagne = "/Elevage-1889/_app/immutable/assets/logobretagne.C8Cv7yts.png";
const logo_hn = "/Elevage-1889/_app/immutable/assets/logo_hn.CQoS3ki3.png";
const Carte_accueuil = "/Elevage-1889/_app/immutable/assets/Carte_accueuil.yXGNC9D7.jpg";
function _page($$renderer) {
  $$renderer.push(`<nav class="svelte-1uha8ag"><ul class="svelte-1uha8ag"><li class="svelte-1uha8ag"><a${attr("href", `${stringify(base)}/`)} class="svelte-1uha8ag">Accueil</a></li> <li class="svelte-1uha8ag"><a${attr("href", `${stringify(base)}/folium`)} class="svelte-1uha8ag">Carte interactive</a></li> <li class="svelte-1uha8ag"><a${attr("href", `${stringify(base)}/apropos`)} class="svelte-1uha8ag">À propos</a></li></ul></nav> <div class="bod svelte-1uha8ag"><h1 class="svelte-1uha8ag"><strong>Exposition universelle de 1889 Elevage des enfants du premier âge - Finistère</strong></h1> <div class="conteneur svelte-1uha8ag"><div class="musee svelte-1uha8ag"><a href="https://www.leschampslibres.fr/les-champs-libres/musee-de-bretagne" target="_blank"><img${attr("src", logobretagne)} alt="Image de la carte" class="museeimage svelte-1uha8ag"/></a> <div class="museeacces svelte-1uha8ag"><p><a href="https://www.leschampslibres.fr/les-champs-libres/musee-de-bretagne">Les Champs Libres - Musée de Bretagne</a></p></div></div> <div class="carte svelte-1uha8ag"><a${attr("href", `${stringify(base)}/folium`)}><img${attr("src", Carte_accueuil)} alt="Image de la carte" class="carteimage svelte-1uha8ag"/></a> <div class="carteacces svelte-1uha8ag"><p><a${attr("href", `${stringify(base)}/folium`)}>Carte interactive</a></p></div></div> <div class="hn svelte-1uha8ag"><a href="https://lnk.bio/masterhnr2" target="_blank"><img${attr("src", logo_hn)} alt="Image des RS" class="hnimage svelte-1uha8ag"/></a> <div class="hnacces svelte-1uha8ag"><p><a href="https://lnk.bio/masterhnr2">Master Humanités Numériques Université Rennes 2</a></p></div></div></div></div> `);
  Icone_livre($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
