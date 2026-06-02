
<script>
    import Audio from "../Audio.svelte";
    import {base} from '$app/paths';
    import mega_079 from '$lib/assets/mega_079.jpg';
    import mega_082 from '$lib/assets/mega_082.jpg';
    import Montage_Education from '$lib/assets/Montage/Montage_Education.mp3'

    let dysMode = false;
    
</script>

<Audio
    chemin={Montage_Education}
/>

<!-- Bouton mode dyslexique -->

<button class="dysbouton" on:click={() => dysMode = !dysMode}>
    {dysMode ? 'Mode dyslexie' : 'Mode normal'}
</button>

<div class:dys={dysMode}>

<h1>L'éducation des enfants au XIX<sup>e</sup>&nbspsiècle : Douarnenez, Fouesnant et Plogastel</h1>

<p>L'éducation désigne ici non pas l'instruction scolaire, mais ce qui se transmet au quotidien dans la famille&nbsp: les gestes du travail, les règles morales dictées par la religion, le rapport au corps et à la communauté. C'est ce savoir-être que documente Bérard dans son enquête sur le Finistère. Les cantons de Fouesnant, Plogastel et Douarnenez en offrent trois portraits contrastés, illustrant la cohérence de l'éducation traditionnelle et les résistances qu'elle oppose à toute transformation.</p>

<h2>Autrefois</h2>
<br>
<p>Dans le Finistère rural, l'éducation repose sur le corps et le travail. À Fouesnant, le campagnard <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272143/" target="_blank"><em>«&nbsps'attachait seulement à utiliser le plus tôt possible les bras de toute sa famille&nbsp»</em></a>&nbsp: le souci d'éduquer <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272143/" target="_blank"><em>«&nbspn'existait pas&nbsp»</em></a> et <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272143/" target="_blank"><em>«&nbspl'éducation des forces physiques était la seule en honneur&nbsp»</em></a>. L'enfant n'est pas d'abord un être à former&nbsp: il est une force de travail au service de la famille.</p>

<div class="image">
<img src={mega_079} alt="Enfants gardant des vaches à Pont-Aven, Finistère, 1895."/>
<figure><figcaption><em><a href="http://www.collections.musee-bretagne.fr/ark:/83011/FLMjo496172" target="_blank">Enfants en costume traditionnel gardant des vaches à Pont-Aven</a></em>, Finistère, 1895. À Fouesnant comme dans tout le Finistère rural, les enfants étaient mis au travail dès leur plus jeune âge.</figcaption></figure>
</div>
<br>
<p>À Plogastel, cette logique s'articule avec une formation morale portée par la religion et la coutume. Les mères <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272163/" target="_blank"><em>«&nbspne s'occupaient [pas] de l'éducation de leurs enfants&nbsp»</em></a> dans le sens d'un éveil intellectuel&nbsp: on ne devait pas <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272163/" target="_blank"><em>«&nbspforcer le moment&nbsp»</em></a>, convaincu que <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272163/" target="_blank"><em>«&nbspl'intelligence de l'enfant aurait souffert&nbsp»</em></a> si on avait voulu <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272163/" target="_blank"><em>«&nbspéveiller sa curiosité avant l'âge&nbsp»</em></a>. La trajectoire est tracée d'avance &nbsp: prières vers 7 ans, catéchisme vers 10, champs vers 12. La morale ne se raisonne pas&nbsp— elle s'incorpore par les rites et la répétition.</p>
<h2>Aujourd'hui</h2>
<br>
<p>À Plogastel, l'évolution est perceptible. <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272163/" target="_blank"><em>«&nbspL'éducation de l'enfant est meilleure qu'autrefois&nbsp»</em></a>&nbsp: la mère s'occupe désormais davantage de le former <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272163/" target="_blank"><em>«&nbspà la vie intellectuelle et morale&nbsp»</em></a>. Mais Bérard tempère aussitôt&nbsp: il n'est <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272163/" target="_blank"><em>«&nbsppas rare de rencontrer encore des mères qui, malgré l'instruction et l'éducation qu'elles ont reçues, négligent complètement leurs enfants&nbsp»</em></a>. Surtout, <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272163/" target="_blank"><em>«&nbsples croyances superstitieuses sont vivaces dans la population&nbsp; elles ne disparaissent que bien lentement&nbsp»</em></a>.</p>

<p>À Douarnenez, le tableau est plus sombre. <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272123/" target="_blank"><em>«&nbspL'éducation est bornée aux exercices physiques&nbsp»</em></a>&nbsp: les enfants sont envoyés en mer très tôt, et <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272123/" target="_blank"><em>«&nbspc'est avec joie [qu'ils] se voient incorporés dans la marine&nbsp»</em></a>. Mais Bérard, témoin oculaire, dénonce une dérive grave&nbsp: <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272123/" target="_blank"><em>«&nbsples marins se font un honneur de faire boire de mauvais alcool à leurs tout jeunes enfants&nbsp»</em></a>&nbsp— il a lui-même vu <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272123/" target="_blank"><em>«&nbspdonner à boire, à même un verre, de l'eau-de-vie de betterave à un nourrisson de 6 mois&nbsp»</em></a>. <a href="http://www.collections.musee-bretagne.fr/flora_rennes/ark:/83011/0031519888/doc/2272123/" target="_blank"><em>«&nbspLes générations actuelles ne font rien pour préserver les générations futures de ce funeste penchant&nbsp»</em></a>.</p>

<div class="image">
<img src={mega_082} alt="Port de pêche avec des bateaux et des marins au travail, Finistère."/>
<figure><figcaption><em><a href="http://www.collections.musee-bretagne.fr/ark:/83011/FLMjo303622" target="_blank">Port de pêche du Finistère</a></em>, fin du XIX<sup>e</sup>&nbspsiècle. À Douarnenez, les enfants grandissaient au rythme de la mer et des bateaux, seule école qui comptait vraiment.</figcaption></figure>
</div>
<br>
<p>Ces trois cantons montrent que l'éducation rurale n'est pas une absence de formation, mais une formation différente&nbsp— ancrée dans le corps, le travail et la croyance. Ce qui se transmet résiste à toute transformation venue d'en haut.</p>
<br>
<a href="{base}/apropos" class="source">→ Pour aller plus loin, voir nos sources ici ←</a>
</div>

<style>

   @font-face {
    font-family : OpenDyslexic;
    src: url('/Fonts/open_dyslexic/OpenDyslexic-Bold.otf');
   }

    .source {
    display : block;
    text-align : center;
    font-family : Verdana, sans-serif;
    font-weight : bold;
    margin-left : 3%;
    margin-right : 3%;
    font-size : 20px;
    }

    a{
    text-decoration : none;
    color : brown;
    }

    p {
        margin-left: 8%;
        margin-right: 8%;
        text-align : justify;
        font-family : Arial, Verdana, Sans-serif;
        font-size : 18px;
        letter-spacing : 1.5px;
    }


    h1, h2 {
        text-align : center;
        font-family : Verdana, sans-serif;
        font-weight : bold;
        margin-left : 3%;
        margin-right : 3%;
    }

    h2 {
        margin-left : 5%;
    }


    .dysbouton {
    cursor: pointer;
    padding: 0.5rem 1rem;
    margin: 1rem;
    border-radius: 5px;
    border: none;
    background-color: #3b2224;
    color: white;
    font-size: 14px;
}

.dys p, .dys h1, .dys h2, .dys figcaption {
    font-family: 'OpenDyslexic', verdana, sans-serif;
    font-size: 20px;
    line-height: 2;
    letter-spacing: 1.5px;
    word-spacing: 1.5px;
}

.dys p {
        text-align : left;
}

    .image {
        width : 90%;
        margin : 1rem auto;
    }
    .image img {
        width : 92%;
        height : auto;
        display : block;
        margin-left: 5%;
        margin-right: 8%;
    }

        figure {
        text-align : center;
        margin-top: 2%;
        margin-bottom: 2%;
    }

</style>