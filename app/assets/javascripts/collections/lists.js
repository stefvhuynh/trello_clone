TrelloClone.Collections.Lists = Backbone.Collection.extend({  
  comparator: 'order',
  model: TrelloClone.Models.List,
  
  initialize: function(models, options) {
    this.board = options.board;
  }
});