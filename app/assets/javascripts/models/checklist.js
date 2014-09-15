TrelloClone.Models.Checklist = Backbone.Model.extend({
  urlRoot: '/api/checklists',
  
  items: function() {
    if (!this._items) {
      this._items = new TrelloClone.Collections.Items();
    }
    
    return this._items
  },
  
  toJSON: function(response) {
    return { checklist: _.clone(this.attributes) };
  },
  
  parse: function(response) {
    if (response.items) {
      this.items().set(response.items);
      delete response.items;
    }
    
    return response;
  }
});