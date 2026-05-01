<script>
    import { currentAudio } from './audioStore.js';

    let audio;
    let playing = false;
    export let chemin = "";

    function toggleAudio() {
        if (playing) {
            audio.pause();
            audio.currentTime = 0;
            playing = false;
            currentAudio.set(null);
        } else {
// Arrête l'audio précédent s'il existe
            const prev = $currentAudio;
            if (prev && prev !== audio) {
                prev.pause();
                prev.currentTime = 0;
            }

            audio.play();
            playing = true;
            currentAudio.set(audio);
        }
    }

// Réagit si un autre composant a pris la main
    $: if ($currentAudio !== audio && playing) {
        playing = false;
    }
</script>

<div class="conteneuraudio">
    <audio bind:this={audio} src={chemin}></audio>
    <span class="audiobouton" on:click={toggleAudio}>
        {playing ? '⏹️' : '🔊'}
    </span>
</div>

<style>
    .conteneuraudio {
        display: flex;
        margin-top: 2%;
        margin-left: 45%;
    }
    .audiobouton {
        cursor: pointer;
        font-size: 5rem;
        user-select: none;
    }
</style>