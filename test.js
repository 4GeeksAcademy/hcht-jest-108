 const {sum, multiply} = require('./app.js');


 test('adds 14 + 9 to equal 23', () => {
  // Dentro de la prueba invocamos a nuestra función sum() con 2 números
  let total = sum(14, 9);

  // Esperamos que la suma de esos 2 números sea 23
  expect(total).toBe(23);
 });


 test('suma de 10 + 25 es igual a 35', () => {
  let result = sum(10, 25);
  expect(result).toBe(35)
 })
