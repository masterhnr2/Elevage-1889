<script>

let audio;
let playing = false;

function toggleAudio() {
    if (playing) {
        audio.pause();
        audio.currentTime = 0;
    } else {
        audio.play();
    }
    playing = !playing;
}
</script>

<div class="conteneuraudio">
<audio bind:this={audio} src="/images/Nightclub.mp3"></audio>
<span class="audiobouton" on:click={toggleAudio}>
    {playing ? '⏹️' : '🔊'}
    </span>
</div>



<style>

        .conteneuraudio {
        display : flex;
        margin-top : 2%;
        margin-left : 45%;
    }
    .audiobouton {
        cursor : pointer;
        font-size : 5rem;
        user-select : none;
    }




</style>