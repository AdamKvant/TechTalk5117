import { module, test } from 'qunit';
import { setupTest } from 'tech-talk/tests/helpers';

module('Unit | Route | tailwind-about', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:tailwind-about');
    assert.ok(route);
  });
});
