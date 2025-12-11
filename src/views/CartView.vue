<template>
  <div class="py-10">
    <div class="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      
      <!-- Header del Carrito -->
      <div class="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50">
        <h2 class="text-2xl font-bold text-gray-800 flex items-center gap-3">
          🛒 Tu Carrito
          <span class="text-sm font-normal text-gray-500 bg-white px-3 py-1 rounded-full border">
            {{ cartStore.cantidadTotalArticulos }} items
          </span>
        </h2>
        <router-link to="/" class="text-brand-red font-medium hover:underline flex items-center gap-1">
          ← Volver al catálogo
        </router-link>
      </div>

      <!-- Estado Vacío -->
      <div v-if="cartStore.carrito.length === 0" class="p-16 text-center">
        <div class="text-6xl mb-4">🏀</div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">Tu carrito está vacío</h3>
        <p class="text-gray-500 mb-8">Parece que aún no has agregado equipamiento.</p>
        <router-link to="/" class="bg-brand-green text-white px-8 py-3 rounded-xl font-bold hover:bg-green-600 transition shadow-lg shadow-green-200">
          Explorar Tienda
        </router-link>
      </div>

      <!-- Lista de Items -->
      <div v-else>
        <div class="divide-y divide-gray-100">
          <div v-for="item in cartStore.carrito" :key="item.id" class="p-6 flex flex-col sm:flex-row items-center gap-6 hover:bg-gray-50 transition-colors">
            
            <img :src="item.imagen" :alt="item.nombre" class="w-24 h-24 object-cover rounded-lg border bg-white p-2" />
            
            <div class="flex-1 text-center sm:text-left">
              <h4 class="font-bold text-lg text-gray-900">{{ item.nombre }}</h4>
              <p class="text-gray-500 text-sm">{{ item.marca }}</p>
              <p class="text-brand-green font-bold mt-1">L. {{ item.precio }} c/u</p>
            </div>

            <!-- Controles de Cantidad -->
            <div class="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
              <button @click="cartStore.disminuirCantidad(item.id)" class="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 font-bold transition">-</button>
              <span class="w-8 text-center font-bold text-gray-800">{{ item.cantidad }}</span>
              <button @click="cartStore.aumentarCantidad(item.id)" class="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-brand-green font-bold transition">+</button>
            </div>

            <div class="text-right min-w-[100px]">
              <p class="text-sm text-gray-400">Total Item</p>
              <p class="font-bold text-lg text-gray-900">L. {{ item.precio * item.cantidad }}</p>
            </div>

            <button @click="cartStore.eliminarDelCarrito(item.id)" class="text-gray-400 hover:text-red-500 transition p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Footer del Carrito (Totales) -->
        <div class="bg-gray-50 p-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
          <button @click="cartStore.vaciarCarrito" class="text-red-500 text-sm font-medium hover:underline hover:text-red-700 transition">
            Vaciar Carrito
          </button>
          
          <div class="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <div class="text-center sm:text-right">
              <span class="block text-gray-500 text-sm">Total a Pagar</span>
              <span class="block text-3xl font-black text-gray-900">L. {{ cartStore.totalPagar }}</span>
            </div>
            
            <button class="w-full sm:w-auto bg-gray-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition transform hover:-translate-y-1 shadow-xl">
              Proceder al Pago
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';
const cartStore = useCartStore();
</script>