TrelloClone.Views.ItemShow = Backbone.View.extend({
  template: JST['items/show'],
  tagName: 'li',
  className: 'item',
  
  events: {
    'click .item-checkbox': 'updateItemCompleted'
  },
  
  render: function() {
    var content = this.template({ item: this.model });
    this.$el.html(content);
    this.$el.attr('id', 'i' + this.model.id);
    return this;
  },
  
  updateItemCompleted: function(event) {
    this.model.save({ completed: event.currentTarget.checked }, { 
      patch: true 
    });
  }
});