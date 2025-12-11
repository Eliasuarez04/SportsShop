<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Usamos el nuevo nombre del componente -->
    <AppHeader />
    
    <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Usamos el nuevo nombre del componente -->
    <AppFooter />
  </div>
</template>

<script setup>
// Actualizamos las importaciones
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>