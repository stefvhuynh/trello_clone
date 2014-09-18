TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: '/api/lists',
  
  initialize: function() {
    this.elId = 'l' + this.id;
  },
  
  cards: function() {
    if (!this._cards) {
      this._cards = new TrelloClone.Collections.Cards();
    }
    
    return this._cards
  },
  
  board: function() {
    return TrelloClone.currentUser.boards().get(this.get('board_id'));
  },
  
  // siblingLists: function() {
  //   return this.board().lists();
  // },
  
  toJSON: function() {
    return { list: _.clone(this.attributes) };
  },
  
  parse: function(response) {
    if (response.cards) {
      this.cards().set(response.cards, { parse: true });
      delete response.cards;
    }
    
    return response;
  }
});