import { module, test } from 'qunit';
import { setupRenderingTest } from 'tech-talk/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | titleslide', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Titleslide />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Titleslide>
        template block text
      </Titleslide>
    `);

    assert.dom().hasText('template block text');
  });
});
