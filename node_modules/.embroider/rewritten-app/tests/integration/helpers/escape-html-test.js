import { module, test } from 'qunit';
import { setupRenderingTest } from 'tech-talk/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | escape-html', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{escape-html this.inputValue}}`);

    assert.dom().hasText('1234');
  });
});
