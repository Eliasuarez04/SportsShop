<template>
    <div class="cart">
      <h2>Carrito de Compras</h2>
  
      <div v-if="carrito.length === 0">
        <p>Tu carrito está vacío.</p>
      </div>
  
      <div v-else>
        <div v-for="item in carrito" :key="item.id" class="cart-item">
          <img :src="item.imagen" :alt="item.nombre" />
          <div class="info">
            <h4>{{ item.nombre }}</h4>
            <p>Precio: L. {{ item.precio }}</p>
            <div class="cantidad">
              <button @click="$emit('disminuir', item)">-</button>
              <span>{{ item.cantidad }}</span>
              <button @click="$emit('aumentar', item)">+</button>
            </div>
          </div>
        </div>
  
        <div class="total">
          <strong>Total a pagar: L. {{ total }}</strong>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CarritoCompras',
    props: ['carrito'],
    computed: {
      total() {
        return this.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
      }
    }
  }
  </script>
  
  <style scoped>
 .cart {
  margin-top: 3rem;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

.cart h2 {
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  transition: transform 0.2s;
}

.cart-item:hover {
  transform: translateY(-2px);
}

.cart-item img {
  width: 90px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #ddd;
}

.info {
  flex: 1;
}

.info h4 {
  margin: 0;
  font-size: 1rem;
  color: #333;
}

.info p {
  margin: 0.3rem 0;
  font-size: 0.9rem;
}

.cantidad {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 0.5rem;
}

.cantidad button {
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.cantidad button:hover {
  background-color: #0056b3;
}

.total {
  text-align: right;
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 2rem;
  color: #222;
  border-top: 2px solid #ddd;
  padding-top: 1rem;
}

  </style>
  