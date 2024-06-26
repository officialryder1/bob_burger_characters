<script lang="ts">
    export let data;
    import Character from '$lib/character.svelte';

    $: character= data?.character;
    
</script>
    
    <svelte:head>
        <title>{character.name}</title>
    </svelte:head>
    <h1>Character</h1>
    <a href="/about">about</a>
    <a href="/">home</a>
    <a href="/character">back</a>
    
    <Character {...character}/>
    
    
    <style>
   
    </style>