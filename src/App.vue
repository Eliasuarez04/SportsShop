<template>
    <div id="app">
      <HeaderComponent />
  
      <main>
        <ListaArticulos @agregar-al-carrito="agregarAlCarrito" />
        <CarritoCompras
          :carrito="carrito"
          @aumentar="aumentarCantidad"
          @disminuir="disminuirCantidad"
        />
      </main>
  
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import HeaderComponent from './components/Header.vue'
  import FooterComponent from './components/Footer.vue'
  import ListaArticulos from './components/Articulos.vue'
  import CarritoCompras from './components/Cart.vue'
  
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      FooterComponent,
      ListaArticulos,
      CarritoCompras
    },
    data() {
      return {
        carrito: []
      }
    },
    created() {
      const guardado = localStorage.getItem('carrito')
      if (guardado) {
        this.carrito = JSON.parse(guardado)
      }
    },
    watch: {
      carrito: {
        handler(nuevoCarrito) {
          localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))
        },
        deep: true
      }
    },
    methods: {
      agregarAlCarrito(articulo) {
        const existe = this.carrito.find(item => item.id === articulo.id)
        if (existe) {
          existe.cantidad++
        } else {
          this.carrito.push({ ...articulo, cantidad: 1 })
        }
      },
      aumentarCantidad(articulo) {
        const item = this.carrito.find(item => item.id === articulo.id)
        if (item) item.cantidad++
      },
      disminuirCantidad(articulo) {
        const item = this.carrito.find(item => item.id === articulo.id)
        if (item.cantidad > 1) {
          item.cantidad--
        } else {
          this.carrito = this.carrito.filter(i => i.id !== articulo.id)
        }
      }
    }
  }
  </script>
  
  <style>
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f6fa;
    color: #2c3e50;
    line-height: 1.6;
  }
  h1, h2 {
  color: #000000;
}
  main {
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}
  </style>
  