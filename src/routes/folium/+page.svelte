<script>
    import Folium from '$lib/components/Folium.svelte';
    import Popover from '$lib/components/Popover.svelte';
    import IconeLivre from '$lib/components/Icone_livre.svelte';
</script>

<nav>
<ul>
    <li><a href="/">Accueil</a></li>
    <li><a href="/folium">Carte interactive</a></li>
    <li><a href="/apropos">À propos</a></li>
</ul>
</nav>

<Folium 
    map_zoom={10}
/>

<Popover/>
<IconeLivre/>

<style>
    nav{
        width : 100%;
        margin : 0 auto;
        background-color : white;
        position : sticky;
        top : 0px;
    }
    nav a{
        display : block;
        text-decoration : none;
        color : #be9f82;
        border-bottom : 2px solid transparent;
        padding : 10px 0px;
        font-size : 23px;
    }
    nav a:hover{
        color :#3b2224;
        border-bottom : 2px solid #be9f82;
    }
    nav ul{
        list-style-type : none;
        display : flex;
        justify-content : center;
        font-family : Verdana, Geneva, Tahoma, sans-serif;
        font-weight : bold;
    }

    nav li{
        width : 25%;
        text-align : center;
    }
    nav ul::after{
        content : "";
        display : table;
        clear : both;
    }
</style>

