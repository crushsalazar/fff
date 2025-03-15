import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  idtalla: number;
  idcategoria: number;
  idtipo: number;
  estado: string;
  precio: number;
  descuento: number;
  idcolor: number;
  cantidad: number;
  urlimagen1: string;
  urlimagen2: string;
  selectedQuantity?: number;
}

interface Talla {
  id: number;
  nombre: string;
}

interface Categoria {
  id: number;
  nombre: string;
}

interface Tipo {
  id: number;
  nombre: string;
  foto:string;
}

interface Color {
  id: number;
  nombre: string;
}

interface CartItem {
  id: number;
  nombre: string;
  precio: number; // precio con descuento aplicado
  cantidad: number;
  stock: number;
  descuento: number;
}

@Component({
  selector: 'app-ropa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent implements OnInit {
  // Datos de productos
  showMenu: boolean = false;
  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
  productos: Producto[] = [
    {
      id: 1,
      nombre: "Camiseta básica",
      descripcion: "Camiseta de algodón 100% color blanco",
      idtalla: 1,
      idcategoria: 2,
      idtipo: 3,
      estado: "Disponible",
      precio: 15.99,
      descuento: 10,
      idcolor: 1,
      cantidad: 22,
      urlimagen1: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png",
      urlimagen2: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png"
    },
    {
      id: 2,
      nombre: "Jeans ajustados",
      descripcion: "Jeans slim fit color azul oscuro",
      idtalla: 2,
      idcategoria: 2,
      idtipo: 3,
      estado: "Agotado",
      precio: 45.50,
      descuento: 20,
      idcolor: 2,
      cantidad: 50,
      urlimagen1: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png",
      urlimagen2: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png"
    },{
      id: 3,
      nombre: "Camiseta básica",
      descripcion: "Camiseta de algodón 100% color blanco",
      idtalla: 1,
      idcategoria: 2,
      idtipo: 3,
      estado: "Disponible",
      precio: 15.99,
      descuento: 10,
      idcolor: 1,
      cantidad: 22,
      urlimagen1: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png",
      urlimagen2: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png"
    },
    {
      id: 4,
      nombre: "Jeans ajustados",
      descripcion: "Jeans slim fit color azul oscuro",
      idtalla: 2,
      idcategoria: 2,
      idtipo: 3,
      estado: "Agotado",
      precio: 45.50,
      descuento: 20,
      idcolor: 2,
      cantidad: 50,
      urlimagen1: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png",
      urlimagen2: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png"
    },
    
    // 20 nuevos registros
    {
      id: 5,
      nombre: "Vestido midi floral",
      descripcion: "Vestido hasta la rodilla con estampado primaveral",
      idtalla: 3,
      idcategoria: 2,
      idtipo: 3,
      estado: "Disponible",
      precio: 39.99,
      descuento: 15,
      idcolor: 5,
      cantidad: 18,
      urlimagen1: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png",
      urlimagen2: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png"
    },
    {
      id: 6,
      nombre: "Chaqueta bomber",
      descripcion: "Chaqueta estilo bomber en cuero sintético",
      idtalla: 4,
      idcategoria: 2,
      idtipo: 3,
      estado: "En oferta",
      precio: 89.99,
      descuento: 30,
      idcolor: 3,
      cantidad: 12,
      urlimagen1: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png",
      urlimagen2: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png"
    },
    {
      id: 7,
      nombre: "Zapatos deportivos",
      descripcion: "Zapatillas running con amortiguación",
      idtalla: 5,
      idcategoria: 2,
      idtipo: 3,
      estado: "Disponible",
      precio: 65.00,
      descuento: 0,
      idcolor: 4,
      cantidad: 25,
      urlimagen1: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png",
      urlimagen2: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png"
    },
    {
      id: 8,
      nombre: "Blusa seda",
      descripcion: "Blusa de seda natural con cuello barco",
      idtalla: 2,
      idcategoria: 2,
      idtipo: 3,
      estado: "Últimas unidades",
      precio: 55.00,
      descuento: 10,
      idcolor: 6,
      cantidad: 3,
      urlimagen1: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png",
      urlimagen2: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png"
    },
    {
      id: 9,
      nombre: "Short denim",
      descripcion: "Short jeans rotos con diseño destroyed",
      idtalla: 1,
      idcategoria: 2,
      idtipo: 3,
      estado: "Disponible",
      precio: 29.99,
      descuento: 0,
      idcolor: 2,
      cantidad: 30,
      urlimagen1: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png",
      urlimagen2: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png"
    },
    {
      id: 10,
      nombre: "Traje formal",
      descripcion: "Traje de dos piezas para ocasiones especiales",
      idtalla: 4,
      idcategoria: 2,
      idtipo: 3,
      estado: "Disponible",
      precio: 129.99,
      descuento: 25,
      idcolor: 3,
      cantidad: 8,
      urlimagen1: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png",
      urlimagen2: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png"
    },
    {
      id: 11,
      nombre: "Falda plisada",
      descripcion: "Falda midi con pliegues en tejido liviano",
      idtalla: 3,
      idcategoria: 2,
      idtipo: 3,
      estado: "Agotado",
      precio: 34.50,
      descuento: 0,
      idcolor: 7,
      cantidad: 0,
      urlimagen1: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png",
      urlimagen2: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png"
    },
    {
      id: 12,
      nombre: "Gorra trucker",
      descripcion: "Gorra estilo trucker con malla trasera",
      idtalla: 6,
      idcategoria: 2,
      idtipo: 3,
      estado: "Disponible",
      precio: 19.99,
      descuento: 5,
      idcolor: 8,
      cantidad: 45,
      urlimagen1: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png",
      urlimagen2: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png"
    },
    {
      id: 13,
      nombre: "Gorra trucker",
      descripcion: "Gorra estilo trucker con malla trasera",
      idtalla: 6,
      idcategoria: 2,
      idtipo: 3,
      estado: "Disponible",
      precio: 19.99,
      descuento: 5,
      idcolor: 8,
      cantidad: 45,
      urlimagen1: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png",
      urlimagen2: "https://i.postimg.cc/8PM7LhfJ/pantalonx.png"
    }
  ];

  tallas: Talla[] = [
    { id: 1, nombre: "M" },
    { id: 2, nombre: "L" },
    { id: 3, nombre: "S" },
    { id: 4, nombre: "XL" },
    { id: 5, nombre: "38" },
    { id: 6, nombre: "Única" }
  ];

  categorias: Categoria[] = [
    { id: 1, nombre: "Camisetas" },
    { id: 2, nombre: "Pantalones" },
    { id: 3, nombre: "Vestidos" },
    { id: 4, nombre: "Chaquetas" },
    { id: 5, nombre: "Calzado" },
    { id: 6, nombre: "Trajes" },
    { id: 7, nombre: "Faldas" },
    { id: 8, nombre: "Accesorios" }
  ];

  tipos: Tipo[] = [
    { id: 1, nombre: "Hombre" ,foto:"https://i.postimg.cc/xTfYPNYc/HOMBRE.jpg"},
    { id: 2, nombre: "Mujer" ,foto:"https://i.postimg.cc/2ywYDrdk/MUJER.jpg"},
    { id: 3, nombre: "Niño" ,foto:"https://i.postimg.cc/ryCMWCBB/NI-O.jpg"},
    { id: 4, nombre: "Niña",foto:"https://i.postimg.cc/hvgn6fdZ/NI-A.jpg" },
    { id: 5, nombre: "Unisex",foto:"https://i.postimg.cc/W30j5MhJ/UNISEX.webp"}
  ];

  colores: Color[] = [
    { id: 1, nombre: "Blanco" },
    { id: 2, nombre: "Azul" },
    { id: 3, nombre: "Negro" },
    { id: 4, nombre: "Rojo" },
    { id: 5, nombre: "Multicolor" },
    { id: 6, nombre: "Rosa" },
    { id: 7, nombre: "Beige" },
    { id: 8, nombre: "Gris" }
  ];

  // Variables de paginación
  itemsPerPage: number = 12;
  currentPage: number = 1;
  totalPages: number = 0;


  // Filtros
  filtroTipo: number | null = null;
  filtroCategoria: number | null = null;
  filtroTalla: number | null = null;
  filtroColor: number | null = null;

  // Carrito de compras
  carrito: CartItem[] = [];

  // Notificación temporal
  notificationMessage: string = '';

  // Modal del producto
  showProductModal: boolean = false;
  selectedProduct: Producto | null = null;

  // Modal del carrito
  showCartModal: boolean = false;

  ngOnInit(): void {
    // Inicializa la cantidad seleccionada de cada producto a 1
    this.productos.forEach(prod => {
      prod.selectedQuantity = 1;
    });
    this.updatePagination();
  }

  // Getter para obtener productos filtrados
  get filteredProductos(): Producto[] {
    return this.productos.filter(prod => {
      if (this.filtroTipo !== null && prod.idtipo !== this.filtroTipo) return false;
      if (this.filtroCategoria !== null && prod.idcategoria !== this.filtroCategoria) return false;
      if (this.filtroTalla !== null && prod.idtalla !== this.filtroTalla) return false;
      if (this.filtroColor !== null && prod.idcolor !== this.filtroColor) return false;
      return true;
    });
  }

  // Getter para el total de artículos en el carrito
  get cartItemCount(): number {
    return this.carrito.reduce((acc, item) => acc + item.cantidad, 0);
  }

  // Getter para el total del carrito
  get cartTotal(): number {
    return this.carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  }

  // Getter para el mensaje de WhatsApp (URL-encoded)
  get whatsappMessage(): string {
    let mensaje = "Pedido:\n";
    this.carrito.forEach(item => {
      mensaje += `${item.nombre} (Desc: ${item.descuento}%) x ${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}\n`;
    });
    mensaje += `\nTotal: $${this.cartTotal.toFixed(2)}`;
    return encodeURIComponent(mensaje);
  }

  // Mostrar notificación temporal
  showNotification(message: string): void {
    this.notificationMessage = message;
    setTimeout(() => {
      this.notificationMessage = '';
    }, 3000);
  }

  // Agregar producto al carrito
  addToCart(prod: Producto, cantidad: number): void {
    const index = this.carrito.findIndex(item => item.id === prod.id);
    if (index !== -1) {
      const nuevaCantidad = this.carrito[index].cantidad + cantidad;
      this.carrito[index].cantidad = nuevaCantidad > prod.cantidad ? prod.cantidad : nuevaCantidad;
    } else {
      const precioConDescuento = prod.precio - (prod.precio * prod.descuento / 100);
      this.carrito.push({
        id: prod.id,
        nombre: prod.nombre,
        precio: precioConDescuento,
        cantidad: cantidad,
        stock: prod.cantidad,
        descuento: prod.descuento
      });
    }
    this.showNotification("Producto agregado correctamente");
  }

  // Eliminar producto del carrito
  removeFromCart(productId: number): void {
    this.carrito = this.carrito.filter(item => item.id !== productId);
  }

  // Métodos para cambiar filtros
  setTipo(tipoId: number): void {
    this.filtroTipo = tipoId;
  }
  setCategoria(categoriaId: number | null): void {
    this.filtroCategoria = categoriaId;
  }
  setTalla(tallaId: number | null): void {
    this.filtroTalla = tallaId;
  }
  setColor(colorId: number | null): void {
    this.filtroColor = colorId;
  }

  // Eventos de cambio en los selects
  onCategoriaChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.setCategoria(value ? +value : null);
    this.currentPage = 1;
  this.updatePagination();

  }
  onTallaChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.setTalla(value ? +value : null);
    this.currentPage = 1;
  this.updatePagination();

  }
  onColorChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.setColor(value ? +value : null);
    this.currentPage = 1;
  this.updatePagination();

  }

  // Incrementar y decrementar cantidad seleccionada en un producto
  increaseQuantity(prod: Producto): void {
    if (prod.selectedQuantity! < prod.cantidad) {
      prod.selectedQuantity!++;
    }
  }
  decreaseQuantity(prod: Producto): void {
    if (prod.selectedQuantity! > 1) {
      prod.selectedQuantity!--;
    }
  }

  // Abrir y cerrar modal del producto
  abrirModalProducto(prod: Producto): void {
    this.selectedProduct = prod;
    this.showProductModal = true;
  }
  closeProductModal(): void {
    this.showProductModal = false;
  }

  // Abrir y cerrar modal del carrito
  openCartModal(): void {
    this.showCartModal = true;
  }
  closeCartModal(): void {
    this.showCartModal = false;
  }



  // Métodos de paginación

updatePagination(): void {
  // Calcula el total de páginas en función del número de productos filtrados
  this.totalPages = Math.max(Math.ceil(this.filteredProductos.length / this.itemsPerPage), 1);
  
  // Si la página actual supera el total (por ejemplo, al aplicar filtros) se reajusta
  if (this.currentPage > this.totalPages) {
    this.currentPage = this.totalPages;
  }
  
  // En caso de que no haya productos, aseguramos que la página actual sea 1
  if (this.totalPages === 0) {
    this.currentPage = 1;
  }
}

prevPage(): void {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}

nextPage(): void {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
  }
}

}
