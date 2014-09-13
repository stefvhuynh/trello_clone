TrelloClone.Views.BoardNew = Backbone.View.extend({
  template: JST['boards/new'],
  className: 'board-new',

  events: {
    'submit .board-new-form': 'submit',
    'click .exit': 'remove'
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    
    var boardData = $(event.currentTarget).serializeJSON().board;
    TrelloClone.currentUser.boards().create(boardData, {
      success: function(model, response) {
        Backbone.history.navigate('boards/' + model.id, { trigger: true });
      }
    });
    
    this.remove();
  },
  
  remove: function() {
    $('.right-dropdown').addClass('display-off');
    Backbone.View.prototype.remove.call(this);
  }
});



