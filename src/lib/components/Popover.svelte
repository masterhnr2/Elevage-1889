<!-- FENETRE CONTENANT LES INFORMATIONS -->

<script>

    import Education from './Cantons/Education.svelte';
    import Emmaillottement from './Cantons/Emmaillottement.svelte';
    import Gardiennage from './Cantons/Gardiennage.svelte';
    import Instruction from '$lib/components/Cantons/Instruction.svelte';
    import Allaitement from './Cantons/Allaitement.svelte';
    import Couchages from '$lib/components/Cantons/Couchages.svelte';
    import Veture from './Cantons/Veture.svelte';
    import VetureAssiste from './Cantons/Veture_assiste.svelte';

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
                <Veture/>
            </div>
        </div>
    </div>

    <div id="popover_Layette_assist" popover>
        <div class="lightboxContainer">
            <div id="boite">
                <VetureAssiste/>
            </div>
        </div>
    </div>

<style>

                /*.darkboxContainer {
                    bottom: 0;
                    top: 0;
                    display: flex;
                    right: 50%;
                    position: fixed;

                }

                #fond {
                    display: flex;
                    height: 100%;

                    width: 100%;
                    background-color: #000000;
                    overflow-y: auto;

                } */

                .lightboxContainer {
                    align-items: center;
                    bottom: 0;
                    top: 0;
                    display: flex;
                    justify-content: center;
                    left: 65%;
                    position: fixed;
                }



                #boite {
                    align-items: flex-start();
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    justify-content: space-evenly;
                    width: 100%;
                    background-color: #be9f82;
                    overflow-y: auto;

                    }
                </style>