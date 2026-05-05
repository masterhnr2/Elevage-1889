
<script>

    import IconeLivre from '$lib/components/Icone_livre.svelte';
    import {base} from '$app/paths';
    import logobretagne from '$lib/assets/logobretagne.png';
    import logo_hn from '$lib/assets/logo_hn.png';
    import Carte_accueuil from '$lib/assets/Carte_accueuil.jpg';
    import Navbar from '$lib/components/Navbar.svelte';


</script>

<Navbar/>

 <!-- style:background-image={`url(${fond})`} -->
<div class="bod">

<h1><strong>Exposition universelle de 1889 Elevage des enfants du premier âge - Finistère</strong></h1>

<div class ="conteneur">
    <div class="musee">
    <a href="https://www.leschampslibres.fr/les-champs-libres/musee-de-bretagne" target="_blank">
    <img src={logobretagne} alt="Image de la carte" class="museeimage">
    </a>
    <div class ="museeacces">
    <p> <a href="https://www.leschampslibres.fr/les-champs-libres/musee-de-bretagne"> Les Champs Libres - Musée de Bretagne</a></p>
    </div>
    </div>
    <div class="carte">
    <a href = "{base}/folium">
    <img src={Carte_accueuil} alt="Image de la carte" class="carteimage">
    </a>
    <div class ="carteacces">
    <p> <a href="{base}/folium"> Carte interactive </a></p>
    </div>
    </div>
    <div class="hn">
    <a href="https://lnk.bio/masterhnr2" target="_blank">
    <img src={logo_hn} alt="Image des RS" class="hnimage">
    </a>
    <div class ="hnacces">
    <p> <a href="https://lnk.bio/masterhnr2"> Master Humanités Numériques Université Rennes 2</a></p>
    </div>
    </div>
</div>
</div>

<IconeLivre/>

<style>

    :global(body) {
        background-color: #f3e9d5;
        background-image:url('$lib/assets/Fond.jpg') ;
        background-size: cover;
        }

.bod {
        padding-top: 1%;
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
    .carteacces, .museeacces, .hnacces {
        font-family : verdana, sans-serif, courier, monospace;
        font-size : 1.2rem;
        text-align : center;
        background-color: white;

        a {
            color :  #8f755d;
        }
    }
    .musee:hover, .carte:hover, .hn:hover {
        transform : scale(1.05);
    }
    .museeimage, .carteimage, .hnimage {
        width : 100%;
        display : block;
    }

@media screen and (min-width: 480px) {

    h1 {
        font-size: 3.5vh;
    }

}


@media screen and (min-width: 768px) {

    .conteneur{
        gap: 4%;
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        padding-bottom: 2%;
    }


    .carteacces, .museeacces, .hnacces {
        font-family : verdana, sans-serif, courier, monospace;
        font-size : 1.7rem;
        text-align : center;
        margin-top : 2%;
    }

    h1 {
        font-size: 3vh;
         margin: 1% 30% 2.5% 30%;    
        }

}

</style>



