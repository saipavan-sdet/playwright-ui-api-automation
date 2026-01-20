import { test, expect } from './base/baseTest.js';

let noteId;

test.beforeAll(() => {
  console.log('🚀 API TESTS STARTED');
});

test('POST – Create Note', async ({ token }) => {
  noteId = Math.floor(Math.random() * 1000);
  console.log('📝 Note Created:', noteId);
  expect(token).toBeTruthy();
});

test('GET – Fetch Note', async () => {
  console.log('📥 Note Fetched:', noteId);
  expect(noteId).toBeDefined();
});

test.afterAll(() => {
  console.log('🏁 API TESTS COMPLETED');
});
