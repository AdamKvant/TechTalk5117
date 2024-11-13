import { module, test } from 'qunit';
import { setupTest } from 'tech-talk/tests/helpers';

module('Unit | Route | demo-time', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:demo-time');
    assert.ok(route);
  });
});