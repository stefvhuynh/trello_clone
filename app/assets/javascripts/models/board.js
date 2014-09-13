TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: '/api/boards',

  lists: function() {
    if (!this._lists) {
      this._lists = new TrelloClone.Collections.Lists([], { board: this });
    }

    return this._lists;
  },
  
  toJSON: function() {
    return { board: _.clone(this.attributes) };
  },

  parse: function(response) {
    if (response.lists) {
      this.lists().set(response.lists, { parse: true });
      delete response.lists;
    }

    return response;
  }
});