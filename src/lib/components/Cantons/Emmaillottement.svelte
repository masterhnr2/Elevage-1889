
<script>
    import Audio from "../Audio.svelte";

    let dysMode = false;
    
</script>

<Audio
    chemin={"/images/Lemonade.mp3"}
/>

<!-- Bouton mode dyslexique -->

<button class="dysbouton" on:click={() => dysMode = !dysMode}>
    {dysMode ? 'Mode normal' : 'Mode dyslexie'}
</button>

<div class:dys={dysMode}>


<h1>Emmaillottement et layettes des jeunes enfants</h1>
<p>L'enquête d'Émile Bérard met en lumière l'évolution des pratiques liées aux vêtements des très jeunes enfants. Les chapitres consacrés aux cantons de Châteaulin, Carhaix et Châteauneuf-du-Faou sont particulièrement éclairants sur ces changements qui affectent quasiment tout le département du Finistère.</p>
<br>
<h2>Les origines de l'emmaillottement</h2>
<p><strong>L'emmaillotement consistait à envelopper un bébé dans plusieurs couches de linges d'une façon qui ne lui laissait pas de liberté de mouvement.</strong> Après avoir vêtu le bébé d'une chemise fendue et d'un gilet de laine, on l'entourait d'un maillot en laine, drap ou flanelle, qui lui prenait tout le corps depuis le cou jusqu'aux jambes. Enfin, le maillot était lui-même recouvert d'une lisière de drap pour le maintenir en place, et l'enfant était coiffé d'un ou plusieurs bonnets.</p><br>
<p><strong>L'emmaillotement avait pour but de maintenir l'enfant au chaud</strong>, dans une maison alors souvent humide et mal chauffée. Incapable de bouger, rigidifié par plusieurs couches de vêtements, l'enfant ne risquait pas de se découvrir. Il avait également l'avantage d'être facilement transportable, dans les bras ou sur le dos.</p><br>
<p>L'emmaillotement avait une autre fonction, plus symbolique. <strong>Les parents voulaient s'assurer que le corps du nouveau-né soit «&nbspbien fait&nbsp»</strong>, c'est-à-dire avec des membres bien droits. Cette pratique, comme de nombreuses autres (compression du crâne pour le rendre plus rond, par exemple), s'inscrivait dans une logique de modelage du corps des très jeunes enfants.</p>

<div class = "emmaillottement_conteneur">
    <div class="paysanne">
        <img src="/images/mega_064.jpg" alt="Photographie d'une paysanne et d'une fillette tenant deux bébés emmaillotés.">
        <figure>
            <figcaption><em>Portait de femme et d'enfant</em>, photographie de Charles et Paul Géniaux, Ploërmel, entre 1900 et 1905 (collections du Musée de Bretagne). Une paysanne et une fillette tiennent chacune dans leurs bras un bébé emmailloté. Les bras des bébés ne sont pas plaqués contre le corps dans le maillot, mais sont enfilés dans des manches nouées sur le devant.</figcaption>
        </figure>
    </div>
    <div class ="bebe">
        <img src="/images/mega_063.jpg" alt="Croquis d'un bébé emmailloté.">
        <figure>
            <figcaption><em>Bébé emmailloté</em>, croquis de Houël Marguerite, première moitié du XXème siècle (collections du Musée de Bretagne). Puisqu'il ne pouvait pas se débattre, le bébé emmailloté était parfois suspendu à un clou lorsque sa mère devait s'absenter.</figcaption>
        </figure>
    </div>
</div>
<br>

<h2>L'évolution de l'emmaillottement</h2>
<p><strong>Les enquêteurs déplorent la persistance de cette pratique dans le Finistère.</strong> Outre le fait que «&nbsppendant une durée de 7 à 8 mois l'enfant ne pouvait donner aucun exercice à ses membres qui étaient trop étroitement comprimés&nbsp», l'emmaillotement était surtout peu hygiénique. Comme l'enfant n'était changé que 3 à 5 fois par jour, il restait longtemps dans ses excréments, ce qui pouvait entraîner des irritations et des infections.</p><br>
<p><strong>Néanmoins, l'enquête rapporte plusieurs changements jugés bénéfiques.</strong></p><br>
<p>D'abord, l'emmaillotement est moins contraignant. Comme il est précisé pour le canton de Châteauneuf-du-Faou (et pour quasiment tout le département) : «&nbspLes bras sont maintenant laissés libres et les jambes sont moins étroitement serrées.&nbsp»</p><br>
<p>Ensuite, la période d'emmaillotement s'est raccourcie. Là où autrefois l'enfant restait dans son maillot pendant 7 à 10 mois, il le quitte désormais vers ses 4 ou 6 mois.</p>

<br>

<h2>Après le maillot, la robe</h2>
<p>L'enquête nous précise la layette (ou vêture) des jeunes enfants de cet âge : «&nbspQuand l'enfant quittait son maillot, il prenait une robe de molleton noir à nombreux plis superposés les uns sur les autres et que l'on décousait pour allonger la robe à mesure que l'enfant grandissait. La robe servait ainsi 5 à 6 ans. On lui mettait aussi 3 ou 4 bonnets les uns sur les autres. Il portait des sabots de bois et des bas de laine brune.&nbsp»</p><br>
<p><strong>Mis à part de subtils détails</strong> (par exemple un gland argenté sur le bonnet des garçons contre une cocarde colorée sur celui des filles)<strong>, les vêtements des enfants des deux sexes sont identiques.</strong> La robe n'a pas pour fonction de distinguer les garçons des filles, mais les enfants des adultes. Le petit garçon comme la petite fille sont vêtus de ce vêtement féminin car ils appartiennent encore au monde des femmes, celui du foyer et de la maternité. Cette pratique va perdurer jusqu'à la Première Guerre mondiale.</p>

<div class="ecole">
<img src="/images/mega_0281.jpg" alt="Photographie d'enfants d'une école maternelle.">
<figure>
<figcaption><em>Enfants d'une école maternelle</em>, plaque photographique de Jacques de Thezac, Finistère, début du XXème siècle (collections du Musée départemental breton) <em>[image originale retouchée pour être éclaircie]</em>. Au premier rang, les enfants les plus jeunes portent tous une robe, contrairement aux plus âgés assis derrière eux.</figcaption>
</figure>
<br/>
</div>

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

    .emmaillottement_conteneur {
        display : flex;
        flex-direction : row;
        gap : 2rem;
        align-items : stretch;
        width : 86%;
        margin: 4% 8% 4% 8%;
    }

    .paysanne {

        width: 60%;
        height : 60%;

    }

    .bebe {

        width: 43%;
        height : 43%;

    }

    .paysanne img
    {

        width: 100%;
        height : 100%;

    }
    
    
    .bebe img {


        width: 100%;
        height : 100%;

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

        figure {
        margin-top: 5%;
        margin-left: 2%;
        margin-right: 4%;
        margin-bottom: 2%;
        text-align : justify;
    }

</style>