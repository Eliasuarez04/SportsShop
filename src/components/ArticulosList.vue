<template>
  <div class="container mx-auto px-4">
    
    <!-- 1. BARRA DE BÚSQUEDA -->
    <div class="mb-8 max-w-xl mx-auto">
      <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border border-gray-200">
        <div class="grid place-items-center h-full w-12 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <input
          v-model="busqueda"
          class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
          type="text"
          placeholder="Buscar por nombre o marca (ej: Nike, Balón...)"
        />
      </div>
    </div>

    <!-- 2. MENSAJE SI NO HAY RESULTADOS -->
    <div v-if="productosFiltrados.length === 0" class="text-center py-12">
      <div class="text-6xl mb-4">🔍</div>
      <h3 class="text-xl font-bold text-gray-600">No encontramos resultados</h3>
      <p class="text-gray-500">Intenta con otra palabra clave para "{{ busqueda }}"</p>
    </div>

    <!-- 3. GRID DE PRODUCTOS FILTRADOS -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <div 
        v-for="articulo in productosFiltrados" 
        :key="articulo.id" 
        class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col"
      >
        <!-- Imagen -->
        <div class="relative h-64 overflow-hidden bg-gray-50 p-4 flex items-center justify-center">
          <img 
            :src="articulo.imagen" 
            :alt="articulo.nombre" 
            class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
          />
          <div class="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-600 shadow-sm border border-gray-100">
            {{ articulo.marca }}
          </div>
        </div>

        <!-- Contenido -->
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="text-lg font-bold text-gray-800 leading-tight mb-2 group-hover:text-brand-red transition-colors">
            {{ articulo.nombre }}
          </h3>
          <p class="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
            {{ articulo.descripcion }}
          </p>
          
          <div class="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
            <div class="flex flex-col">
              <span class="text-xs text-gray-400 font-medium uppercase">Precio</span>
              <span class="text-xl font-extrabold text-gray-900">L. {{ articulo.precio }}</span>
            </div>
            
            <button 
              @click="agregarConNotificacion(articulo)"
              class="bg-gray-900 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-brand-red active:scale-95 transition-all shadow-lg shadow-gray-200 flex items-center gap-2"
            >
              <span>Agregar</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { articulos } from '@/data/Articulos.js';
import { useCartStore } from '@/stores/cart';
import { useToast } from "vue-toastification"; // Importamos el Toast (Ver paso 2)

const cartStore = useCartStore();
const toast = useToast(); // Instancia del Toast
const busqueda = ref(''); // Variable reactiva para el input

// Lógica de Filtrado
const productosFiltrados = computed(() => {
  if (!busqueda.value) return articulos; // Si no hay búsqueda, devuelve todos
  
  const termino = busqueda.value.toLowerCase();
  
  return articulos.filter(articulo => 
    articulo.nombre.toLowerCase().includes(termino) ||
    articulo.marca.toLowerCase().includes(termino)
  );
});

// Función que agrega al carrito y muestra la notificación
const agregarConNotificacion = (articulo) => {
  cartStore.agregarAlCarrito(articulo);
  
  // Disparar el Toast
  toast.success(`¡${articulo.nombre} agregado al carrito!`, {
    timeout: 2000
  });
};
</script>