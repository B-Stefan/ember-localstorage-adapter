import { moduleFor, test } from 'ember-qunit';
import startApp from "./../../helpers/start-app"
import FIXTURES from "./../../helpers/fixtures"
import Ember from "ember"
import DS from "ember-data"
import setupStore from "./../../helpers/setup-store"
let App = {};


/***
 *
 * Firs try to implement a test
 *
 */

moduleFor('adapter:local-storage', 'Unit | Adapter | local storage', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']

  setup: function() {
    /**
     * Some setup code to fill the store with the fixture data
     */
  }
});



// Replace this with your real tests.
test('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
});



test('find with id', function() {
  expect(3);

  stop();
  store.find('list', 'l1').then(function(list) {
    equal(Ember.get(list, 'id'),   'l1',  'id is loaded correctly');
    equal(Ember.get(list, 'name'), 'one', 'name is loaded correctly');
    equal(Ember.get(list, 'b'),    true,  'b is loaded correctly');
    start();
  });
});

