TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: '/api/lists',
  
  cards: function() {
    if (!this._cards) {
      this._cards = new TrelloClone.Collections.Cards();
    }
    
    return this._cards
  },
  
  toJSON: function() {
    return { list: _.clone(this.attributes) };
  },
  
  parse: function(response) {
    if (response.cards) {
      this.cards().set(response.cards);
      delete response.cards;
    }
    
    return response;
  }
});