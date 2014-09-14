TrelloClone.Models.Item = Backbone.Model.extend({
  urlRoot: '/api/items',
  
  toJSON: function() {
    return { item: _.clone(this.attributes) };
  },
});