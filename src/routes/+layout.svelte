<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/home/navbar.svelte';
	import '../app.postcss';
	$:routeid = $page.route.id?.split('/') ?? [];
	$:console.log(routeid);
</script>

{#if routeid[1] !== 'components'}
	 <!-- content here -->
	 <Navbar></Navbar>
{/if}

<slot />
