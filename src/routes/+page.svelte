
<script>

    import IconeLivre from '$lib/components/Icone_livre.svelte';
    import {base} from '$app/paths';
    import logobretagne from '$lib/assets/logobretagne.png';
    import logo_hn from '$lib/assets/logo_hn.png';
    import Carte_accueuil from '$lib/assets/Carte_accueuil.jpg';
    import arrowup from '$lib/assets/arrowup.png'
    import Navbar from '$lib/components/Navbar.svelte';
    import tuto from '$lib/assets/tuto.gif';
    import Montage_accueil from '$lib/assets/Montage/Montage_accueil.mp3'

    let dysMode = false;


</script>

<Navbar/>

 <!-- style:background-image={`url(${fond})`} -->
<div class="bod">

<button class="dysbouton" on:click={() => dysMode = !dysMode}>
    {dysMode ? 'Mode dyslexie' : 'Mode normal'}
</button>

<div class:dys={dysMode}>

    <!-- Bouton pour remonter en haut de la page-->
<a href="#" class="btn">
    <img src={arrowup} alt="" class="icone">
</a>
<p class="info"><small>Pour une question de visibilité, nous vous recommandons de consulter la carte interactive sur un écran d'ordinateur ou de tablette.<br> Besoin d'aide pour prendre en main la carte interactive ? <a href="#accestuto">Regardez notre tutoriel en cliquant juste ici !</a></small></p>
<h1><strong>Exposition universelle de 1889 Elevage des enfants du premier âge - Finistère</strong></h1>

<div class ="conteneur">
    <div class="musee">
    <a href="https://www.leschampslibres.fr/les-champs-libres/musee-de-bretagne" target="_blank">
    <img src={logobretagne} alt="Image de la carte" class="museeimage">
</a>
    </div>
    <div class="carte">
    <a href = "{base}/folium">
    <img src={Carte_accueuil} alt="Image de la carte" class="carteimage">
    </a>
    </div>
    <div class="hn">
    <a href="https://lnk.bio/masterhnr2" target="_blank">
    <img src={logo_hn} alt="Image des RS" class="hnimage">
    </a>
    </div>
</div>

<p class="audio_texte"><small>Écoutez la version audio !</small></p>
<audio controls src={Montage_accueil}>/</audio>
<br>
<h1>L’ouvrage <em>Élevage des enfants du premier âge</em></h1>
<p><strong>En 1888, le Ministère de l’Intérieur commande une grande enquête sur l’élevage des enfants en France</strong> (aujourd’hui le terme ‘éducation’ serait préféré). Des questionnaires sont donc relayés aux agents des préfectures&nbsp, et dans le cas du Finistère, le chef de division Émile Bérard semble s'être passionné pour le sujet.</p><br>
<p>Au terme de son travail, il fait donc produire <strong>un très bel ouvrage relié, composé de 47 cahiers de 11 à 13 feuillets chacun, soit plus de 900 pages</strong>. Celles-ci comportent des inscriptions manuscrites, du texte imprimé, des photographies et des cartes du département peintes à l’aquarelle. Le fond de notre carte interactive provient directement de l'ouvrage.</p><br>
<p>Remarqué pour sa qualité, le livre est exposé aux côtés d’autres objets en lien avec la puériculture dans le pavillon de l’Assistance Publique à <strong>l’Exposition Universelle de Paris de 1889</strong>. Finalement, le Musée de Bretagne l’acquiert en 2023 pour l’ajouter à ses collections.</p><br>
<p>L'ouvrage débute par une introduction faisant office de résumé de l'enquête, puis propose un dictionnaire français-breton contenant les termes recueillis par les enquêteurs. Enfin, il passe en revue les 43 cantons du Finistère. Pour chacun, il présente des comparaisons entre les pratiques d'autrefois et d'aujourd'hui (1888 donc) sur l'allaitement, l'emmaillotement et la vêture des enfants, leurs modes de couchage, leur gardiennage et les soins qu'on leur porte, leur instruction et leur éducation.</p><br>

<h1>La puériculture du XIX<sup>e</sup> siècle</h1>
<p>La production de cet ouvrage a lieu dans un contexte de <strong>développement de la méthode d’enquête en Europe au XIX<sup>e</sup>&nbspsiècle</strong>&nbsp: la bureaucratie est en plein essor et les sciences statistiques deviennent un outil de gouvernement.</p><br>
<p>C’est aussi le moment où se diffuse <strong>la puériculture pastorienne</strong> en France, qui tente de répondre à un enjeu démographique majeur. En effet, la mortalité infantile touche alors 180 enfants de moins de un an sur 1000 (contre 4,1 en 2024).</p><br>
<p><strong>L’objectif de l’enquête commandée par le Ministère de l’Intérieur est clair</strong>&nbsp: faire un état des lieux de l’élevage des enfants dans le pays pour combattre les mauvaises pratiques (emmaillotement, lait mal stérilisé, etc.) et promouvoir les bonnes (stérilisation des biberons, appels plus fréquents au médecin, etc).</p><br>
<p>Ces recommandations vont peu à peu s’imposer dans la France de la seconde moitié du XIX<sup>e</sup>&nbspsiècle et effectivement faire baisser la mortalité infantile.<strong>&nbspMais, comme le montre l’enquête d’Émile Bérard, cette transformation se fera plus ou moins rapidement selon les populations et les territoires.</strong></p><br>

<h1>Le Master Humanités Numériques</h1>
<p>Le site que vous consultez actuellement a été conçu par les étudiants et étudiantes de <strong>la promotion Stephanie Shirley du <a href = "https://formations.univ-rennes2.fr/fr/formations/master-37/master-humanites-numeriques-JF9HM9NB.html">master Humanités Numériques de l’université Rennes&nbsp2</a></strong>. Cette formation en deux ans nous a permis d’apprendre de <strong>nombreux outils et langages numériques</strong> utilisés pour créer des bases de données et des sites web, traiter des documents multimédias, visualiser des données, etc.</p>
<p>Ce master est proposé en bi-diplomation, ce qui nous permet de garder un lien constant avec nos autres disciplines de prédilection (histoire, littérature générale et comparée, philosophie, art du spectacle, etc).</p><br>

<h1>Le projet de M2 2025-2026</h1>
<p><strong>Chaque année, les étudiants et étudiantes de deuxième année de notre master se mobilisent autour d’un projet commun pour mettre en pratique les savoirs acquis dans cette formation.</strong> La petite taille de la promotion (11 étudiantes et étudiants) facilite l’entraide entre ses membres. Ce projet est aussi l’occasion de coopérer avec nos enseignantes et enseignants bien sûr, mais aussi avec des spécialistes du sujet étudié, des institutions rennaises telles que le Musée de Bretagne ou les Archives municipales, des journalistes, des associations étudiantes, etc.</p><br>
<p><strong>Cette année, le Musée de Bretagne nous a proposé de travailler librement sur un ouvrage du XIX<sup>e</sup>&nbspsiècle portant sur la puériculture dans le Finistère.</strong> Après l’avoir découvert, nous avons décidé d’en tirer un outil de médiation pour exposer les conclusions principales de l’enquête au moyen d’une <strong>carte interactive. Cette carte reprend les liens effectués par Émile Bérard entre les cantons et les thèmes évoqués dans son ouvrage. L'attribution des thèmes à des cantons spécifiques a été réalisée en fonction de la quantité d'informations relevées. Elles permettent ainsi d'évoquer aussi bien leurs aspects spécifiques qu'une vision plus globale pour l'ensemble du Finistère. <a href="{base}/folium">Allez vite la découvrir !</a></strong></p><br>
<br>
<div id="accestuto"><h1>Comment utiliser la carte interactive ?</h1></div>

<img src={tuto} class="tuto" alt="Image animée du tutoriel">
<br>

</div>

</div>



<style>

    :global(body) {
        background-color: #f3e9d5;
        background-image:url('$lib/assets/Fond.jpg') ;
        background-size: cover;
        }

    .bod {
        padding-top: 5%;
        margin-left: 8%;
        margin-right : 8%;
        background-color: white;

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

    .tuto{
        display : block;
        margin : 0 auto;
        width : 60%;
        border : 2px solid black;
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

    a{
    text-decoration : none;
    color : brown;
}

    h1 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 3vh;
        text-transform: uppercase;
        justify-self: center;
        text-justify: inter-cluster;
        text-align: center;
        margin: 0 15% 5% 15%;
        color: #99816a;
        background-color: white;
        padding: 1.5% 1.5% 1.5% 1.5%;
        /* color : #ae9784; */

    }
    .conteneur{
        display : flex;
        flex-direction: row;
        justify-content : center;
        align-items : flex-start;
        gap: 3%;
        width: 100%;
        margin-left: 0%;
        margin-right: 0%;
        padding-bottom: 2%;
    }
    .musee, .hn {
        display : flex;
        flex-direction: column;
        align-self : center;
        width : 20%;
        border : 1px solid black;
        box-shadow : 3px 3px 3px black;
        transition: transform 0.3s ease;
    }
    .carte {
        display : flex;
        flex-direction: column;
        width : 40%;
        border : 1px solid black;
        box-shadow : 3px 3px 3px black;
        transition: transform 0.3s ease;
    }

    .musee:hover, .carte:hover, .hn:hover {
        transform : scale(1.05);
    }
    .museeimage, .carteimage, .hnimage {
        width : 100%;
        display : block;
    }

    .info{
        color : red;
    }

@media screen and (min-width: 480px) {

    h1 {
        font-size: 3.5vh;
    }

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

    .bod {
        margin-left: 12%;
        margin-right : 12%;
        margin-top: 5%;
    }

}

</style>



