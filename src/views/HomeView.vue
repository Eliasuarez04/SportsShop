<template>
  <div class="py-10">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-extrabold text-gray-900 mb-4">Catálogo Pro</h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Equipamiento de alto rendimiento para atletas que buscan superar sus límites.
      </p>
      <div class="w-24 h-1 bg-brand-green mx-auto mt-6 rounded-full"></div>
    </div>
    
    <!-- Actualizamos el uso del componente -->
    <ArticulosList />
  </div>
</template>

<script setup>
// Actualizamos la importación
import ArticulosList from '@/components/ArticulosList.vue';
</script>