TrelloClone.Views.BoardNew = Backbone.View.extend({
  template: JST['boards/new'],
  className: 'board-new',

  events: {

  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});