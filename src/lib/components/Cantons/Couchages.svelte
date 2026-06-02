<script>
    import Audio from "../Audio.svelte";
    import mega_059 from '$lib/assets/mega_059.jpg';
    import {base} from '$app/paths';
    import mega_055 from '$lib/assets/mega_055.jpg';
    import mega_066 from '$lib/assets/mega_066.jpg';
    import Montage_couchages from '$lib/assets/Montage/Montage_couchages.mp3'

    let dysMode = false;

</script>

<Audio
    chemin={Montage_couchages}
/>

<!-- Bouton mode dyslexique -->

<button class="dysbouton" on:click={() => dysMode = !dysMode}>
    {dysMode ? 'Mode dyslexie' : 'Mode normal'}
</button>

<div class:dys={dysMode}>

<h1>Les modes de couchage</h1>

<p>Les modes de couchage correspondent à l'ensemble des dispositions matérielles mises en place pour assurer le sommeil des enfants. Ce dispositif constitue tout un <em>«&nbspsavoir-faire&nbsp»</em> qui articule le mobilier (le berceau, la bercelonnette, le lit clos, etc.), la literie (la paillasse, le drap), l'emplacement et les pratiques qui l'entourent comme l'emmaillotement ou le bercement. Les cantons de Huelgoat, Crozon, Pleyben, et Le Faou présentent dans l'enquête d'Émile Bérard des pratiques proches, avec quelques particularités, mais ils illustrent de façon générale l'évolution des modes de couchage dans l'ensemble du Finistère au XIX<sup>e</sup>&nbspsiècle.</p><br>

<h2>Autrefois</h2>
<br>
<p> Avant l'enquête d'Emile Bérard, l’usage du berceau était largement répandu dans tout le Finistère, même si la forme et les matériaux variaient selon les cantons. À Pleyben et au Faou, le couchage était presque identique : il s'agissait <a href =" http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272024/" target="_blank"><em>«&nbspd'une caisse rustique ou une boîte massive en bois de chêne [...] ou de châtaignier reposant sur des supports en forme d'arc de cercle&nbsp»</em></a> pour faciliter le bercement. Pour Huelgoat, on notait l'usage de paniers en osier, parfois munis d'un mécanisme de fermeture permettant de protéger l'enfant des insectes et des animaux de la ferme. Au-delà de leur forme, ces berceaux avaient un point en commun : ils étaient de très petites dimensions. Celle-ci s'explique par le port du maillot, une pratique courante consistant à envelopper étroitement le corps du nourrisson avec plusieurs couches de linge. Cette pratique était soutenue par les adultes convaincus que le corps des nouveau-nés était inarticulé ou inachevé, nécessitant à nouveau un façonnage.</p><br>

<div class="berceau">
<img src={mega_059} alt="Berceau en bois rectangulaire."/>
<figure>
<figcaption><a href="http://www.collections.musee-bretagne.fr/ark:/83011/FLMjo223989" target="_blank">Vue d'un berceau</a> bas constitué d'une caisse en bois de châtaignier à parois inclinées avec des traverses à bascule. Quimper, deuxième moitié du XX<sup>ème</sup> siècle (collections du Musée de Bretagne).</figcaption>
</figure>
</div>
<br>

<p>Le choix de la literie complétait cet aménagement du berceau. Il suivait ce même principe de façonnage avec une superposition de couches pour former un cocon chaud pour l'enfant. Elle se composait essentiellement de la paille posée dans le fond du berceau, d'une couette, c’est-à-dire une enveloppe en tissu remplie de matières végétales comme la balle d’avoine à laquelle s’ajoutaient des draps en toile de chanvre, des couvertures, un couvre-pied, et parfois un oreiller ou des rideaux. L'ensemble était aéré quotidiennement pendant quelques heures (2 ou 3 heures), et renouvelé plusieurs fois dans l'année en fonction des moyens de la famille. L'emplacement du berceau répondait également à une logique précise. Il était installé près du lit parental sur un banc appelé <em>«&nbspbanc-dossier&nbsp»</em> afin de maintenir une proximité avec l'enfant. Il était également habituel que l'enfant soit couché dans une autre pièce selon l'aisance de la famille, l’âge ou la présence d’une nourrice.</p><br>
<br>

<p> Bérard identifie d’autres moyens de couchage liés aux contraintes des familles ayant d'autres enfants de bas-âge ou des difficultés financières. Dans ces cas-là, la solution courante venait soit de l'emploi d'un grand berceau pour les deux enfants, soit de l'aide d'un voisin qui pouvait reléguer <a href=" http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272378/high" target="_blank"><em>«&nbsp[prêter] un berceau&nbsp»</em></a> à la mère. Dans d'autres cantons, il s'agissait néanmoins d'utiliser des mobiliers destinés à d'autres fins comme des alternatives de couchage pour les enfants. C'est l'exemple typique de Huelgoat, le fond d'une armoire servait en ce sens de couchage d'appoint, où l'on installait l'un des enfants (le plus souvent l'aîné) avec la même literie.</p><br>

<p>Enfin, au-delà du mobilier, <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272026/" target="_blank"><em>«&nbsple bercement&nbsp»</em></a> occupait ainsi une place importante dans le couchage des enfants. Il constituait une alternative pour calmer et endormir les enfants. Au Faou, certains berceaux étaient munis d’une ficelle permettant le bercement à distance. Selon les croyances de l’époque, cette pratique pouvait aussi prévenir l’apparition des hernies abdominales causées par les crises de pleurs. Le bercement substituait alors d’autres méthodes, comme le gavage au lait de vache, une méthode courante qui consistait à donner une quantité importante de lait de vache à l’enfant pour l'endormir. Néanmoins, comme le relève l'auteur, la pratique du bercement était paradoxalement décriée par les hygiénistes comme nocive pour la santé des jeunes enfants parce que <em>«&nbsp le sommeil de ces bercements tiendrait plus d'un état comateux que d'un sommeil normal&nbsp».</em></p>
<br>
<h2>Aujourd'hui</h2>
<br>
<p> Au cours de l'enquête de Bérard, l'évolution des modes de couchage n'est pas uniforme dans tous les cantons. Les villes adoptent les nouveaux modes de couchage, mais l'évolution reste encore partielle dans  certaines campagnes où les procédés anciens subsistent. À Huelgoat, par exemple, l'usage des armoires comme lits pour les jeunes enfants perdure. Le  <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272097/" target="_blank"><em>«&nbsplit-clos&nbsp»</em></a> reste également l'un des mobiliers les plus répandus pour le couchage des enfants : il s'agit d'un lit fermé utilisé par toute la famille. Certains modèles comportent deux niveaux de couchage : la partie supérieure réservée pour les enfants, et l'inférieure pour les parents. Dans certains cas, un petit berceau sous la forme d'un demi cylindre renversé, appelé <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272416/" target="_blank"><em>«&nbsp kavel ou Bransel&nbsp»</em></a> est directement intégré au lit clos. Cette promiscuité est décriée par Bérard comme une pratique <em>«&nbspanti-hygiénique puisqu’[elle] oblige l’enfant à dormir dans une atmosphère constamment viciée par suite du peu d’espace existant dans le lit des parents&nbsp».</em></p> <br>

<div class="ferme">
<img src={mega_055} alt="Intérieur d'une ferme bretonne."/>
<figure>
<figcaption><em><a href="http://www.collections.musee-bretagne.fr/ark:/83011/FLMjo115411" target="_blank">Dessin représentant la vue d'intérieur d'une ferme</a>. Sur la droite se trouve la cheminée où une
femme prépare la cuisson dans un grand récipient (elle agite le contenu avec un grand bâton) ; à sa gauche,
une jeune fille avec une quenouille. <strong>Vers la gauche, un lit clos avec le banc-coffre</strong> sur lequel
est assis un homme</em>. Milieu du XIX<sup>e</sup> siècle (collections du Musée de Bretagne).</figcaption>
</figure>
</div>
<br>
<p> Parallèlement, les formes de couchage évoluent progressivement dans d'autres cantons. Le changement des berceaux se manifeste par l'apparition de modèles plus grands et plus légers, en osier ou en bois sculpté (chêne ou châtaignier) avec des dessins ou des ornements. Les procédés anciens restent néanmoins ancrés,  notamment dans le choix et l'organisation de la literie : l'usage de la paille, des couettes de balle d'avoine, et le banc pour poser le berceau, reste fréquents dans plusieurs cantons. À Crozon et Pleyben, par exemple, l'auteur note l'emploi de nouveaux berceaux offrant un couchage plus chaud et confortable pour les enfants (matelas d’édredon, couverture en laine ou en coton), dont l'usage s'étend jusqu'à l'âge de 2 ou 3 ans.</p>
<br>

<div class="berosier">
<img src={mega_066} alt="Dessin d'un berceau en osier.">
<figure>
<figcaption><em><a href="http://www.collections.musee-bretagne.fr/ark:/83011/FLMjo149637" target="_blank">Dessin sur papier représentant une femme de Châteaulin veillant sur un enfant</a>. À ses pieds, on
distingue un berceau sous la forme d'un panier en osier garni d'une couverture épaisse pour le confort de
l'enfant</em>. Gravure de la Galerie Armoricaine, vers 1845 (collections du Musée de Bretagne).</figcaption>
</figure>
</div>
<br>
<a href="{base}/apropos" class="source" target="_blank">→ Pour aller plus loin, voir nos sources ici ←</a>

</div>

<style>

   @font-face {
    font-family : OpenDyslexic;
    src: url('/Fonts/open_dyslexic/OpenDyslexic-Bold.otf');
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

    a{
    text-decoration : none;
    color : brown;
    }
    
    p {
        margin-left: 8%;
        margin-right: 8%;
        text-align : justify;
        font-family : Arial, Verdana, Sans-serif;
        font-size : 18px;
        letter-spacing : 1.5px;
    }


    h1, h2 {
        text-align : center;
        font-family : Verdana, sans-serif;
        font-weight : bold;
        margin-left : 3%;
        margin-right : 3%;
    }

    h2 {
        margin-left : 5%;
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

.dys p, .dys h1, .dys h2, .dys figcaption {
    font-family: 'OpenDyslexic', verdana, sans-serif;
    font-size: 20px;
    line-height: 2;
    letter-spacing: 1.5px;
    word-spacing: 1.5px;
}

    .dys p {
        text-align : left;
}

    .berceau, .berosier, .ferme {
        width : 90%;
        margin : 1rem auto;
    }
    .berceau img, .berosier img, .ferme img {
        width : 100%;
        height : auto;
        display : block;
    }

        figure {
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 4%;
        text-align : justify;
    }

</style>