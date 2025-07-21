// jest.config.js
module.exports = {
  // Diz ao Jest para usar o ts-jest para transpilar arquivos TypeScript
  preset: 'ts-jest',

  // Define o ambiente de teste como Node.js
  testEnvironment: 'node',

  // Diz ao Jest para procurar os testes APENAS na pasta `src`
  // e que os arquivos devem terminar com .test.ts ou .spec.ts
  testMatch: ['**/src/**/*.test.ts', '**/src/**/*.spec.ts'],

  // Ignora a pasta `dist` durante a busca por testes
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  // Limpa os mocks entre os testes para garantir o isolamento
  clearMocks: true,
};