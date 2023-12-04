<script>
    import {copy} from 'svelte-copy';
    export let code="";
    let btntext='Copy';

    function copycode(){

        btntext='Copied';
        setTimeout(() => {
            btntext='Copy';
        }, 1000);
    }
</script>

<button class="border-2 px-2 py-1 rounded-md text-white" use:copy={code} on:click={copycode}>{btntext}</button>