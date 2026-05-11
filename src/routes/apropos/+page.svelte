<script>

    import IconeLivre from '$lib/components/Icone_livre.svelte';
    import {base} from '$app/paths';
    import arrowup from '$lib/assets/arrowup.png'
    import Bibliographie from '$lib/assets/Bibliographie.pdf'
    import Navbar from '$lib/components/Navbar.svelte';
    import Montage_apropos from '$lib/assets/Montage/Montage_A_propos.mp3';

    let dysMode = false;

</script>

<Navbar/>

<div class="bod">

<button class="dysbouton" on:click={() => dysMode = !dysMode}>
{dysMode ? 'Mode dyslexie' : 'Mode normal'}
</button>

<div class:dys={dysMode}>

    <!-- Bouton pour remonter en haut de la page-->
<a href="#" class="btn">
    <img src={arrowup} alt="" class="icone">
</a>

<p class="audio_texte"><small>Écoutez la version audio !</small></p>
<audio controls src={Montage_apropos}>/</audio>
<br>
<h1>Pour les plus curieux et curieuses</h1>
<button class="biblio" type="button"><a href={Bibliographie} target="_blank"> Accédez à la bibliographie utilisée pour le projet</a></button><br>

<h1>Remerciements</h1>
<h2>Université Rennes 2</h2>
<p>Tout d'abord, merci à <strong>Karine Karila-Cohen</strong>, <strong>Fabienne Moreau</strong> et <strong>Chloé Guennou</strong>, nos enseignantes et encadrantes pour ce projet.</p>
<p>Merci également à <strong>Pierre Karila-Cohen</strong> et <strong>Patricia Legris</strong> pour leurs conférences respectives sur l'enquête et la puériculture au XIX<sup>e</sup>&nbspsiècle ainsi que pour leurs réponses à nos nombreuses questions.</p>
<p>Un grand merci à <strong>Jacob Hart</strong> pour son aide précieuse sur la conception du site et de la carte interactive.</p>
<p>Merci également à Thierry Dréau pour son accueil et son aide pour les enregistrements audio.</p>
<p>Enfin, merci à <strong>Claire Vallée</strong> pour ses conseils concernant la communication du projet.</p><br>

<h2>Musée de Bretagne</h2>
<p>Merci à <strong>Laurence Prod'homme</strong> de nous avoir fait découvrir l'ouvrage d'Émile Bérard et pour son travail de documentation en amont de notre projet.</p>
<p>Merci également aux agents des services numériques du Musée de Bretagne et des Champs Libres, en particulier <strong>Manuel Moreau</strong>, <strong>Fabienne Martin-Adam</strong> et <strong>Guillaume Rouhan</strong> pour leurs conseils.</p><br>

<h2>Archives</h2>
<p>Merci aux <strong>Archives départementales de l'Orne</strong> pour leur accueil ; aux <strong>Archives départementales du Finistère</strong> pour les éclaircissements sur le passé d'Émile Bérard ; et à <strong>l'Association des archivistes français</strong> pour leur aide.</p><br>

<h2>Journalistes</h2>
<p>Merci à <strong>Marilyne Gautronneau</strong> et <strong>Arnaud Loubry</strong> de <em>ICI Rennes métropoles</em> d'avoir apporté une visibilité supplémentaire à ce projet grâce à leur article paru dans le numéro d'avril 2026.</p>
<p>Merci également au soutien de <strong><em>L'Agrafe</em></strong>, journal indépendant de l'université, pour nous avoir permis de publier un article dans le numéro de mai 2026.</p>

<h2>Remerciements spéciaux</h2>
<p>À <strong>Stéphanie</strong> pour avoir trouvé le nom de la promotion.</p>
<p>À <strong>Clara</strong> pour avoir trouvé des solutions aux problèmes de coding du site.</p>
<p>À l'ensemble de <strong>nos proches</strong> mis à contribution.</p>
<p>Enfin, merci à <strong>tous·tes les curieux·ses</strong> qui s'intéressent à notre projet.</p>
<br/>
<br/>
<br/>
</div>
</div>

<IconeLivre/>


<style>

    .bod {
        padding-top: 5%;
        margin-left: 8%;
        margin-right : 8%;
        background-color: white;

    }

    h1{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: xx-large;
        text-transform: uppercase;
        justify-self: center;
        text-justify: inter-cluster;
        text-align: center;
        margin-left: 20%;
        margin-right: 20%;
        color: #ae9784;

    }
    h2{
        font-family : Verdana, Geneva, Tahoma, sans-serif;
        font-size : x-large;
        font-weight : bold;
        text-transform : uppercase;
        justify-self : center;
        text-justify: inter-cluster;
        text-align : center;
        margin : 5% 2% auto 2%;
        color : #696969;
    }
    p{
        font-family : Verdana, Geneva, Tahoma, sans-serif;
        text-justify : inter-cluster;
        text-align : justify;
        margin-top : 5%;       
        margin-left: 5%;
        margin-right : 5%;
    }
    .biblio{
        display : block;
        width : fit-content;
        text-align : center;
        padding : 10px 15px;
        cursor : pointer;
        font-size : 22px;
        border-radius : 5px;
        background-color : #ae9784;
    }
    .biblio a{
        color : white;
    }

    audio{
    display : block;
    margin-left : auto;
    margin-right : 3%;
    }

    .audio_texte {
    text-align : right;
    margin-right : 3%;
    margin-left : auto;
    font-style : italic;
    color : #99816a;
}

       @font-face {
    font-family : OpenDyslexic;
    src: url('/Fonts/open_dyslexic/OpenDyslexic-Bold.otf');
   }

    .dysbouton {
    display : flex;
    align-items : center;
    justify-content : center;
    cursor: pointer;
    padding: 0 2rem;
    margin: 0 auto;
    border-radius: 5px;
    border: none;
    background-color: #3b2224;
    color: white;
    font-size: 20px;
    max-width : 1200px;
    
}

    .dys h1 {
    font-family: 'OpenDyslexic', verdana, sans-serif;
    font-size: 30px;
    line-height: 2;
    letter-spacing: 1.5px;
    word-spacing: 1.5px;
}

    .dys p {
            font-family: 'OpenDyslexic', verdana, sans-serif;
    font-size: 20px;
    line-height: 2;
    letter-spacing: 1.5px;
    word-spacing: 1.5px;
        text-align : left;
}

    .btn {
        height : 100px;
        width : 100px;
        border-radius : 50%;
        display : flex;
        justify-content : center;
        align-items : center;
        position: fixed;
        right : 20px;
        bottom : 20px;
        cursor : pointer;
    }

    .icone {
        width : 80px;
        height : 80px;
    }

    @media screen and (min-width: 480px) {

    p{
        font-family : Verdana, Geneva, Tahoma, sans-serif;
        text-justify : inter-cluster;
        text-align : justify;
        margin-top : 2%;
        margin-left: 9%;
        margin-right : 9%;
    }



    h2 {
        margin : 2% auto auto auto;
    }

    .biblio{
        margin : 0 auto;
    }

    .bod {
        margin-left: 12%;
        margin-right : 12%;
        margin-top: 5%;
    }

}

</style>