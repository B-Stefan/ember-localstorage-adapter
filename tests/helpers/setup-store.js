import Ember from "ember"
import DS from "ember-data"
import startApp from "./start-app"

var logLS = function() {
    console.log(localStorage.getItem('DS.LSAdapter'));
}

var cl = function(msg) { console.log(msg); }
var ct = function(msg) { console.table(msg); }

export default setupStore = function(options) {
    var env = {};
    options = options || {};

    var container = env.container = startApp();

    var adapter = env.adapter = (options.adapter || DS.Adapter);
    delete options.adapter;

    for (var prop in options) {
        container.register('model:' + prop, options[prop]);
    }

    container.register('store:main', DS.Store.extend({
        adapter: adapter
    }));

    container.register('serializer:-default', DS.LSSerializer);
    container.register('serializer:-rest', DS.RESTSerializer);
    container.register('adapter:-rest', DS.RESTAdapter);

    container.injection('serializer', 'store', 'store:main');

    env.serializer = container.lookup('serializer:-default');
    env.restSerializer = container.lookup('serializer:-rest');
    env.store = container.lookup('store:main');
    env.adapter = env.store.get('defaultAdapter');

    return env;
};

var transforms = {
    'boolean': DS.BooleanTransform.create(),
    'date': DS.DateTransform.create(),
    'number': DS.NumberTransform.create(),
    'string': DS.StringTransform.create()
};

/*
// Prevent all tests involving serialization to require a container
DS.JSONSerializer.reopen({
    transformFor: function(attributeType) {
        return this._super(attributeType, true) || transforms[attributeType];
    }
});*/