
<script>
    import Audio from "../Audio.svelte";

    let dysMode = false;
    
</script>

<Audio
    chemin={"/images/Nightclub.mp3"}
/>

<!-- Bouton mode dyslexique -->

<button class="dysbouton" on:click={() => dysMode = !dysMode}>
    {dysMode ? 'Mode normal' : 'Mode dyslexie'}
</button>

<div class:dys={dysMode}>

<h1>Allaitement naturel ou allaitement artificiel, quelles étaient les pratiques dans le Finistère ?</h1>

<br>
<p>Le XIX<sup>ème</sup> est une époque de grands changements. L'industrialisation est en pleine croissance, l'innovation progresse et même le domaine médical connaît une évolution significative. Cela amène la population à changer ses coutumes et ses habitudes. </p>
<br>
<p>Au début de ce siècle et même lors des siècles précédents, l'allaitement au sein, dans le Finistère, était la norme. Marginal, l'allaitement artificiel n'était employé que lorsque la santé de la mère ne permettait pas l'allaitement naturel : corps faible, maladie, incapacité à produire assez de lait, inflammation des seins, telles pouvaient être les raisons. Du lait animal, vache ou chèvre, pouvait alors être donné au nourrisson. Dans certains cantons de l’est du Finistère, comme à Châteauneuf-du-Faou, les enfants étaient dans certains cas allaités directement au pis de l'animal. À Daoulas ou à Lesneven, une voisine proposait sans contrepartie de nourrir le nourrisson par pur acte de charité, quand la mère était dans l'incapacité de le faire. </p>

<br>
<div class ="allaitement">
<img src="/images/mega_073.jpg" alt ="Vue sur une nourrice donnant le sein">
<figure><figcaption>Une nourrice de Pont-Aven donne le sein à un enfant. Un enfant plus âgé est à ses côtés. </figcaption></figure>
</div>

<br>
<p>Lors de l'allaitement artificiel, les mères peuvent utiliser des biberons ou des équivalents variés et plus simples : dans le nord, on utilisait une bouteille bouchée d'une éponge que l'enfant aspirait par succion ; dans le sud et le centre, c’était un petit cruchon de terre d'environ deux décilitres garni d'un morceau de vieille toile ; dans l'extrême ouest, une burette était employée, contenant du lait de vache étendu d'eau et tiédi. Du côté de Quimper, on employait une petite soucoupe à bec creusée, nommée «&nbspcrâle&nbsp». À Carhaix, deux types de biberons coexistaient : un simple vase en forme de poire à goulot, et un second plus grand muni d'une éponge latérale appelée «&nbsptétin&nbsp» — «&nbspPen-Bronn&nbsp» en breton, soit littéralement «&nbsptête de mamelle&nbsp».</p>
<br>
<p>Pour calmer les pleurs d'un nourrisson, on pouvait lui donner un suçon composé de mie de pain avec du sucre, du beurre ou du miel renfermé dans un morceau de toile. Cela calmait sa faim et ses cris. Cette méthode fut observée sur l'île de Sein, à Ouessant ou à Landerneau. Sur l'île Molène, cette pratique était tellement répandue qu'une croyance aurait attribué la grande bouche de ses habitants au fait d'avoir longtemps usé du suçon. </p>
<br>

<br>
<div class ="biberonrobert">
<img src="/images/biberon_robert.jpg" alt ="affiche publicitaire">
<figure><figcaption>Affiche publicitaire pour le biberon Robert. </figcaption></figure>
</div>

<br>
<p>Les biberons se perfectionnent au cours du XIX<sup>ème</sup> siècle et même si l'allaitement au sein reste la pratique la plus utilisée, dans les villes l'intérêt pour cet instrument y est grandissant. Progressivement, ils remplacent les petits pots ou les cruchons.  Le biberon «&nbspperfectionné&nbsp» du système Robert ou Monod devient le référent en la matière. L'intérêt pour le biberon est contrasté selon les localités. À Ouessant, l'allaitement artificiel se fait dans plus de 60 % des cas, en raison de la charge de travail des femmes. Les hommes partant en mer pêcher une grande partie de l'année, les travaux aux champs, les tâches domestiques et l'éducation des enfants incombaient alors à la mère. À l'opposé, dans d'autres communes comme Lesvenan, Rosporden ou encore Plouigneau, cela était plutôt mal vu. À Morlaix, «&nbsples femmes âgées reprochent à leurs filles de ne pouvoir allaiter leurs enfants comme elles le faisaient elles-mêmes autrefois&nbsp».</p>
<br>
<p>«&nbspAujourd'hui&nbsp» comme «&nbspautrefois&nbsp», l'allaitement au sein reste le meilleur moyen de nourrir un enfant. Les progrès médicaux ont pu découvrir que le nourrissage au sein était plus hygiénique et plus nourrissant pour l'enfant qui n'était sevré que vers un ou deux ans. L'allaitement artificiel, quant à lui, est vite remplacé  par de la nourriture solide pour l'enfant. Le biberon était peu hygiénique et rempli de bactéries, ce que le nourrisson ressentait : il se tournait alors rapidement vers les bouillis de froment ou d'avoine coupées à du lait ou de l'eau.</p>

</div>

<style>

/* Code à copier coller sur toutes les pages */
   
   @font-face {
    font-family : OpenDyslexic;
    src: url('/Fonts/open_dyslexic/OpenDyslexic-Bold.otf');
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

.dys p, .dys h1, .dys figcaption {
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