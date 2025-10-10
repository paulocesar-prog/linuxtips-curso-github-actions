const { soma } = require('../index');

if (soma(2, 3) === 5) {
  console.log('Teste passou!');
  process.exit(0);
} else {
  console.log('Teste falhou!');
  process.exit(1);
}
