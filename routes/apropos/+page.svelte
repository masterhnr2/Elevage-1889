<script>

    import IconeLivre from '$lib/components/Icone_livre.svelte';
    import {base} from '$app/paths';
    import Bibliographie from '$lib/assets/Bibliographie.pdf'

</script>

<nav>
<ul>
    <li><a href="{base}/">Accueil</a></li>
    <li><a href="{base}/folium">Carte interactive</a></li>
    <li><a href="{base}/apropos">À propos</a></li>
</ul>
</nav>

<div class="bod">
<h1>Le Master Humanités Numériques</h1>
<p>Le site que vous consultez actuellement a été conçu par les étudiant·e·s de <strong>la promotion Stephanie Shirley du <a href = "https://formations.univ-rennes2.fr/fr/formations/master-37/master-humanites-numeriques-JF9HM9NB.html">master Humanités Numériques de l’université Rennes&nbsp2</a></strong>. Cette formation en deux ans nous a permis d’apprendre de <strong>nombreux outils et langages numériques</strong> utilisés pour créer des bases de données et des sites web, traiter des documents multimédias, visualiser des données, etc.</p>
<p>Ce master est proposé en bi-diplomation, ce qui nous permet de garder un lien constant avec nos autres disciplines de prédilection (histoire, littérature générale et comparée, philosophie, art du spectacle, etc).</p><br>

<h1>Le projet de M2 2025-2026</h1>
<p><strong>Chaque année, les étudiant·e·s de deuxième année de notre master se mobilisent autour d’un projet commun pour mettre en pratique les savoirs acquis dans cette formation.</strong> La petite taille de la promotion (11 étudiant·e·s) facilite l’entraide entre ses membres. Ce projet est aussi l’occasion de coopérer avec nos enseignant·e·s bien sûr, mais aussi avec des spécialistes du sujet étudié, des institutions rennaises telles que le Musée de Bretagne ou les Archives municipales, des journalistes, des associations étudiantes, etc.</p><br>
<p><strong>Cette année, le Musée de Bretagne nous a proposé de travailler librement sur un ouvrage du XIX<sup>e</sup>&nbspsiècle portant sur la puériculture dans le Finistère.</strong> Après l’avoir découvert, nous avons décidé d’en tirer un outil de médiation pour exposer les conclusions principales de l’enquête au moyen d’une <strong>carte interactive</strong>. Allez vite la découvrir !</p><br>

<h1>L’ouvrage <em>Élevage des enfants du premier âge</em></h1>
<p><strong>En 1888, le Ministère de l’Intérieur commande une grande enquête sur l’élevage des enfants en France</strong> (aujourd’hui le terme ‘éducation’ serait préféré). Des questionnaires sont donc relayés aux agents des préfectures&nbsp, et dans le cas du Finistère, le chef de division Émile Bérard semble s'être passionné pour le sujet.</p><br>
<p>Au terme de son travail, il fait donc produire <strong>un très bel ouvrage relié, composé de 47 cahiers de 11 à 13 feuillets chacun, soit plus de 900 pages</strong>. Celles-ci comportent des inscriptions manuscrites, du texte imprimé, des photographies et des cartes du département peintes à l’aquarelle.</p><br>
<p>Remarqué pour sa qualité, le livre est exposé aux côtés d’autres objets en lien avec la puériculture dans le pavillon de l’Assistance Publique à <strong>l’Exposition Universelle de Paris de 1889</strong>. Finalement, le Musée de Bretagne l’acquiert en 2023 pour l’ajouter à ses collections.</p><br>
<p>L'ouvrage débute par une introduction faisant office de résumé de l'enquête, puis propose un dictionnaire français-breton contenant les termes recueillis par les enquêteurs. Enfin, il passe en revue les 43 cantons du Finistère. Pour chacun, il présente des comparaisons entre les pratiques d'autrefois et d'aujourd'hui (1888 donc) sur l'allaitement, l'emmaillotement et la vêture des enfants, leurs modes de couchage, leur gardiennage et les soins qu'on leur porte, leur instruction et leur éducation.</p><br>

<h1>La puériculture du XIX<sup>e</sup> siècle</h1>
<p>La production de cet ouvrage a lieu dans un contexte de <strong>développement de la méthode d’enquête en Europe au XIX<sup>e</sup>&nbspsiècle</strong>&nbsp: la bureaucratie est en plein essor et les sciences statistiques deviennent un outil de gouvernement.</p><br>
<p>C’est aussi le moment où se diffuse <strong>la puériculture pastorienne</strong> en France, qui tente de répondre à un enjeu démographique majeur. En effet, la mortalité infantile touche alors 180 enfants de moins de un an sur 1000 (contre 4,1 en 2024).</p><br>
<p><strong>L’objectif de l’enquête commandée par le Ministère de l’Intérieur est clair</strong>&nbsp: faire un état des lieux de l’élevage des enfants dans le pays pour combattre les mauvaises pratiques (emmaillotement, lait mal stérilisé, etc.) et promouvoir les bonnes (stérilisation des biberons, appels plus fréquents au médecin, etc).</p><br>
<p>Ces recommandations vont peu à peu s’imposer dans la France de la seconde moitié du XIX<sup>e</sup>&nbspsiècle et effectivement faire baisser la mortalité infantile.<strong> Mais, comme le montre l’enquête d’Émile Bérard, cette transformation se fera plus ou moins rapidement selon les populations et les territoires.</strong></p><br>

<h1>Pour les plus curieux</h1>
<button class="biblio" type="button"><a href={Bibliographie} target="_blank"> Accédez à la bibliographie utilisée pour le projet</a></button><br>

<h1>Remerciements</h1>
<h2>Université Rennes 2</h2>
<p>Tout d'abord, merci à <strong>Karine Karila-Cohen</strong>, <strong>Fabienne Moreau</strong> et <strong>Chloé Guennou</strong>, nos enseignantes et encadrantes pour ce projet.</p>
<p>Merci également à <strong>Pierre Karila-Cohen</strong> et <strong>Patricia Legris</strong> pour leurs conférences respectives sur l'enquête et la puériculture au XIX<sup>e</sup>&nbspsiècle ainsi que pour leurs réponses à nos nombreuses questions.</p>
<p>Un grand merci à <strong>Jacob Hart</strong> pour son aide précieuse sur la conception du site et de la carte interactive.</p>
<p>Enfin, merci à <strong>Claire Vallée</strong> pour ses conseils concernant la communication du projet.</p><br>

<h2>Musée de Bretagne</h2>
<p>Merci à <strong>Laurence Prod'homme</strong> de nous avoir fait découvrir l'ouvrage d'Émile Bérard et pour son travail de documentation en amont de notre projet.</p>
<p>Merci également aux agents des services numériques du Musée de Bretagne et des Champs Libres, en particulier <strong>Manuel Moreau</strong>, <strong>Fabienne Martin-Adam</strong> et <strong>Guillaume Rouhan</strong> pour leurs conseils.</p><br>

<h2>Archives</h2>
<p>Merci aux <strong>Archives départementales de l'Orne</strong> pour leur accueil ; aux <strong>Archives départementales du Finistère</strong> pour les éclaircissements sur le passé d'Émile Bérard ; et à <strong>l'Association des archivistes de France</strong> pour leur aide.</p><br>

<h2>Journalistes</h2>
<p>Merci à <strong>Marilyne Gautronneau</strong> et <strong>Arnaud Loubry</strong> de <em>ICI Rennes métropoles</em> d'avoir apporté une visibilité supplémentaire à ce projet grâce à leur article paru dans le numéro d'avril 2026.</p>
<p>Merci également au soutien de <strong><em>L'Agrafe</em></strong>, journal indépendant de l'université, pour nous avoir permis de publier un article dans le numéro de mai 2026.</p>

<h2>Remerciements spéciaux</h2>
<p>À <strong>Stéphanie</strong> pour avoir trouvé le nom de la promotion.</p>
<p>À <strong>Clara</strong> pour avoir trouvé des solutions aux problèmes de coding du site.</p>
<p>À l'ensemble de <strong>nos proches</strong> mis à contribution.</p>
<p>Enfin, merci à <strong>tous·tes les curieux·ses</strong> qui s'intéressent à notre projet.</p>
</div>

<IconeLivre/>


<style>

    nav{
        width : 100%;
        margin : 0 auto;
        background-color : white;
        position : sticky;
        top : 0px;
    }
    nav a{
        display : block;
        text-decoration : none;
        color : #be9f82;
        border-bottom : 2px solid transparent;
        padding : 10px 0px;
        font-size : 23px;
    }
    nav a:hover{
        color :#3b2224;
        border-bottom : 2px solid #be9f82;
    }
    nav ul{
        list-style-type : none;
        display : flex;
        justify-content : center;
        font-family : Verdana, Geneva, Tahoma, sans-serif;
        font-weight : bold;
    }

    nav li{
        width : 25%;
        text-align : center;
    }
    nav ul::after{
        content : "";
        display : table;
        clear : both;
    }


    .bod {
        padding-top: 5%;

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
        margin-top: 5%;
        color : #696969;
    }
    p{
        font-family : Verdana, Geneva, Tahoma, sans-serif;
        text-justify : inter-cluster;
        text-align : justify;
        margin-left: 20%;
        margin-right : 20%;
        margin-top : 2%;
    }
    .biblio{
        display : block;
        margin : 0 auto;
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
</style>