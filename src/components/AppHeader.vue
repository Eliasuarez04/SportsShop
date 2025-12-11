<template>
  <header class="bg-gradient-to-r from-brand-red to-brand-green shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo / Título -->
        <router-link to="/" class="flex items-center gap-3 group text-decoration-none">
          <div class="bg-white p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform">
            <span class="text-2xl">⚽</span>
          </div>
          <h1 class="text-white text-2xl font-bold tracking-wide drop-shadow-md">
            Sports Shop
          </h1>
        </router-link>

        <!-- Navegación Carrito -->
        <router-link to="/cart" class="relative group">
          <div class="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 border border-white/20">
            <span class="text-xl">🛒</span>
            <span class="font-medium hidden sm:inline">Tu Carrito</span>
            
            <!-- Badge contador -->
            <span v-if="cartStore.cantidadTotalArticulos > 0" 
                  class="absolute -top-2 -right-2 bg-yellow-400 text-red-700 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-lg border-2 border-brand-green animate-bounce">
              {{ cartStore.cantidadTotalArticulos }}
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';
const cartStore = useCartStore();
</script>