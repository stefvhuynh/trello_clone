TrelloClone.Views.ChecklistShow = Backbone.View.extend({
  template: JST['checklists/show'],
  tagName: 'li',
  className: 'checklist',
  
  events: {
    'click .new-item-button': 'showNewItemForm',
    'click .new-item .exit': 'hideNewItemForm',
    'submit .new-item-form': 'submitNewItem'
  },
  
  initialize: function() {
    this.subviews = [];
    this.listenTo(this.model, 'sync change', this.render);
    this.listenTo(this.model.items(), 'sync add remove', this.render);
  },
  
  render: function() {
    var that = this;
    var content = this.template({ checklist: this.model });
    this.$el.html(content);
    this.$el.attr('id', 'h' + this.model.id);
    
    this.model.items().each(function(item) {
      that.$('.items-list').append(that.renderItem(item));
    });
    
    TrelloClone.Utilities.Order.bindSortable(
      this.$('.items-list'),
      this.model.items()
    );
    
    return this;
  },
  
  renderItem: function(item) {
    var subview = new TrelloClone.Views.ItemShow({ model: item });
    this.subviews.push(subview);
    return subview.render().$el;
  },
  
  showNewItemForm: function(event) {
    event.preventDefault();
    this.$('.new-item-button').addClass('display-off');
    this.$('.new-item-form').removeClass('display-off');
  },
  
  hideNewItemForm: function(event) {
    event.preventDefault();
    this.$('.new-item-button').removeClass('display-off');
    this.$('.new-item-form').addClass('display-off');
  },
  
  submitNewItem: function(event) {
    event.preventDefault();
    var itemData = $(event.currentTarget).serializeJSON().item;
    
    if (this.model.items().isEmpty()) {
      itemData.order = 1;
    } else {
      itemData.order = this.model.items().last().get('order') + 1;
    }
    
    itemData.checklist_id = this.model.id;
    itemData.completed = false;
    this.model.items().create(itemData, { wait: true });
  },
  
  remove: function() {
    this.subviews.forEach(function(subview) {
      subview.remove();
    });
    
    Backbone.View.prototype.remove.call(this);
  }
});