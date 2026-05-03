
<script>

    import IconeLivre from '$lib/components/Icone_livre.svelte';

</script>

<nav>
<ul>
    <li><a href="/">Accueil</a></li>
    <li><a href="/folium">Carte interactive</a></li>
    <li><a href="/apropos">À propos</a></li>
</ul>
</nav>


<div class="bod">

<h1><strong>Exposition universelle de 1889 Elevage des enfants du premier âge - Finistère</strong></h1>

<div class ="conteneur">
    <div class="musee">
    <a href="https://www.leschampslibres.fr/les-champs-libres/musee-de-bretagne" target="_blank">
    <img src="/images/logobretagne.png" alt="Image de la carte" class="museeimage">
    </a>
    <div class ="museeacces">
    <p> <a href="https://www.leschampslibres.fr/les-champs-libres/musee-de-bretagne"> Les Champs Libres - Musée de Bretagne</a></p>
    </div>
    </div>
    <div class="carte">
    <a href = "/folium">
    <img src="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272005/high" alt="Image de la carte" class="carteimage">
    </a>
    <div class ="carteacces">
    <p> <a href="/folium"> Carte interactive </a></p>
    </div>
    </div>
    <div class="hn">
    <a href="https://lnk.bio/masterhnr2" target="_blank">
    <img src="/images/logo_hn.png" alt="Image des RS" class="hnimage">
    </a>
    <div class ="hnacces">
    <p> <a href="https://lnk.bio/masterhnr2"> Master Humanités Numériques Université Rennes 2</a></p>
    </div>
    </div>
</div>
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

    h1 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 5 vh;
        text-transform: uppercase;
        justify-self: center;
        text-justify: inter-cluster;
        text-align: center;
        margin-left: 15%;
        margin-right: 15%;
        color: #ae9784;

    }
    .conteneur{
        display : flex;
        flex-direction: row;
        justify-content : center;
        align-items : flex-start;
        gap: 2%;
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;

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
    .carteacces, .museeacces, .hnacces {
        font-family : verdana, sans-serif, courier, monospace;
        font-size : x-large;
        text-align : center;
    }
    .musee:hover, .carte:hover, .hn:hover {
        transform : scale(1.05);
    }
    .museeimage, .carteimage, .hnimage {
        width : 100%;
        display : block;
    }
</style>



