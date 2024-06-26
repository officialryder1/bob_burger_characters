<script>
    let user = 'victor';
   </script>
   
   <svelte:head>
       <title>Home</title>
   </svelte:head>
   <h1>Welcome {user}</h1>
   <a href="/about">about</a>
   <a href="/character">character</a>

   <style>
    h1{
        color: rebeccapurple;
        text-align: center;
    }
   </style>