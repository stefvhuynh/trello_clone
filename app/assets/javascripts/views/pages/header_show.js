TrelloClone.Views.HeaderShow = Backbone.View.extend({
  template: JST['pages/header'],
  tagName: 'nav',
  className: 'header-nav clear-fix',

  events: {
    'click #new-board': 'renderBoardNew',
    'click #show-profile': 'renderProfileShow'
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  renderBoardNew: function(event) {
    event.preventDefault();
    var view = new TrelloClone.Views.BoardNew();
    this.$('.right-dropdown').html(view.render().$el)
      .removeClass('display-off');
  },
  
  renderProfileShow: function(event) {
    event.preventDefault();
    var view = new TrelloClone.Views.ProfileShow();
    this.$('.right-dropdown').html(view.render().$el)
      .removeClass('display-off');
  }
});