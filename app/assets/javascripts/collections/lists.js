TrelloClone.Collections.Lists = Backbone.Collection.extend({  
  url: '/api/lists',
  comparator: 'order',
  model: TrelloClone.Models.List
});