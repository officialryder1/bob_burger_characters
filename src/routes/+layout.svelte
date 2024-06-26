<script>
    import '../app.css'
    import Navbar from '../lib/navbar.svelte';
</script>
<header>
  <!-- navbar -->
  <Navbar/>
  
</header>
<main>
    <slot></slot>
</main>
<footer>
    <p>Copyright 2024 Aries Gaming</p>
</footer>
<style>
    header{
        display: flex;
        justify-content: center;
    }
    main{
        max-width: 960px;
        margin: 20px auto;
    }
    footer{
        margin-top: 50px;
        text-align: center;
    }
</style>