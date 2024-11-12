import { module, test } from 'qunit';
import { setupRenderingTest } from 'tech-talk/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | heading', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Heading />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Heading>
        template block text
      </Heading>
    `);

    assert.dom().hasText('template block text');
  });
});
