<script>
    import Folium from '$lib/components/Folium.svelte';
    import Popover from '$lib/components/Popover.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import IconeLivre from '$lib/components/Icone_livre.svelte';
</script>

<Navbar/>

<Folium 
    map_zoom={10}
/>

<Popover/>
<IconeLivre/>

<style>
    
</style>

