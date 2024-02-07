<script lang="ts">
	import BtnCopy from '$lib/home/btnCopy.svelte';
	import { allButtons } from '$lib/index';
	import { copy } from 'svelte-copy';
	let btntext = 'Copy';

	function copycode() {
		btntext = 'Copied';
		setTimeout(() => {
			btntext = 'Copy';
		}, 1000);
	}
</script>

<div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
    {#each allButtons as items}
	<div class="rounded-lg w-full">
			<div class="flex  w-full ">
				<h1 class="text-white font-semibold text-lg underline-offset-4 w-full">{items.name}</h1>
				<div class="">
					<BtnCopy code={items.code} />
				</div>
			</div>
			<div class="border-2 flex justify-center mt-2 p-4 rounded-lg w-full">
				<svelte:component this={items.comp} />
			</div>
            </div>
		{/each}
</div>
<!-- 
<div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
    <div class="h-32 rounded-lg bg-gray-200"></div>
    <div class="h-32 rounded-lg bg-gray-200"></div>
    <div class="h-32 rounded-lg bg-gray-200"></div>
  </div> -->
