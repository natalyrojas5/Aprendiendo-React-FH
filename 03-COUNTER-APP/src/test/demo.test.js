describe('Pruebas en el archivo demo.test', () => {
  test('debe ser iguales los strings', () => {
    // 1. Inicialización
    const mensaje = 'Hola Mundo';

    // 2. Estimulo
    const mensaje2 = `Hola Mundo`;

    // Observa el comportamiento - Que ambos tengan el mismo contenido
    expect(mensaje).toBe(mensaje2);
  });
});
