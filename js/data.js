/* ============================================================
   DATOS DEL MENÚ — edita SOLO este archivo para actualizar la carta.
   No necesitas tocar HTML ni CSS.

   Cómo editar:
   - "nombre" del restaurante y "tagline" están al principio.
   - Cada categoría tiene un "id" (no lo cambies), un "titulo" y una
     lista de "platos".
   - Cada plato tiene: nombre, descripcion y precio (número, sin puntos).
   - Para AGREGAR un plato, copia un bloque { ... } y pégalo dentro
     del arreglo "platos" de la categoría que quieras.
   - Para BORRAR un plato, elimina su bloque completo { ... }.
   - Para AGREGAR una categoría nueva, copia un bloque de categoría
     completo (desde { id: hasta el cierre }) y agrégalo al arreglo
     final "menuData".

   FOTOS POR PLATO (opcional, para cuando las tengas):
   Agrega una línea "imagen" dentro de cualquier plato, por ejemplo:
     {
       nombre: "Ceviche de pulpo al carbón",
       descripcion: "...",
       precio: 12500,
       imagen: "images/platos/ceviche-pulpo.jpg",
     }
   Guarda la foto en la carpeta images/platos/ con ese mismo nombre.
   Si un plato no tiene "imagen", simplemente no muestra foto — no rompe nada.
   ============================================================ */

const restaurantInfo = {
  nombre: "Huari",
  tagline: "Alta cocina bajo el cielo más despejado del mundo",
  ubicacion: "Vallenar, Valle del Huasco, Atacama",
  horario: "lun–Sab : 19:00–23:30 Dom 13:00-16:00",
  moneda: "$",
};

const menuData = [
  {
    id: "saltados",
    titulo: "Saltados y Carnes",
    platos: [
      { nombre: "Lomo saltado", precio: 11000 },
      { nombre: "Saltado de lomo, camarón y pollo", precio: 15500 },
      { nombre: "Fideos saltado de pollo", precio: 13000 },
      { nombre: "Fideos saltados de carne", precio: 12500 },
      { nombre: "Pollo saltado", precio: 10000 },
      { nombre: "Lomo a lo pobre con papas", precio: 13500 },
      { nombre: "Filete mignon a la plancha", precio: 12000 },
      { nombre: "Lomo a lo macho", precio: 12000 },
      { nombre: "Saltado de verduras y pollo con fideos", precio: 11000 },
      { nombre: "Espagueti a la huancaína con lomo saltado", precio: 13000 },
      { nombre: "Espagueti a la huancaína con filete a la plancha", precio: 13000 },
      { nombre: "Risotto a la huancaína con lomo saltado", precio: 13000 },
      { nombre: "Risotto con filete a la plancha", precio: 13000 },
    ],
  },
  {
    id: "ceviches",
    titulo: "Ceviches y Piqueos",
    platos: [
      { nombre: "Tequeños de ají de gallina", precio: 10500 },
      { nombre: "Ceviche de reineta", precio: 10500 },
      { nombre: "Causa de pollo", precio: 8000 },
      { nombre: "Chicharrón de pollo", precio: 10000 },
      { nombre: "Pescado a lo macho con arroz", precio: 12000 },
      { nombre: "Ceviche mixto (pescado, camarón y calamar)", precio: 11500 },
      { nombre: "Chicharrón de pescado", precio: 11000 },
      { nombre: "Causa acevichada", precio: 10000 },
      { nombre: "Alitas acevichadas", precio: 10000 },
      { nombre: "Papa a la huancaína", precio: 9000 },
      { nombre: "Ají de gallina", precio: 10000 },
    ],
  },
  {
    id: "chaufas",
    titulo: "Chaufas y Frituras",
    platos: [
      { nombre: "Chaufa mixto (carne, pollo y camarón)", precio: 9000 },
      { nombre: "Pollo broster", precio: 13000 },
      { nombre: "Chaufa de pollo", precio: 10000 },
      { nombre: "Monstruo arroz chaufa con pollo broster", precio: 11000 },
    ],
  },
  {
    id: "milanesas",
    titulo: "Milanesas, Ensaladas y Otros",
    platos: [
      { nombre: "Milanesa de pollo con papas fritas", precio: 10000 },
      { nombre: "Milanesa de carne con papas fritas", precio: 11000 },
      { nombre: "Ensalada césar con pollo y champiñones", precio: 10000 },
      { nombre: "Porción de papas", precio: 4000 },
    ],
  },
];
