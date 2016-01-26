DS.Model.extend({
    name: DS.attr('string'),
    b: DS.attr('boolean'),
    items: DS.hasMany('item')
});