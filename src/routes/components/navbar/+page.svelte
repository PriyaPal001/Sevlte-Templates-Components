<script lang="ts">
	import BtnCopy from '$lib/home/btnCopy.svelte';
import { allnavs } from '$lib/index.ts';
    import {copy} from 'svelte-copy';
    let btntext='Copy';

    function copycode(){
        btntext='Copied';
        setTimeout(() => {
            btntext='Copy';
        }, 1000);
    }
    
</script>

<div>

    {#each allnavs as items}
    <div class="flex justify-between pr-10">
        <h1 class="text-white font-semibold text-lg underline-offset-4">{items.name}</h1>
        <div class="">
            <BtnCopy code={items.code}/>
        </div>
    </div>
    <div class="border-2 m-4 p-4 rounded-lg">
        
        <svelte:component this={items.comp} />
    </div>
        {/each}
</div>