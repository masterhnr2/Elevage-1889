<!-- LIEN VERS LA PAGE DU MANUSCRIT SUR LE SITE DU MUSEE DE BRETAGNE -->

<script>

    import Livre from '$lib/assets/Ico livre.png'

</script>

<div id="icone_manuscrit">
    <a href="http://www.collections.musee-bretagne.fr/ark:/83011/FLMjo506404" target="_blank">
        <img src={Livre} alt="Icone_livre" id="icone"/>
    </a>
</div>

<style>


    #icone_manuscrit {
        bottom: 89%;
        left: 4%;
        display: flex;
        justify-content: center;
        position: fixed;
        z-index: 9000;
        size: 50%;
        visibility: hidden;
    }

     a {
        margin-right : 40%
    }


    img  {
        width: 45%;
    }


@media screen and (min-width: 490px) {

    #icone_manuscrit {

        bottom: 86%;
        display: flex;
        justify-content: center;
        left: 3%;
        position: fixed;
        z-index: 9000;
        visibility: visible;

    }

        img  {
        width: 80%;
    }

        img:hover  {
        width: 110%;
        margin-left: -1%;          
    }



}

@media screen and (min-width: 768px) {

    #icone_manuscrit {
        bottom: 88%;
        left: 3%;
        display: flex;
        justify-content: center;

        position: fixed;
        z-index: 9000;
        size : 100%
} 
        img  {
        width: 100%;
    }

}


</style>