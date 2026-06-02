
<script>
    import Audio from "../Audio.svelte";
    import mega_040 from '$lib/assets/mega_040.jpg'
    import mega_044 from '$lib/assets/mega_044.jpg'
    import Montage_assistes from '$lib/assets/Montage/Montage_assistes.mp3'
    import {base} from '$app/paths'

    let dysMode = false;
    
</script>

<Audio
    chemin={Montage_assistes}
/>

<!-- Bouton mode dyslexique -->

<button class="dysbouton" on:click={() => dysMode = !dysMode}>
    {dysMode ? 'Mode dyslexie' : 'Mode normal'}
</button>

<div class:dys={dysMode}>

<h1> Les vêtures des enfants assistés à Pont-Croix, Pont-L'Abbé et Rosporden </h1> 
<br> 
<p>Par «&nbspenfant assisté&nbsp», on entend les enfants placés sous le régime de l'Assistance publique, un ministère dédié à la protection sociale des enfants comme des adultes. Ce sont à la fois des orphelins, des enfants abandonnés ou des enfants maltraités. Pont-L'Abbé et Rosporden sont rattachés par Émile Bérard à Quimper alors que Pont-Croix a ses propres pratiques pour les vêtements des enfants assistés.</p>
<br>
<h2> Avant l'enquête par Émile Bérard : une spécificité entre enfants assistés et enfants</h2> 
<br> 
<p>Dans son introduction, Émile Bérard écrit <a href="http://www.collections.musee-bretagne.fr/zoom.php?q=id:jo506404&nostat=T&marginMin=0&marginMax=0&curPage=26" target="_blank"><em>«&nbsples règlements administratifs sur les vêtements des enfants assistés stipulaient qu'à l'âge d'un an les commissions hospitalières délivreraient aux pupilles&nbsp»</em></a> une première vêture. L'auteur indique que le renouvellement de la vêture se faisait tous les ans jusqu'à 6 ans puis de même de 6 ans à 12 ans. Certains vêtements étaient obligatoires comme les robes ou les vestes dans le cas où les enfants assistaient aux catéchismes ou allaient à l'école primaire.</p>
<br>
<p>Pour Pont-L'Abbé et Rosporden avant 1860, l'auteur fait une liste de ce qui est donné par l'hospice, c'est-à-dire par la maison d'assistance pour les personnes démunies. Il y avait une distinction entre les filles et les garçons qui ne se faisait qu'à partir de 6 ans où les vêtements des enfants étaient des miniatures de ceux des adultes.</p>
<br>
<p> Les étoffes utilisées pour ces vêtures n'étaient selon les dires de l'auteur que pour les enfants des hospices. La couleur de ces vêtements était brun fauve ou gris fer. Bérard nous informe aussi que leur coupe était <a href="http://www.collections.musee-bretagne.fr/zoom.php?q=id:jo506404&nostat=T&marginMin=0&marginMax=0&curPage=59" target="_blank"><em>«&nbspridicule&nbsp»</em></a>, autrement dit elle était certainement mal faite.</p>
<br>
<p> À Pont-Croix, comme pour les deux autres villes, la liste des vêtures est donnée par l'hospice, ce qui engendre des moqueries envers les enfants assistés. Selon Bérard, <a href="http://www.collections.musee-bretagne.fr/zoom.php?q=id:jo506404&nostat=T&marginMin=0&marginMax=0&curPage=179" target="_blank"><em>«&nbspl'hospice [la] délivrait aux nourriciers&nbsp»</em></a> pour les garçons et les filles.</p>
<br>

<div class="famille">
<img src={mega_040} alt="Une famille de fermiers avec sept enfants."/>
<figure>
<figcaption>Photographie d'une famille de sept enfants issue du livre <em><a href="http://www.collections.musee-bretagne.fr/ark:/83011/FLMjo149637" target="_blank">Souvenirs de Bretagne</a></em> vers 1860 (Flora, collections du Musée de Bretagne).</figcaption>
</figure>
</div>
<br>
<p>Cette photographie nous permet de voir ce que décrit Bérard. Elle fait partie d'une collection de photographies prises par L. Poret. La famille est en costume de civil ou en costume de Basse Bretagne en extérieur.</p>
<br>

<h2>Au moment où Bérard fait son enquête : des changements pour les vêtures</h2>
<br>
<p> Un changement s'opère à partir des années 1860 avec une autre forme de rémunération qui amène à d'autres vêtures. Les vêtures des enfants assistés étaient uniformisées à celles des autres enfants. L'administration hospitalière donnait une somme aux nourriciers, les personnes qui s'occupaient des enfants assistés pour qu'ils fassent confectionner ou confectionnent des vêtements. Selon Bérard, l'administration et les enfants trouvaient ce changement bien. Le lien était meilleur entre les nourriciers et les enfants. Ainsi, des enfants assistés placés dans des familles avaient les mêmes vêtements que ceux des enfants non assistés. Émile Bérard s'en réjouit lui-même avec cette phrase : <a href="http://www.collections.musee-bretagne.fr/zoom.php?q=id:jo506404&nostat=T&marginMin=0&marginMax=0&curPage=26" target="_blank"><em>«&nbspil était pénible pour un jeune enfant de se trouver seul affublé d'une livrée ridicule au milieu d'enfants de son âge&nbsp»</em></a>. </p>
<br>

<div class="classe">
<!-- svelte-ignore a11y_img_redundant_alt -->
<img src={mega_044} alt="Photo de classe."/>
<figure>
<figcaption>Photographie d'un groupe, d'orphelins certainement, entouré de deux sœurs et d'une femme dans le jardin du manoir de Kerbenez à Plomelin issue du livre <em><a href="http://www.collections.musee-bretagne.fr/ark:/83011/FLMjo149637" target="_blank">Souvenirs de Bretagne</a></em> vers 1860 (Flora, collections du Musée de Bretagne).</figcaption>
</figure>
</div>
<br>

<p>Plomelin étant au sud ouest de Quimper, la photographie est au cœur du canton choisi pour les enfants assistés. Rare photographie que nous avons pu trouver sur les orphelins du Finistère, celle-ci montre des garçons en costume démontrant l'uniformisation de celui-ci. Cependant, aucune preuve ne permet de dire que ce costume était porté par tous les enfants du Finistère.</p>
<br>
<p> Les enfants assistés, selon l'auteur, <a href="http://www.collections.musee-bretagne.fr/zoom.php?q=id:jo506404&nostat=T&marginMin=0&marginMax=0&curPage=1813" target="_blank"><em>«&nbsprencontrent plus de facilités à s'établir dans le pays où ils ont été élevés&nbsp»</em></a>. </p>
<br>
<a href="{base}/apropos" class="source">→ Pour aller plus loin, voir nos sources ici ←</a>
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

    .famille, .classe {
        width : 90%;
        margin : 1rem auto;
    }
    .famille img, .classe img {
        width : 100%;
        height : auto;
        display : block;
    }

        figure {
        text-align : justify;
        margin-top: 4%;
        margin-left: 2%;
        margin-right: 3%;
    }

</style>