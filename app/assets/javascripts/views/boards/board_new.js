TrelloClone.Views.BoardNew = Backbone.View.extend({
  template: JST['boards/new'],
  className: 'board-new',

  events: {
    'submit .board-new-form': 'submit'
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var boardData = $(event.currentTarget).serializeJSON().board;
    TrelloClone.currentUser.boards().create(boardData);
  }
});