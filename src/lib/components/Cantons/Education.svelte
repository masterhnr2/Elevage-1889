
<script>
    import Audio from "../Audio.svelte";

    let dysMode = false;
    
</script>

<Audio
    chemin={"/images/Saliva - Ladies and Gentlemen.mp3"}
/>

<!-- Bouton mode dyslexique -->

<button class="dysbouton" on:click={() => dysMode = !dysMode}>
    {dysMode ? 'Mode normal' : 'Mode dyslexie'}
</button>

<div class:dys={dysMode}>

<h1>éducation</h1>
    <br>
    <p>Bérard Emile Théophile (13 février 1859 - 23 juin 1899) (Administration) ; 1889 ; Finistère. Mage Emile (1836 - 1908) ; Anonyme (Photographe) ; 1860 - 1870 ; Finistère ; Une grande majorité des autres photographies peuvent être attribuées avec certitude à Émile Mage (1836-1908). Ce photographe brestois, membre de la Société française de photographie fréquente Paris où il expose ses photographies aux expositions de 1874 et 1876, pour lesquelles il reçoit une mention honorable. Il est aussi l'auteur de plusieurs séries Types et costumes bretons, éditées au format carte de visite et vues stéréoscopiques, qui figurent les différentes modes régionales et sont largement diffusées, et présentes dans l'album..</p>\
    <br>
    <h2>Description</h2>
    <br>
    <p>Album in folio comprenant 370 feuillets imprimés et manuscrits, 47 cartes rehaussées des cantons et îles du Finistère recensés, et 102 tirages photographiques. Chaque chapitre ouvre sur une carte du département, la même carte est ainsi reproduite 47 fois, par procédé lithographique, rehaussée en bleu pour les côtes et en rose pour l'arrondissement concerné ; viennent ensuite un à deux feuillets sur lesquels sont contrecollées les photographies. Un chapitre comprend neuf feuillets de formulaires imprimés, complétés à la main et donnant des renseignements sur les objets exposés, les pratiques d'autrefois et celles d'aujourd'hui, selon différentes thématiques : l'allaitement, la nourriture, l'emmaillotement, les vêtements, les modes de couchage, l'instruction et l'éducation, etc. </p>"

</div>

<style>

    p {
        margin-left: 8%;
        margin-right: 8%;
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

</style>