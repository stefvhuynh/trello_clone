TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST['cards/show'],
  tagName: 'li',
  className: 'card',
  
  events: {
    'click .show-modal': 'showModal',
    'click .hide-modal': 'hideModal',
    'click .new-checklist-button': 'showNewChecklistForm',
    'click .new-checklist-form .exit': 'hideNewChecklistForm',
    'submit .new-checklist-form': 'submitNewChecklist'
  },
  
  initialize: function() {
    this.subviews = [];
    this.listenTo(this.model, 'sync change', this.render);
    this.listenTo(this.model.checklists(), 'add remove', this.renderChecklists);
  },
  
  render: function() {
    var content = this.template({ card: this.model });
    this.$el.html(content);
    this.$el.attr('id', 'k' + this.model.id);
    this.renderChecklists();
    return this;
  },
  
  renderChecklists: function() {
    var that = this;
    this.$('.checklists-list').html('');
    
    this.model.checklists().each(function(checklist) {
      that.$('.checklists-list').append(that.renderChecklist(checklist));
    });
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
  
  showNewChecklistForm: function(event) {
    event.preventDefault();
    this.$('.new-checklist-form').removeClass('display-off');
  },
  
  hideNewChecklistForm: function(event) {
    event.preventDefault();
    this.$('.new-checklist-form').addClass('display-off');
  },
  
  submitNewChecklist: function(event) {
    event.preventDefault();
    var checklistData = $(event.currentTarget).serializeJSON().checklist;
    
    if (this.model.checklists().isEmpty()) {
      checklistData.order = 1;
    } else {
      checklistData.order = this.model.checklists().last().get('order') + 1;
    }
    
    checklistData.card_id = this.model.id;
    this.model.checklists().create(checklistData, { wait: true });
    this.$('.new-checklist-form').addClass('display-off');
  },
  
  remove: function() {
    this.subviews.forEach(function(subview) {
      subview.remove();
    });
    
    Backbone.View.prototype.remove.call(this);
  }
});



