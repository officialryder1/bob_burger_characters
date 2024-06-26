<script lang="ts">
    import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error?.message}</h1>
<p>🔥🔥🔥</p>
<style>
    h1{
        text-align: center;
        font-weight: 700;
        color: orangered;
    }
    p{
        text-align: center;
    }
</style>