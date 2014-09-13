TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST['lists/show'],
  tagName: 'li',
  
  events: {
    'click .new-card-button': 'showNewCardForm',
    'submit .new-card-form': 'submitNewCard'
  },
  
  initialize: function() {
    this.subviews = [];
    this.listenTo(this.model.cards(), 'sync add remove', this.render);
  },
  
  render: function() {
    var that = this;
    var content = this.template({ list: this.model });
    this.$el.html(content);
    
    this.model.cards().each(function(card) {
      that.$('.cards-list').append(that.renderCard(card));
    });
    
    return this;
  },
  
  renderCard: function(card) {
    var subview = new TrelloClone.Views.CardShow({ model: card });
    this.subviews.push(subview);
    return subview.render().$el;
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
  },
  
  remove: function() {
    this.subviews.each(function(subview) {
      subview.remove();
    });
    
    Backbone.View.prototype.remove.call(this);
  }
});


