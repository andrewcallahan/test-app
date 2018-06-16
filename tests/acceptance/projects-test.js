import { module, test } from 'qunit';
import { setupQunit as setupPolly } from '@pollyjs/core';

module('Acceptance | First Test', function(hooks) {
  setupPolly(hooks, {/* default configuration options */});

  // test('First Test', async function(assert) {
  //   this.polly.configure({ recordIfMissing: false });

  //   // Put test here
  // });
});