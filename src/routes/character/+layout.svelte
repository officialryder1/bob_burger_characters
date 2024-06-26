<script>
    import '../../app.css'
</script>
<svelte:head>
    <title>characters</title>
</svelte:head>

<main>
    <h1>Character</h1>
    <slot></slot>
</main>
<footer>
    <p>Copyright 2024 </p>
</footer>
<style>
    main{
        max-width: 960px;
        margin: 20px auto;
    }
    footer{
        margin-top: 50px;
        text-align: center;
    }
    h1{
        color: rebeccapurple;
        text-align: center;
    }
</style>