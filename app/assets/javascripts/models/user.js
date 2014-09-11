TrelloClone.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',
  
  boards: function() {
    if (!this._boards) {
      this._boards = new TrelloClone.Collections.Boards();
    }

    return this._boards;
  },
  
  parse: function(response) {
    if (response.boards) {
      this.boards().set(response.boards, { parse: true });
      delete response.boards;
    }
    
    return response;
  }
  
});