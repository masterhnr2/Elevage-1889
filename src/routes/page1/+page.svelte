<script>
    import Menu from '$lib/components/Menu.svelte';
    import Popover from '$lib/components/Popover.svelte';



</script>

<Menu/>

<button  type="button" popovertarget="popover_Quimper">Quimper</button>
<button  type="button" popovertarget="popover_Brest">Brest</button>
<button  type="button" popovertarget="popover_Douarnenez">Douarenez</button>
<button  type="button" popovertarget="popover_Ploudalmezean">Ploudalmezean</button>
<button  type="button" popovertarget="popover_Concarnot">Concarnot</button>


<Popover/>



