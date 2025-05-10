<template>
    <header class="header">
      <div class="contenido">
        <h1>⚽ Sports Shop - Todo para el Fútbol</h1>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent'
  }
  </script>
  
  <style scoped>
  .header {
    background: linear-gradient(135deg, #f30909, #21c991);
    padding: 2rem 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .contenido {
    max-width: 1200px;
    margin: auto;
    text-align: center;
    color: #ffffff;
  }
  
  h1 {
    margin: 0;
    font-size: 2rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }
  </style>
  