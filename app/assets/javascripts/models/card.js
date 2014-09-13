TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: '/api/cards',
  
  checklists: function() {
    if (!this._checklists) {
      this._checklists = new TrelloClone.Collections.Checklist();
    }
    
    return this._checklists;
  },
  
  toJSON: function() {
    return { card: _.clone(this.attributes) };
  },
  
  parse: function(response) {
    if (response.checklists) {
      this.checklists().set(response.checklists);
      delete response.checklists;
    }
    
    return response;
  }
});