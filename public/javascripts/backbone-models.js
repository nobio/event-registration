// defining Backbone models
EventRegistration = Backbone.Model.extend({
    urlRoot: '/api/registration',
    defaults: {
        entry_date: new Date(),
        last_changed: new Date()
    },
    initialize: function() {
        //alert(this.model);
    }
});
