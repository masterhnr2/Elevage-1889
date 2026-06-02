<script>
    import { currentAudio } from './audioStore.js';
    let audio;
    let playing = false;
    let currentTime = 0;
    let duration = 0;
    export let chemin = "";

    function toggleAudio() {
        if (playing) {
            audio.pause();
            audio.currentTime = 0;
            playing = false;
            currentAudio.set(null);
        } else {
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

    function seek(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        const ratio = (e.clientX - rect.left) / rect.width;
        audio.currentTime = ratio * duration;
    }

    function formatTime(s) {
        if (!s || isNaN(s)) return '0:00';
        const m = Math.floor(s / 60);
        const sec = Math.floor(s % 60).toString().padStart(2, '0');
        return `${m}:${sec}`;
    }

    $: if ($currentAudio !== audio && playing) {
        playing = false;
    }
</script>

<div class="conteneuraudio">
    <audio
        bind:this={audio}
        bind:currentTime
        bind:duration
        src={chemin}
        on:ended={() => { playing = false; currentAudio.set(null); }}
    ></audio>

    <span class="audiobouton" on:click={toggleAudio}>
        {playing ? '⏹️' : '🔊'}
    </span>

    <div class="progression-wrapper">
        <div class="barre" on:click={seek}>
            <div class="remplissage" style="width: {duration ? (currentTime / duration) * 100 : 0}%"></div>
        </div>
        <span class="duree">{formatTime(currentTime)} / {formatTime(duration)}</span>
    </div>
</div>

<style>
    .conteneuraudio {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        margin-top: 2%;
        margin-left: 45%;
        margin-right : 8%;
    }

    .audiobouton {
        cursor: pointer;
        font-size: 5rem;
        user-select: none;
        flex-shrink: 0;
    }

    .progression-wrapper {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        flex: 1;
        min-width: 150px;
    }

    .barre {
        width: 100%;
        height: 8px;
        background: #d0d0d0;
        border-radius: 4px;
        cursor: pointer;
        overflow: hidden;
    }

    .remplissage {
        height: 100%;
        background: #4a90d9;
        border-radius: 4px;
        transition: width 0.1s linear;
    }

    .duree {
        font-size: 1.25rem;
        color: #555;
        text-align: right;
    }
</style>