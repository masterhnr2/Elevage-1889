<script>

    import Education from './Cantons/Education.svelte';
    import Emmaillottement from './Cantons/Emmaillottement.svelte';
    import Gardiennage from './Cantons/Gardiennage.svelte';
    import Instruction from '$lib/components/Cantons/Instruction.svelte';
    import Layette from './Cantons/Layette.svelte';
    import Allaitement from './Cantons/Allaitement.svelte';
    import Couchages from '$lib/components/Cantons/Couchages.svelte';
    import LayetteAssist from './Cantons/Layette_assisté.svelte';

</script>

    <div id="popover_Alaitement" popover>
        <div class="lightboxContainer">
            <div id="boite">
                <Allaitement/>
            </div>
        </div>
    </div>

    <div id="popover_Couchage" popover>
        <div class="lightboxContainer">
            <div id="boite">
                <Couchages/>
            </div>
        </div>
    </div>

    <div id="popover_Education" popover>
        <div class="lightboxContainer">
            <div id="boite">
                <Education/>
            </div>
        </div>
    </div>


    <div id="popover_Emmaillotement" popover>
        <div class="lightboxContainer">
            <div id="boite">
                <Emmaillottement/>
            </div>
        </div>
    </div>

    <div id="popover_Gardiennage" popover>
        <div class="lightboxContainer">
            <div id="boite">
                <Gardiennage/>
            </div>
        </div>
    </div>

    <div id="popover_Instruction" popover>
        <div class="lightboxContainer">
            <div id="boite">
                <Instruction/>
            </div>
        </div>
    </div>

    <div id="popover_Layette" popover>
        <div class="lightboxContainer">
            <div id="boite">
                <Layette/>
            </div>
        </div>
    </div>

    <div id="popover_Layette_assist" popover>
        <div class="lightboxContainer">
            <div id="boite">
                <LayetteAssist/>
            </div>
        </div>
    </div>

<style>

                .lightboxContainer {
                    align-items: center;
                    bottom: 0;
                    top: 0;
                    display: flex;
                    justify-content: center;
                    left: 65%;
                    position: fixed;
                    z-index: 10000;
                    
                    
                    }

                #boite {
                    align-items: flex-start();
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    justify-content: space-evenly;
                    width: 100%;
                    background-color: rgb(155, 75, 81);
                    overflow-y: auto;

                    }
                </style>