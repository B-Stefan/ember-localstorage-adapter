DS.Model.extend({
    name: DS.attr('string'),
    amount: DS.attr('number'),
    order: DS.belongsTo('order')
});