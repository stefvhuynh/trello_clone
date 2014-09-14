TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST['cards/show'],
  tagName: 'li',
  className: 'card',
  
  events: {
    'click .show-modal': 'showModal',
    'click .hide-modal': 'hideModal'
  },
  
  initialize: function() {
    this.subviews = [];
    this.listenTo(this.model, 'sync change', this.render);
    this.listenTo(this.model.checklists(), 'add remove', this.render);
  },
  
  render: function() {
    var that = this;
    var content = this.template({ card: this.model });
    this.$el.html(content);
    this.$el.attr('id', 'k' + this.model.get('order'));
    
    this.model.checklists().each(function(checklist) {
      that.$('.checklists-list').append(that.renderChecklist(checklist));
    });
    
    return this;
  },
  
  renderChecklist: function(checklist) {
    var subview = new TrelloClone.Views.ChecklistShow({ model: checklist });
    this.subviews.push(subview);
    return subview.render().$el;
  },
  
  showModal: function(event) {
    event.preventDefault();
    this.$('.card-modal').removeClass('display-off');
  },
  
  hideModal: function(event) {
    event.preventDefault();
    this.$('.card-modal').addClass('display-off');
  },
  
  remove: function() {
    this.subviews.forEach(function(subview) {
      subview.remove();
    });
    
    Backbone.View.prototype.remove.call(this);
  }
});



