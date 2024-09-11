import { defineConfig } from 'cypress';

export default defineConfig({
  defaultCommandTimeout: 450, // tempo que vai aguardar cada comando do cypress
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        seedDatabase(fileName) {
          console.log('fileName', fileName);
          //run nodejs code
          return fileName;
        },
      });
    },
  },
});
