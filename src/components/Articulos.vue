<template>
    <div class="articulos-list">
      <div v-for="articulo in articulos" :key="articulo.id" class="articulo-card">
        <img :src="articulo.imagen" :alt="articulo.nombre" />
        <h3>{{ articulo.nombre }}</h3>
        <p><strong>Marca:</strong> {{ articulo.marca }}</p>
        <p><strong>Precio:</strong> L. {{ articulo.precio }}</p>
        <p class="desc">{{ articulo.descripcion }}</p>
        <button @click="$emit('agregar-al-carrito', articulo)">Agregar al carrito</button>
      </div>
    </div>
  </template>
  
  <script>
  import { articulos } from '@/data/Articulos.js'
  
  export default {
    name: 'ListaArticulos',
    data() {
      return {
        articulos
      }
    }
  }
  </script>
  
  
  <style scoped>
  .articulos-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
    margin-bottom: 2rem;
  }
  
  .articulo-card {
    background-color: #ffffff;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;
  perspective: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  }

  .articulo-card h3 {
  margin-top: 0.8rem;
}
  
  .articulo-card:hover {
    transform: rotateY(5deg) rotateX(5deg) scale(1.03);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }

  .articulo-card:hover img {
  transform: scale(1.05);
}
  
  .articulo-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }
  
  .desc {
    font-size: 0.85rem;
    color: #555;
    margin: 0.5rem 0;
  }
  
  button {
    margin-top: 0.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    cursor: pointer;
    border-radius: 6px;
    transition: transform 0.2s ease, background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  
  </style>
  