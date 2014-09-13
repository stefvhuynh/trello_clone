TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST['lists/show'],
  tagName: 'li',
  
  events: {
    'click .new-card-button': 'showNewCardForm',
    'submit .new-card-form': 'submitNewCard'
  },
  
  initialize: function() {
    this.listenTo(this.model.cards(), 'sync add remove', this.render);
  },
  
  render: function() {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    return this;
  },
  
  showNewCardForm: function(event) {
    event.preventDefault();
    this.$('.new-card-button').addClass('display-off');
    this.$('.new-card-form').removeClass('display-off');
  },
  
  submitNewCard: function(event) {
    event.preventDefault();
    
    var cardData = $(event.currentTarget).serializeJSON().card;
    cardData.order = this.model.cards().last().get('order') + 1;
    cardData.list_id = this.model.id;
    this.model.cards().create(cardData);
  }
});


