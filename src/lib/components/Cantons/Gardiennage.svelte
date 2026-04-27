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

<h1> Le gardiennage des enfants au XIXe siècle </h1>
<p> Le «&nbspgardiennage&nbsp» des enfants au XIXe siècle réfère à la manière dont les enfants étaient gardés
par leurs parents, leurs nourrices ou, plus rarement, d'autres personnes tels que leurs frères et sœurs. Dans son
ouvrage, Emile Bérard apporte un éclairage sur l'évolution des habitudes de gardiennage en organisant son
propos en deux parties «&nbspautrefois&nbsp» et «&nbspauiourd'hui&nbsp», comme pour l'ensemble des
thèmes qu'il aborde. Qu'en était-il, donc, du gardiennage dans le canton de Quimper, Briec et Concarneau ? </p>
<br>
<h2> Autrefois </h2>
<br>
<p> Pour les enfants en bas âge, du mobilier était mis en place ; des berceaux était placés «&nbspà une hauteur
de 0.75m environ du sol&nbsp», près du lit parental, permettant ainsi de protéger l'enfant des animaux. De
même, «&nbsp[l]a porte de la maison [ ... ] était divisée en deux battants&nbsp». Le battant inférieur avait pour
objectif d'empêcher les animaux de rentrer dans la maison, tandis que la partie supérieure pouvait s'ouvrir pour
laisser entrer la lumière sans mettre en danger les enfants.
Pour Briec, l'auteur donne l'exemple d'une «&nbspsorte de banc rectangulaire, percé au milieu&nbsp» (appelé
alloir ou chomette), lequel servait à l'apprentissage des premiers pas. «&nbsple bébé était placé dans une sorte
de lunette glissant dans une rainure pratiquee d'un bout a l'autre du banc, dans le sens de la longueur&nbsp». Il
existait aussi des chaises percées, lesquelles avaient le même but grâce à des roulettes à chaque pied.
</p>
<br>

<div class="gardiennage_conteneur">
<div class="chomette">
<img src="images/mega_046.jpg" alt="Chomette, aide à la marche aussi appelé trotteur."/>
<figcaption>Chomette, mot de la langue gallo pour un trotteur.</figcaption>
</div>
<div class="premierpas">
<img src="images/mega_075.png" alt="Les premiers pas : des enfants en rang avec plusieurs aides à la marche pour les enfants."/>
<figcaption>Photographie de l'ouvrage d'un groupe d'enfants avec leurs nourrices et des aides à la marche.</figcaption>
<br>
</div>
</div>

<p>Les enfants étaient invités à se défouler et vivre dehors, «&nbspau grand air&nbsp», «&nbsppour préparer
une race forte&nbsp». Une importance particulière était portee a cet exercice. Lorsqu'une maladie se déclarait,
des femmes, des «&nbspmatrones&nbsp», venaient et préparaient des breuvages et onguents ; l'effet de ces
préparations relevait probablement de la superstition, car la «&nbspforce de la constitution triomphait du mal
plus souvent&nbsp». Finalement, concernant la nourriture de la famille, l'auteur fait mention pour Quimper de
bouillie, crêpes de blé noir, lait caillé, soupe, lard, pain de seigle et cidre. </p>
<br>

<div class="gardiennage_conteneur">
<div class="porte">
<img src="/images/mega_077.png" alt ="Porte à battants très commune dans le Finistère."/>
<figcaption>Photographie de l'ouvrage qui montre une femme avec un nourrisson derrière la porte battant et deux hommes devant ainsi qu'un cochon.</figcaption>
</div>
<div class="hameau">
<img src="/images/mega_049.jpg" alt ="Hameau breton."/>
<figcaption>Hameau breton. La maison la plus à gauche comporte une demi-porte.</figcaption>
</div>
</div>

<br>
<h2> Aujourd'hui </h2>
<br>
<p>A Concarneau, des garderies furent mises en place pour palier le manque de protection et d'élevage de la
part de la mère, ce qui était récurrent, notamment lorsque les saisons des grandes pêches arrivaient.
Parallèlement, les enfants des champs étaient gardés par leurs aînés ou leurs grands-mères voire, lorsqu'aucune
de ces solutions n'était possible, par une voisine .</p>
<p>Du côté du mobilier, peu d'informations sont données par l'auteur concernant les meubles utilisés. Il indique
tout de même pour Briec la diminution d'utilisation des appareils susmentionnés, au profit de l'intervention
directe de la mère pour aider l'enfant dans ses premiers pas, grâce à du linge en tout genre.
Malgré le développement des soins médicaux, à Quimper la mortalité augmentait, ce qui était a priori dû
notamment à «&nbspl'abus, par les parents, des boissons alcooliques&nbsp». Sur ce point, Émile Bérard insiste
en mentionnant les marins ivres dans les ports, qui ne montraient pas un «&nbspbon&nbsp» comportement aux
enfants .</p>
<p>L'auteur effectue ici un parallèle surprenant avec les enfants américains, lesquels jouaient dans des jardins
d'enfants, ces derniers rappelant le champ protégé par des clôtures. Malgré la force reconnue du grand air, il y
avait des problèmes de maladies dues à l'environnement proche des champs : </p>
<p>«&nbspMalheureusement les fermes continuent à demeurer entourées de dépôts de fumier qui provoquent des
fièvres et engendrent des épidémies.&nbsp»</p>


</div>

    <style>

/* Code à copier coller sur toutes les pages */


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

.hr {
    display : none;
}

/* Code à modifier selon les images */

    .gardiennage_conteneur {
        display : flex;
        justify-content : center;
        align-items : flex-start;
        gap : 2rem;
        margin : 1rem 5%;
    }

    .chomette, .premierpas, .porte, .hameau {
        width : 90%;
        margin : 1rem auto;
        vertical-align : top;
        text-align : center;
    }
    .chomette img, .premierpas img, .hameau img, .porte img {
        width : 100%;
        height : auto;
        display : block;
    }

    figcaption {
        text-align : center;
        width : 100%;
    }
</style>