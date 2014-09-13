TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST['cards/show'],
  tagName: 'li',
  
  events: {
    'click .show-modal': 'showModal',
    'click .hide-modal': 'hideModal'
  },
  
  render: function() {
    var content = this.template({ card: this.model });
    this.$el.html(content);
    return this;
  },
  
  showModal: function(event) {
    event.preventDefault();
    this.$('.card-modal').removeClass('display-off');
  },
  
  hideModal: function(event) {
    event.preventDefault();
    this.$('.card-modal').addClass('display-off');
  }
});