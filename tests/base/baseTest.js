import { test as base } from '@playwright/test';

export const test = base.extend({
  token: async ({}, use) => {
    const fakeToken = `token-${Date.now()}`;
    console.log('🔐 API Token Generated:', fakeToken);
    await use(fakeToken);
  }
});

export { expect } from '@playwright/test';
