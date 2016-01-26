DS.Model.extend({
    name: DS.attr('string'),
    b: DS.attr('boolean'),
    hours: DS.hasMany('hour')
});