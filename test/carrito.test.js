const {
  productos,
  agregarACarrito,
  obtenerCarrito,
  obtenerTotal,
  reiniciarCarrito
} = require('../carrito');

describe('🛒 Funcionalidad del carrito', () => {

  beforeEach(() => {
    reiniciarCarrito();
  });

  test('Agregar un producto actualiza carrito y total', () => {
    const producto = productos[0]; // Mercedes
    agregarACarrito(producto);

    expect(obtenerCarrito().length).toBe(1);
    expect(obtenerTotal()).toBe(producto.precio);
  });

  test('Agregar múltiples productos suma correctamente el total', () => {
    agregarACarrito(productos[0]);
    agregarACarrito(productos[1]);

    const expectedTotal = productos[0].precio + productos[1].precio;
    expect(obtenerTotal()).toBe(expectedTotal);
  });
});