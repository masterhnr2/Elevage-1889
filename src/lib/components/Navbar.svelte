
<script>

    import {base} from '$app/paths';

</script>


<nav>
<ul>
    <li><a href="{base}/">Accueil</a></li>
    <li><a href="{base}/folium">Carte interactive</a></li>
    <li><a href="{base}/apropos">À propos</a></li>
</ul>
</nav>

<style>

    nav{
        width : 100%;
        margin : -1% 5% auto auto;
        padding-top: 1%;
        background-color : white;
        position : sticky;

    }
    nav a{
        display : block;
        text-decoration : none;
        color : #be9f82;
        border-bottom : 0em solid transparent;
        padding : 0.75em 0px;
        font-size : 1.5rem;

    }
    nav a:hover{
        color :#3b2224;
        border-bottom : 2px solid #be9f82;
    }
    nav ul{
        list-style-type : none;
        display : flex;
        justify-content :center;
        font-family : Verdana, Geneva, Tahoma, sans-serif;
        font-weight : bold;
    }

    nav li{
        width : 20%;
        text-align : center;
        margin: 0 3% 0 3%;
    }
    nav ul::after{
        content : "";
        display : table;
        clear : both;
    }

@media screen and (min-width: 490px) {

    nav{
        width : 100%;
        margin : 0 auto auto auto;
        background-color : white;
        position : sticky;
        top : 2px;
    }

    nav a{
        display : block;
        text-decoration : none;
        color : #be9f82;
        border-bottom : 0em solid transparent;
        padding : 0.75em 0px;
        font-size : 2rem;
    }

    nav li{
        margin: 0 0 0 0;
    }
}

@media screen and (min-width: 768px) {

    nav{
        width : 100%;
        margin : -1% 5% auto auto;
        padding-top: 1%;
        padding-bottom: 0.5%;


    }

    nav a{
        display : block;
        text-decoration : none;
        color : #be9f82;
        border-bottom : 2px solid transparent;
        padding : 10px 0px;
        font-size : 2rem;
    }
    nav li{
        margin: 0 0 0 0;
    }
}

</style>