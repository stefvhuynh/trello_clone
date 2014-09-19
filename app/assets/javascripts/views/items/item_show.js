TrelloClone.Views.ItemShow = Backbone.View.extend({
  template: JST['items/show'],
  tagName: 'li',
  className: 'item clear-fix',
  
  events: {
    'click .item-checkbox': 'updateItemCompleted',
    'click .delete-item': 'deleteItem'
  },
  
  render: function() {
    var content = this.template({ item: this.model });
    this.$el.html(content);
    this.$el.attr('id', 'i' + this.model.id);
    this.$('.item-checkbox').prop('checked', this.model.get('completed'));
    
    if (this.model.get('completed')) {
      this.$('.item-name').addClass('completed-item');
    }
    
    return this;
  },
  
  updateItemCompleted: function(event) {
    this.model.save({ completed: event.currentTarget.checked }, { 
      patch: true 
    });
  },
  
  deleteItem: function(event) {
    event.preventDefault();
    this.model.destroy();
  }
});