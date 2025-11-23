# Prueba tecnica mini-ecommerce.

Es una aplicacion web que implementa la visualizacion
de productos, proceso de compra simple que incluye selecion de cantidad, persistencia en el carrito y confirmacion de pago.

---

## Descripcion Genertal

Este proyecto es un mini-ecommerce hecho con React + TypeScript. La idea es que se puedan ver productos, filtrarlos por categoría o por nombre y agregarlos a un carrito.

Los filtros se manejan con un SearchContext, así el buscador del navbar y las categorías muestran lo mismo sin duplicar código. Los productos se cargan con un hook (useProducts) y se muestran en una grilla con tarjetas.

El carrito funciona con CartContext, que guarda los productos, permite cambiar cantidades y eliminar ítems. Además, el carrito se guarda en localStorage, así que no se pierde aunque el usuario recargue la página.

Para agregar o pagar productos se usan modales simples basados en un ModalBase.

---

## Tecnologias Usadas

-- React - TypeScript - Node
-- React Context - hooks
-- Modules.css
-- localStorage
-- Booststrap
-- tailwind

## Requerimientos

Asegúrate de tener instalado:

- **Node.js** (Ultima version) 
- **Editor de codigo** (El de su preferencia)

---

## Instalación

Clona el repositorio:

```bash
https://github.com/leisy95/mini-ecommerce.git

Acceder a la carpeta:
- cd mini-ecommerce

Instalar las dependencias:
- npm install

Correr el proyecto (ejecutar):
- npm run dev
