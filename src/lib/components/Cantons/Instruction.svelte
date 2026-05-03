
<script>
    import Audio from "../Audio.svelte";
    import mega_029 from '$lib/assets/mega_029.jpg'
    import {base} from '$app/paths'

    let dysMode = false;
    
</script>

<Audio
    chemin={""}
/>

<!-- Bouton mode dyslexique -->

<button class="dysbouton" on:click={() => dysMode = !dysMode}>
    {dysMode ? 'Mode normal' : 'Mode dyslexie'}
</button>

<div class:dys={dysMode}>

<h1> L’instruction des enfants au XIX<sup>e</sup>&nbspsiècle </h1>
<p>L’instruction des enfants au XIX<sup>e</sup>&nbspsiècle était assez inégale selon les cantons du Finistère. Dans son ouvrage, Emile Bérard apporte un éclairage sur l’évolution des modes et moyens d’instruction en organisant son propos en deux parties <em>«&nbspautrefois&nbsp»</em> et <em>«&nbspaujourd’hui&nbsp»</em>, comme pour l’ensemble des thèmes qu’il aborde. Des différences sont assez notables entre les villes et les campagnes. Cette instruction est particulièrement décrite par l’auteur pour Brest, Daoulas et Landerneau. </p> 
<br>

<h2>Autrefois</h2>
<br>
<p>À Brest, une première école publique fut ouverte le 14 mars 1746, suivie par d’autres, qui furent malheureusement progressivement fermées à partir de 1791. Furent nommés vers 1800 cinq instituteurs puis, après de nombreux efforts, le conseil municipal obtint en 1822 la <a href="http://www.collections.musee-bretagne.fr/zoom.php?q=id:jo506404&nostat=T&marginMin=0&marginMax=0&curPage=250" target="_blank"><em>«&nbspréinstallation des frères de la doctrine chrétienne&nbsp»</em></a>, une congrégation qui se consacre à l’éducation de la jeunesse, notamment celle des classes populaires. Malgré tout, les moyens mis en place pour l’éducation des enfants restaient très précaires et <a href="http://www.collections.musee-bretagne.fr/zoom.php?q=id:jo506404&nostat=T&marginMin=0&marginMax=0&curPage=250" target="_blank"><em>«&nbspdéfectueux&nbsp»</em></a>; avant 1850, ce sont les familles qui décidaient de l'instruction des enfants. En général, elles préféraient compter sur eux pour les aider dans les champs ou, dans de rares cas, les magasins. </p>
<p>À Landerneau comme à Brest, les enfants n’allaient pas en classe ou très rarement avant 10 ou 11 ans. L’école avait pour objectif de leur apprendre la lecture du breton et les rudiments du catéchisme&nbsp; à Daoulas, le latin, l’histoire religieuse et des bases de calcul s’ajoutaient à ces deux disciplines.</p>
 <br>
<h2> Aujourd’hui </h2>
<br>
<p>L’auteur effectue assez étonnement un saut dans le temps important et indique sans transition avec le manque d’école mentionné précédemment que dorénavant l’instruction était très répandue dans de nombreux établissements. La loi Ferry étant désormais établie, l'école était obligatoire entre 6 et 13&nbspans pour les enfants des deux sexes. Comme Émile Bérard le souligne, les écoles étaient de plusieurs catégories allant de <a href="http://www.collections.musee-bretagne.fr/zoom.php?q=id:jo506404&nostat=T&marginMin=0&marginMax=0&curPage=250" target="_blank"><em>«&nbsplycées de filles et de garçons, écoles supérieures, écoles primaires, écoles maternelles, salle d'asile rivalisent de succès. Il n'y a guère d'enfants ne fréquentant pas les établissements scolaires&nbsp».</em></a> Les salles d'asile correspondaient à des établissements destinés aux enfants entre 2 et 6&nbspans&nbsp&nbsp; elles furent ensuite remplacées par les écoles maternelles.</p>
<p>À Brest, les enfants étaient envoyés à l'école vers 8 ou 9 ans au plus tôt dans les campagnes et plus jeunes dans les villes. De même à Landerneau, il y avait une grande fréquentation des écoles maternelles, où étaient enseignées <a href="http://www.collections.musee-bretagne.fr/zoom.php?q=id:jo506404&nostat=T&marginMin=0&marginMax=0&curPage=290" target="_blank"><em>«&nbsptoutes les facultés intellectuelles simultanément&nbsp»</em></a>. </p> 
<p>Daoulas semble pour sa part représenter le lieu doté du plus grand nombre d’établissements avec 26 écoles pour les deux sexes. Les écoles devenaient ainsi plus nombreuses et l'instruction se développait progressivement.</p>
<br>

<div class="ecole">
<img src={mega_029} alt="Photographie des élèves d'une école."/>
<figure>
<figcaption>Les élèves d'une école féminine posent devant leur établissement.</figcaption>
</figure>
<br>
<a href="{base}/apropos" class="source">→ Pour aller plus loin, voir nos sources ici ←</a>
</div>


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

    .ecole {
        width : 90%;
        margin : 1rem auto;
    }
    .ecole img {
        width : 92%;
        height : auto;
        display : block;
        margin-left: 5%;
        margin-right: 8%;
    }

        figure {
        margin-top: 2%;
        text-align : center;

    }

</style>