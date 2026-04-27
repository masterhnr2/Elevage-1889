<script>

let dysMode = false;

let audio;
let playing = false;

function toggleAudio() {
    if (playing) {
        audio.pause();
        audio.currentTime = 0;
    } else {
        audio.play();
    }
    playing = !playing;
}
</script>

<div class="conteneuraudio">
<audio bind:this={audio} src="/images/Nightclub.mp3"></audio>
<span class="audiobouton" on:click={toggleAudio}>
    {playing ? '⏹️' : '🔊'}
    </span>
</div>

<button class="dysbouton" on:click={() => dysMode = !dysMode}>
    {dysMode ? 'Mode normal' : 'Mode dyslexie'}
</button>

<div class:dys={dysMode}>

<h1> L’instruction des enfants au XIX<sup>ème</sup> siècle </h1>
<p>L’instruction des enfants au XIX<sup>ème</sup> siècle était assez inégale selon les cantons du Finistère. Dans son ouvrage, Emile Bérard apporte un éclairage sur l’évolution des modes et moyens d’instruction en organisant son propos en deux parties «&nbspautrefois&nbsp» et «&nbspaujourd’hui&nbsp», comme pour l’ensemble des thèmes qu’il aborde. Des différences sont assez notables entre les villes et les campagnes. Cette instruction est particulièrement décrite par l’auteur pour Brest, Daoulas et Landerneau. </p> 
 <br>

 <h2> Autrefois </h2>
<br>
<p>A Brest, une première école publique fut ouverte le 14 mars 1746, suivie par d’autres, qui furent malheureusement progressivement fermées à partir de 1791. Furent nommés vers 1800 cinq instituteurs puis, après de nombreux efforts, le conseil municipal obtint en 1822 la «&nbspréinstallation des frères de la doctrine chrétienne&nbsp», une congrégation qui se consacre à l’éducation de la jeunesse, des classes populaires notamment. 

<p>Pour Landerneau comme pour Brest, les enfants n’allaient pas en classe ou très rarement avant 10 ou 11 ans. L’école avait pour objectif de leur apprendre la lecture du breton et les rudiments du catéchisme ; à Daoulas, le latin, l’histoire religieuse et des bases de calcul s’ajoutaient à ces deux disciplines.</p>
 <br>
<h2> Aujourd’hui </h2>
<br>
<p>L’auteur effectue assez étonnement un saut dans le temps important et indique sans transition avec le manque d’école mentionné précédemment que désormais l'instruction était très répandue dans de nombreux établissements. La loi Ferry étant désormais établie, l'école était obligatoire entre 6 et 13 ans pour les enfants des deux sexes. Comme Émile Bérard le souligne, les écoles étaient de plusieurs catégories : «&nbsplycées de filles et de garçons, écoles supérieures, écoles primaires, écoles maternelles, salle d'asile
rivalisent de succès. Il n'y a guère d'enfants ne fréquentant pas les établissements scolaires.&nbsp»</p>
<p>Les salles d'asile correspondaient à des établissements destinés aux enfants entre deux et six ans. Elles furent
ensuite remplacées par les écoles maternelles.</p>
<p>À Brest, les enfants étaient envoyés à l'école vers 8 ou 9 ans au plus tôt dans les campagnes et plus jeunes
dans les villes. De même à Landerneau, il y avait une grande fréquentation des écoles maternelles, où étaient
enseignées «&nbsptoutes les facultés intellectuelles simultanément&nbsp». </p>
<p>Daoulas semble pour sa part représenter le lieu doté du plus grand nombre d'établissements avec 26 écoles
pour les deux sexes. Les ecoles devenaient ainsi plus nombreuses et l'instruction se développait
progressivement.</p>
<br>

<div class="ecole">
<img src="/images/mega_029.png" alt="Photographie des élèves d'une école."/>
<figcaption>Les élèves d'une école féminine posent devant leur établissement.</figcaption>
</div>

</div>

<style>

   @font-face {
    font-family : OpenDyslexic;
    src: url('/Fonts/open_dyslexic/OpenDyslexic-Bold.otf');
   }

    p {
        margin-left: 5%;
        margin-right: 5%;
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

        .conteneuraudio {
        display : flex;
        margin-top : 2%;
        margin-left : 85%;
    }
    .audiobouton {
        cursor : pointer;
        font-size : 5rem;
        user-select : none;
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
        width : 100%;
        height : auto;
        display : block;
    }

        figcaption {
        text-align : center;
    }

</style>