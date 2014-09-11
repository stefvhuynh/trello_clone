TrelloClone.Views.HeaderShow = Backbone.View.extend({
  template: JST['pages/header'],
  tagName: 'nav',
  className: 'clear-fix',

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});