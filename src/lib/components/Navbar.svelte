<script>
    import {base} from '$app/paths';
    import Livre from '$lib/assets/Ico livre.png'
</script>

<nav>
  <ul>
    <li class="icone">
      <a href="http://www.collections.musee-bretagne.fr/ark:/83011/FLMjo506404" target="_blank">
        <img src={Livre} alt="Icône livre">
        <span>Version numérique de l'ouvrage</span>
      </a>
    </li>
    <li><a href="{base}/">Accueil</a></li>
    <li><a href="{base}/folium">Carte interactive</a></li>
    <li><a href="{base}/apropos">À propos</a></li>
  </ul>
</nav>

<style>
    nav {
        width: 100%;
        padding-top: 1%;
        background-color: white;
        position: sticky;
        top: 0;
        z-index: 1000;
    }

    nav ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: bold;
        position: relative; 
        margin: 0;
        padding: 0;
    }


    nav li.icone {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        width: auto;
        margin: 0;
    }

    nav li.icone a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75em 0;
    border-bottom: 2px solid transparent;
}

nav li.icone a:hover {
    color: #3b2224;
    border-bottom: 2px solid #be9f82;
}

    nav li.icone img {
        display: block;
        height: 4rem;  
        width: auto;
    }

    nav li {
        width: 20%;
        text-align: center;
        margin: 0 3%;
    }

    nav li.icone span {
    font-size: 1.5rem;
    color: #be9f82;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
}

nav li.icone span a:hover{
    color: #be9f82;
    border-bottom: 2px solid #be9f82;
}

    nav a {
        display: block;
        text-decoration: none;
        color: #be9f82;
        border-bottom: 2px solid transparent;
        padding: 0.75em 0;
        font-size: 1.5rem;
    }

    nav a:hover {
        color: #3b2224;
        border-bottom: 2px solid #be9f82;
    }

    @media screen and (min-width: 490px) {
        nav {
            margin: 0 auto;
            top: 2px;
        }
        nav a {
            font-size: 2rem;
        }
        nav li {
            margin: 0;
        }
    }

    @media screen and (min-width: 768px) {
        nav {
            padding-bottom: 0.5%;
        }
        nav a {
            font-size: 2rem;
            padding: 10px 0;
        }
    }
</style>