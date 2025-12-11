import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

export const useCartStore = defineStore('cart', () => {
  // 1. Estado (State) - Intenta leer del localStorage al iniciar
  const carrito = ref(JSON.parse(localStorage.getItem('carrito')) || []);

  // 2. Getters (Computed)
  const totalPagar = computed(() => {
    return carrito.value.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  });

  const cantidadTotalArticulos = computed(() => {
    return carrito.value.reduce((acc, item) => acc + item.cantidad, 0);
  });

  // 3. Acciones (Methods)
  function agregarAlCarrito(articulo) {
    const itemExistente = carrito.value.find(item => item.id === articulo.id);
    if (itemExistente) {
      itemExistente.cantidad++;
    } else {
      // Usamos spread operator para crear una copia y añadir la propiedad cantidad
      carrito.value.push({ ...articulo, cantidad: 1 });
    }
  }

  function aumentarCantidad(id) {
    const item = carrito.value.find(i => i.id === id);
    if (item) item.cantidad++;
  }

  function disminuirCantidad(id) {
    const item = carrito.value.find(i => i.id === id);
    if (item) {
      if (item.cantidad > 1) {
        item.cantidad--;
      } else {
        eliminarDelCarrito(id);
      }
    }
  }

  function eliminarDelCarrito(id) {
    carrito.value = carrito.value.filter(item => item.id !== id);
  }

  function vaciarCarrito() {
    carrito.value = [];
  }

  // 4. Persistencia (Watch)
  watch(carrito, (state) => {
    localStorage.setItem('carrito', JSON.stringify(state));
  }, { deep: true });

  return { 
    carrito, 
    totalPagar, 
    cantidadTotalArticulos, 
    agregarAlCarrito, 
    aumentarCantidad, 
    disminuirCantidad, 
    eliminarDelCarrito,
    vaciarCarrito
  };
});