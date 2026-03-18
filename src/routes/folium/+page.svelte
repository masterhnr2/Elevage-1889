<script>
    import Folium from '$lib/components/Folium.svelte';
    import Popover from '$lib/components/Popover.svelte';
    import Menu from '$lib/components/Menu.svelte';
    import IconeLivre from '$lib/components/Cantons/Icone_livre.svelte';
</script>

<Menu/>

<Folium 
    map_zoom={8.75}
/>

<Popover/>
<IconeLivre/>

