<script>

    import Navbar from '$lib/components/Navbar.svelte';
    import IconeLivre from '$lib/components/Icone_livre.svelte';

</script>

<Navbar/>

<div class="bod">
<h1><strong>Exposition universelle de 1889 Elevage des enfants du premier âge - Finistère</strong></h1>

<h2>Projet</h2>
<p> Ce projet a été mis en place dans le cadre d'un travail étudiant avec la promotion 2025-2026 Stephanie Shirley en master Humanités Numériques. L'objectif était de mettre en lumière un objet de collection du Musée de Bretagne; <em><strong>Elevage des enfants du premier âge - Finistère</strong></em>. La carte interactive ci-présente est le résultat de 9 mois de travail, permettant à tout·e utilisateur·ice de se balader à travers les cantons du Finistère et de découvrir différentes informations à travers les thématiques de l'ouvrage.</p>

<h2>Crédits</h2>

<p>
Remercier le Musée de Bretagne, remercier les profs, remercier Jacob, remercier le public
</p>
</div>
<IconeLivre/>


<style>


    .bod {
        padding-top: 5%;

    }

    h1 {
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
    p {
        font-family : Verdana, Geneva, Tahoma, sans-serif;
        text-justify : inter-cluster;
        text-align : justify;
        margin-left: 20%;
        margin-right : 20%;
        margin-top : 2%;
    }
</style>