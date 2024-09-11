import { defineConfig } from 'cypress';

export default defineConfig({
  defaultCommandTimeout: 450, // tempo que vai aguardar cada comando do cypress
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
