
<script>
    import Audio from "../Audio.svelte";
    import mega_073 from '$lib/assets/mega_073.jpg'
    import biberon_robert from '$lib/assets/biberon_robert.jpg'
    import Montage_allaitement from '$lib/assets/Montage/Montage_allaitement.mp3'
    import {base} from '$app/paths'

    let dysMode = false;
    
</script>

<Audio
    chemin={Montage_allaitement}
/>

<!-- Bouton mode dyslexique -->

<button class="dysbouton" on:click={() => dysMode = !dysMode}>
    {dysMode ? 'Mode dyslexie' : 'Mode normal'}
</button>

<div class:dys={dysMode}>

<h1>Allaitement naturel ou allaitement artificiel, quelles étaient les pratiques dans le Finistère ?</h1>

<br>
<p>Le XIX<sup>e</sup> est une époque de grands changements. L'industrialisation s'intensifie, l'innovation progresse et même le domaine médical connaît une évolution significative. Cela amène la population à changer ses coutumes et ses habitudes.</p>
<br>
<p>Au début de ce siècle et même lors des siècles précédents, l'allaitement au sein, dans le Finistère, était la norme. Marginal, l'allaitement artificiel n'était employé que lorsque la santé de la mère ne permettait pas l'allaitement naturel : corps faible, maladie, incapacité à produire assez de lait, inflammation des seins, telles pouvaient être les raisons limitant l'allaitement au sein. Du lait animal, de vache ou de chèvre, pouvait alors être donné au nourrisson. Dans certains cantons de l’est du Finistère, comme à Châteauneuf-du-Faou, les enfants étaient dans certains cas allaités directement au pis de l'animal. À Daoulas ou à Lesneven, <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272250/" target="_blank"> <em> une voisine proposait sans contrepartie de nourrir le nourrisson par «&nbspacte de charité qu'elle faisait toujours avec un vif plaisir&nbsp»</em></a>, quand la mère était dans l'incapacité de le faire.</p>

<br>
<div class ="allaitement">
<img src={mega_073} alt ="Vue sur une nourrice donnant le sein">
<figure><figcaption><a href="http://www.collections.musee-bretagne.fr/zoom.php?q=id:jo506404&nostat=T&marginMin=0&marginMax=0&curPage=13" target="_blank">Photographie de l'ouvrage (p.14)</a>. Une nourrice de Pont-Aven donne le sein à un enfant. Un enfant plus âgé est à ses côtés.</figcaption></figure>
</div>

<br>
<p>Lors de l'allaitement artificiel, les mères pouvaient utiliser des biberons ou des équivalents variés et plus simples : dans le nord du Finistère, on utilisait une bouteille bouchée d'une éponge que l'enfant aspirait par succion ; dans le sud et le centre, c’était un petit cruchon de terre d'environ deux décilitres garni d'un morceau de vieille toile ; dans l'extrême ouest, une burette était employée, contenant du lait de vache étendu d'eau et tiédi. Du côté de Quimper,  <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272013/" target="_blank">on employait une petite soucoupe à bec creusée, nommée <em>«&nbspcrâle&nbsp»</em></a>. À Carhaix, deux types de biberons coexistaient : un simple vase en forme de poire à goulot, et un second plus grand muni d'une éponge latérale appelée <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272014/" target="_blank"><em> «&nbsptétin&nbsp» — «&nbspPen-Bronn&nbsp» en breton, soit littéralement «&nbsptête de mamelle&nbsp».</em></a></p>
<br>
<p>Pour calmer les pleurs d'un nourrisson, on pouvait lui donner un suçon composé de mie de pain avec du sucre, du beurre ou du miel renfermé dans un morceau de toile. Cela calmait sa faim et ses cris. Cette méthode était pratiquée sur l'île de Sein, à Ouessant ou à Landerneau. Sur l'île Molène, <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272889/" target="_blank"><em>«&nbspcette pratique était tellement répandue qu'une croyance aurait attribué la grande bouche de ses habitants au fait d'avoir longtemps usé du suçon.&nbsp»</em></a></p>
<br>

<br>
<div class ="biberonrobert">
<img src={biberon_robert} alt ="affiche publicitaire">
<figure><figcaption><a href="https://gallica.bnf.fr/ark:/12148/btv1b9008803s.item#" target="_blank">Affiche publicitaire pour le biberon Robert (Gallica, BnF).</a></figcaption></figure>
</div>

<br>
<p>Les biberons se perfectionnèrent au cours du XIX<sup>e</sup>&nbspsiècle et même si l'allaitement au sein restait la pratique la plus utilisée, dans les villes l'intérêt pour cet instrument se développa. Progressivement, ils remplacèrent les petits pots ou les cruchons.  Le biberon <em>«&nbspperfectionné&nbsp»</em> du système Robert ou Monod devint le référent en la matière. L'intérêt pour le biberon était contrasté selon les localités. À Ouessant, l'allaitement artificiel se faisait dans plus de 60 % des cas, en raison de la charge de travail des femmes. Les hommes partant en mer pêcher une grande partie de l'année, les travaux aux champs, les tâches domestiques et l'éducation des enfants incombaient alors à la mère. À l'opposé, dans d'autres communes comme Lesneven, Rosporden ou encore Plouigneau, le biberon était plutôt mal vu. À Morlaix, <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272572/" target="_blank"><em>«&nbsples femmes âgées reprochaient à leurs filles de ne pouvoir allaiter leurs enfants comme elles le faisaient elles-mêmes autrefois&nbsp».</em></a></p>
<br>
<p><em>«&nbspAujourd'hui&nbsp»</em> comme <em>«&nbspautrefois&nbsp»</em>, l'allaitement au sein restait le meilleur moyen de nourrir un enfant. Les progrès médicaux mirent en avant que le nourrissage au sein était plus hygiénique et plus nourrissant pour l'enfant qui n'était sevré que vers un ou deux ans. L'allaitement artificiel, quant à lui, était vite remplacé  par de la nourriture solide pour l'enfant. Le biberon était peu hygiénique et rempli de bactéries. Souvent dégouté par le lait gâté encore présent dans les biberons, le nourrisson se tournait rapidement vers les bouillis de froment ou d'avoine coupées à du lait ou de l'eau.</p>
<br>
<a href="{base}/apropos" class="source" target="_blank">→ Pour aller plus loin, voir nos sources ici ←</a>

</div>

<style>

/* Code à copier coller sur toutes les pages */
   
   @font-face {
    font-family : OpenDyslexic;
    src: url('/Fonts/open_dyslexic/OpenDyslexic-Bold.otf');
   }

    p{
        margin-left: 8%;
        margin-right: 8%;
        text-align : justify;
        font-family : Arial, Verdana, Sans-serif;
        font-size : 18px;
        letter-spacing : 1.5px;
    }

    h1 {
        text-align : center;
        font-family : Verdana, sans-serif;
        font-weight : bold;
        margin-left : 3%;
        margin-right : 3%;
    }
    .source {
        display : block;
        text-align : center;
        font-family : Verdana, sans-serif;
        font-weight : bold;
        margin-left : 3%;
        margin-right : 3%;
        font-size : 20px;
    }

    .dysbouton {
    cursor: pointer;
    padding: 0.5rem 1rem;
    margin: 1rem;
    border-radius: 5px;
    border: none;
    background-color: #3b2224;
    color: white;
    font-size: 14px;
}

.dys p, .dys h1, .dys figcaption {
    font-family: 'OpenDyslexic', verdana, sans-serif;
    font-size: 20px;
    line-height: 2;
    letter-spacing: 1.5px;
    word-spacing: 1.5px;
}

.dys p {
        text-align : left;
}

a{
    text-decoration : none;
    color : brown;
}

/* Code à modifier selon les images */

    .allaitement, .biberonrobert {
        display : flex;
        flex-direction : column;
        gap : 1rem;
        width : 100%;
        align-items : center;
    }

    .allaitement img, .biberonrobert img {
        width : 40%;
        height : auto;
        display : block;
    }

    figure {
        text-align : center;
        margin-top: 1%;
        margin-bottom: 2%;
        width : 70%;
    }
</style>