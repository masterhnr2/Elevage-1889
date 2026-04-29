
<script>
    import Audio from "../Audio.svelte";

    let dysMode = false;
    
</script>

<Audio
    chemin={"/images/AURORA - Heathens (Lyric Video).mp3"}
/>

<!-- Bouton mode dyslexique -->

<button class="dysbouton" on:click={() => dysMode = !dysMode}>
    {dysMode ? 'Mode normal' : 'Mode dyslexie'}
</button>

<div class:dys={dysMode}>

<h1> Les vêtures des enfants à Lesneven, Plabennec et Ouessant : l'avènement du costume breton par ville </h1>
<p> Cantons au Nord de Brest, les villes de Lesneven et Plabennec ainsi que l'île de Ouessant n'ont pas les mêmes traditions en terme de vêtures avant 1860. Par «&nbspvêtures&nbsp» , on entend les vêtements des enfants après environ 6 ans. En général, les vêtements sont des versions miniatures de ceux des adultes. Avant cet âge, ils sont les mêmes peu importe le sexe de l'enfant. </p> 
<br>
<h2> Avant l'enquête de Bérard, déjà une distinction entre ville et campagne </h2>
<br>
<p> Les hommes et les garçons habitant de la ville de Lesneven avaient un uniforme composé d'«&nbspun pantalon gris, une veste bleue&nbsp». Pour ceux qui habitaient en campagne, il s'agissait d'«&nbspun pantalon de drap large serré aux jarrets&nbsp» et d'«&nbspune veste très courte&nbsp». Les dimanches et les jours de fête, tous portaient des chapeaux en feutre, des galoches (des chaussures avec des semelles en bois) ou des souliers. Les jours de travail, ils étaient chaussés de sabots clos. </p>
<br>
<p> La ville de Plabennec diffère de Lesneven. Les petits garçons portaient le costume en usage dans tout le Léon : un gilet et un paletot noirs. Ils avaient aussi un chapeau de feutre à larges bords presque semblable à celui des ecclésiastiques. Les petites filles étaient vêtues de «&nbspjupes de drap noir sur un jupon de molleton bleu, un petit châle de couleur et des bonnets de linge en forme de serre-tête&nbsp». Rares étaient les variations sur les vêtures. </p> 
<br>

<div class="femmes">
<img src="/images/mega_006.jpg" alt="Photographie de deux femmes et un garçon portant une casquette de marin.">
<figure>
<figcaption>Photographie de deux femmes et un jeune garçon en costumes traditionnels prises par Marc Grazillier au début du XX<sup>ème</sup> siècle sur l'île d'Ouessant</figcaption>
</figure>
</div>
<br>

<h2> Au cœur de l'enquête : un costume changeant dans le temps et l'espace</h2>
<br>
<p> Lors de l'enquête, le costume n'a pas changé dans les trois villes. Il faut cependant dans l'ouvrage se référer à Brest pour certains détails. Les bretelles, spécificité de Ouessant, étaient conservées. Bérard note également qu'à Ouessant «&nbsples garçons portent la culotte maintenant dès l'âge de 4 ans&nbsp». Les jours de la semaine, la vêture des filles ne changeait pas énormément, une coiffe de couleur, «&nbspun châle de laine ou de coton, un tablier, une jupe et un corsage de laine&nbsp». Les jours de fêtes et le dimanche, la couleur de la coiffe devenait blanche et elle était accompagnée d'un serre-tête noir. </p>
<br>

<div class = "layette_conteneur">
<div class="gilet">
<img src="/images/mega_025.png" alt="Gilet d'enfant de Carhaix exposé au musée breton de Quimper">
<figure>
<figcaption>Gilet d'enfant de Carhaix</figcaption>
</figure>
</div>
<div class ="sabots">
<img src="/images/mega_065.jpg" alt="Sabots d'enfant de 1907.">
<figure>
<figcaption>Sabots d'enfants de 1907 exposés au Musée de Bretagne.</figcaption>
</figure>
</div>
</div>

<br>

<p>  Le gilet comme les sabots en photographie sont des habits de costume traditionnel mais ils permettent de visualiser à quoi correspondaient les vêtements d'époque. Ils sont donc plutôt portés le dimanche et les jours de fêtes. Le gilet est en drap de laine noir doublé d'une toile de lin. Il possède une double rangée de boutons dorés en métal. Les boutonnières sont en fils de coton vert, de même pour les deux poches. L'arrière du gilet est quant à lui marron. Les sabots sont aussi de couleur noire avec la partie avant pointue et recourbée. Les semelles et talons ont été renforcés avec des clous. Ces clous maintenaient un fil sur le dessus du pied.  </p> 

</div>

<style>

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

.dys p, .dys h1, .dys h2, .dys figcaption {
    font-family: 'OpenDyslexic', verdana, sans-serif;
    font-size: 20px;
    line-height: 2;
    letter-spacing: 1.5px;
    word-spacing: 1.5px;
}

    .layette_conteneur {
        display : flex;
        flex-direction : row;
        gap : 1rem;
        align-items : stretch;
        width : 90%;
        margin : 0 auto;
    }

    .gilet, .sabots {
        flex : 1;
        margin : 0;
    }

    .gilet img, .sabots img {
        width : 100%;
        height : 350px;
        display : block;
    }

    .femmes {
        width : 90%;
        margin : 1rem auto;
    }
    .femmes img {
        width : 100%;
        height : auto;
        display : block;
    }

        figure {
        text-align : center;
    }

</style>