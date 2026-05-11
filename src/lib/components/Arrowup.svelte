<script>

    import arrowup from '$lib/assets/arrowup.png'

</script>


<a href="#" class="btn">
    <img src={arrowup} alt="">
</a>

<style>


    .btn {
        margin: 0% -7% 0% 0%;
        position: fixed;
        right : 0%;
        bottom : 0%;
        cursor : pointer;
    }

    .btn img {
        height : 30%;
        width : 30%;
    }

    @media screen and (min-width: 480px) {

            .btn {
        margin: 0% 0% 0% 0%;
        position: fixed;
        right : 2%;
        bottom : 4%;
        cursor : pointer;
    }

    .btn img {
        height : 55%;
        width : 55%;
    }

    }

</style>