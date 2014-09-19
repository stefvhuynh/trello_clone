TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST['cards/show'],
  tagName: 'li',
  className: 'card',
  
  events: {
    'click .show-modal': 'showModal',
    'click .dropdown-button': 'showDropdown',
    'click .dropdown .exit': 'hideDropdown',
    'click .delete-card': 'deleteCard'
  },
  
  render: function() {
    var content = this.template({ card: this.model });
    this.$el.html(content);
    this.$el.attr('id', 'k' + this.model.id);
    return this;
  },
  
  showModal: function(event) {
    if (event) event.preventDefault();
    var modalView = new TrelloClone.Views.CardModalShow({ model: this.model });
    $('body').prepend(modalView.render().$el);
  },
  
  showDropdown: function(event) {
    event.preventDefault();
    event.stopPropagation();
    this.$('.dropdown').removeClass('display-off');
  },
  
  hideDropdown: function(event) {
    event.preventDefault();
    this.$('.dropdown').addClass('display-off');
  },
  
  deleteCard: function(event) {
    event.preventDefault();
    this.model.destroy();
  }
});



