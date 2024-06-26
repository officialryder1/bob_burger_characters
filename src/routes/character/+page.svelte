<script lang="ts">
export let data;
import Card from '$lib/card.svelte';

$: characters = data?.characters;

</script>
<a href="/about">about</a>
<a href="/">home</a>

<ul>
    {#each characters as character (character.id)}
        <Card>
            <li>
                    <a href="{`/character/${character.id}`}" class="picture">
                        <img src="{character.image}" alt="{character.name}">
                    </a>
            
                    <div>
                        <a href="{`/character/${character.id}`}"><b>{character.name}</b></a>
                        <p class="occupation">
                            {character.occupation ? character.occupation : 'Unknown'}
                        </p>
                    </div>
                </li>
        </Card><br>
    {/each}
</ul>

<a href="/about">about</a>
<a href="/">home</a>

<style>
li{
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
}
.picture{
    display: flex;
    height: 100px;
    width: 100px;
}
img{
    height: 100%;
    width: 100%;
    object-fit: contain;
}
.occupation{
    color: grey;
}
</style>