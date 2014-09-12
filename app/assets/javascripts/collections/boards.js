TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: '/api/boards',
  model: TrelloClone.Models.Board,
  comparator: 'name',

  getOrFetch: function(id) {
    var board = this.get(id);

    if (!board) {
      board = new this.model({ id: id });
      board.fetch({
        success: function(model, response) {
          that.add(model);
        }.bind(this),

        error: function(model, response) {
          // Will add error handling (primarily, access forbidden)
          console.log(response);
        }
      });
    } else {
      board.fetch();
    }

    return board;
  }
});