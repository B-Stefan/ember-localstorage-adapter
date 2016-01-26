DS.Model.extend({
    name: DS.attr('string'),
    list: DS.belongsTo('list')
});