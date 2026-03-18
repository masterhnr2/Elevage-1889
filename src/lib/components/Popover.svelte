<script>

    import Quimper from '$lib/components/Cantons/Quimper.svelte';
    import Brest from '$lib/components/Cantons/Brest.svelte'
    import Douarnenez from './Cantons/Douarnenez.svelte';
    import Ploudalmezean from './Cantons/Ploudalmezean.svelte';
    import Concarnot from './Cantons/Concarnot.svelte';

</script>

    <div id="popover_Quimper" popover>
        <div class="lightboxContainer">
            <div id="boite">
                <Quimper/>
            </div>
        </div>
    </div>


    <div id="popover_Brest" popover>
        <div class="lightboxContainer">
            <div id="boite">
                <Brest/>
            </div>
        </div>
    </div>

    <div id="popover_Douarnenez" popover>
        <div class="lightboxContainer">
            <div id="boite">
                <Douarnenez/>
            </div>
        </div>
    </div>

    <div id="popover_Ploudalmezean" popover>
        <div class="lightboxContainer">
            <div id="boite">
                <Ploudalmezean/>
            </div>
        </div>
    </div>

    <div id="popover_Concarnot" popover>
        <div class="lightboxContainer">
            <div id="boite">
                <Concarnot/>
            </div>
        </div>
    </div>


<style>

                .lightboxContainer {
                    align-items: center;
                    bottom: 0;
                    display: flex;
                    justify-content: center;
                    left: 65%;
                    position: fixed;
                    z-index: 10000;
                    
                    
                    }

                #boite {
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    justify-content: space-evenly;
                    width: 100%;
                    background-color: rgb(202, 167, 70);
                    overflow-y: auto;

                    }
                </style>