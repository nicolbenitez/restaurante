let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
;
const menuData = {
  entradas: [
    { nombre: "Bruschetta", precio: 24000, img: " Bruschetta.jpg" },
    { nombre: "Ensalada César", precio: 28000, img: "Caesar Salad.jpg" },
    { nombre: "Sopa Gourmet", precio: 20000, img: "sopa.jpg" },
    { nombre: "Carpaccio", precio: 36000, img: " CARPACCIO.jpg" },
    { nombre: "Camarones", precio: 40000, img: "CAMARONES.jpg" },
    { nombre: "Tabla de Quesos", precio: 44000, img: "quesos.jpg" }
  ],

  desayuno: [
      { nombre: "Huevos", precio: 24000, img: "huevos.jpg" },
    { nombre: "Pancakes", precio: 28000, img: "panckes.jpg" },
    { nombre: "Waffles", precio: 28000, img: "waffles.jpg" },
    { nombre: "Omelette", precio: 24000, img: "omelette.jpg" },
    { nombre: "Fruta", precio: 20000, img: "frutas.jpg" },
    { nombre: "Tostadas", precio: 16000, img: "tostadas.jpg" }
  ],

  almuerzo: [
   { nombre: "Carne Asada", precio: 56000, img: "carne asada.jpg" },
    { nombre: "Pollo", precio: 48000, img: "pollo (1).jpg" },
    { nombre: "Pasta", precio: 44000, img: "pasta.jpg.jpg" },
    { nombre: "Hamburguesa", precio: 40000, img: "hamburguesa.jpg.jpg" },
    { nombre: "Arroz", precio: 36000, img: "arroz.jpg" },
    { nombre: "Salmón", precio: 60000, img: "salmon.jpg" }
  ],
  cena: [
   { nombre: "Pizza", precio: 44000, img: "pizza.jpg" },
    { nombre: "Lasagna", precio: 48000, img: "lasagna (1).jpg" },
    { nombre: "Sushi", precio: 52000, img: "sushi.jpg" },
    { nombre: "Tacos", precio: 36000, img: "tacos.jpg" },
    { nombre: "Ramen", precio: 40000, img: "ramen.jpg" },
    { nombre: "Ensalada", precio: 32000, img: "ensalada.jpg" }
  ],
  bebidas: [
     { nombre: "Jugo", precio: 20000, img: "te (3).jpg" },
    { nombre: "Café", precio: 16000, img: "te (5).jpg" },
    { nombre: "Chocolate", precio: 20000, img: "te (6).jpg" },
    { nombre: "Té", precio: 12000, img: "te (1).jpg" },
    { nombre: "Gaseosa", precio: 12000, img: "te (2).jpg" },
    { nombre: "Agua", precio: 8000, img: "te (4).jpg" }
  ],
  vinos: [
      { nombre: "Vino Tinto", precio: 72000, img: "ele (2).jpg" },
    { nombre: "Vino Blanco", precio: 64000, img: "ele (3).jpg" },
    { nombre: "Rosado", precio: 60000, img: "ele (4).jpg" },
    { nombre: "Champagne", precio: 100000, img: "ele (5).jpg" },
    { nombre: "Espumoso", precio: 80000, img: "ele (6).jpg" },
    { nombre: "Premium", precio: 120000, img: "ele (1).jpg" }
  ],

  helados: [
    { nombre: "Chocolate", precio: 16000, img: "helado (2).jpg" },
    { nombre: "Vainilla", precio: 16000, img: "helado (5).jpg" },
    { nombre: "Fresa", precio: 16000, img: "helado (3).jpg" },
    { nombre: "Oreo", precio: 20000, img: "helado (6).jpg" },
    { nombre: "Mango", precio: 16000, img: "helado (4).jpg" },
    { nombre: "Mixto", precio: 24000, img: "helado (1).jpg" }
  ],
  postres: [
    { nombre: "Tiramisú", precio: 32000, img: "Yummy Tiramisu 😋.jpg" },
    { nombre: "Cheesecake", precio: 28000, img: "Caramel Turtle Cheesecake.jpg" },
    { nombre: "Brownie", precio: 24000, img: "Brownie + Ice Cream = Bliss.jpg" },
    { nombre: "Pastel Chocolate", precio: 28000, img: "descargar (1).jpg" },
    { nombre: "Flan", precio: 20000, img: "descargar (2).jpg" },
    { nombre: "Cupcake", precio: 20000, img: "descargar (3).jpg" }
  ]
};

function entrar(){
  document.getElementById("bienvenida").style.display="none";
  document.getElementById("nav").classList.remove("oculto");
  mostrarSeccion("inicio");
}

function mostrarSeccion(id){
  document.querySelectorAll(".seccion").forEach(s=>s.classList.add("oculto"));
  document.getElementById(id).classList.remove("oculto");
}

function mostrarCategoria(cat){
  let cont=document.getElementById("platos");
  cont.innerHTML="";
  menuData[cat].forEach(p=>{
    cont.innerHTML+=`
    <div class="plato">
      <img src="${p.img}">
      <h3>${p.nombre}</h3>
      <p>$${p.precio}</p>
      <button onclick="agregar('${p.nombre}',${p.precio})">Agregar</button>
    </div>`;
  });
}

function agregar(nombre,precio){
  carrito.push({nombre,precio});
  localStorage.setItem("carrito",JSON.stringify(carrito));
  actualizarContador();
}

function actualizarContador(){
  document.getElementById("contador").innerText=carrito.length;
}

function verFactura(){
  let total=0;
  let lista=document.getElementById("lista");
  lista.innerHTML="";
  carrito.forEach((p,i)=>{
    lista.innerHTML+=`<li>${p.nombre} - $${p.precio} <button onclick="eliminar(${i})">❌</button></li>`;
    total+=p.precio;
  });
  document.getElementById("total").innerText="Total: $"+total;
  document.getElementById("factura").classList.remove("oculto");
}

function eliminar(i){
  carrito.splice(i,1);
  localStorage.setItem("carrito",JSON.stringify(carrito));
  actualizarContador();
  verFactura();
}

function cerrarFactura(){
  document.getElementById("factura").classList.add("oculto");
}

function pagar(){
  alert("Pago exitoso 💳");
  carrito=[];
  localStorage.removeItem("carrito");
  actualizarContador();
  cerrarFactura();
}

function reservar(){
  alert("Reserva confirmada 🍽️");
}

actualizarContador();
