import { module, test } from 'qunit';
import { visit, currentURL, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupQunit as setupPolly } from '@pollyjs/core';

module('Acceptance | Projects Test', function(hooks) {
  setupApplicationTest(hooks);
  setupPolly(hooks);

  test('List of Projects', async function(assert) {
    await visit('/projects');
    assert.equal(currentURL(), '/projects');
    assert.equal(find('h1').textContent, 'All the Projects!');
  });
});