TrelloClone.Views.CardModalShow = Backbone.View.extend({
  template: JST['cards/modal'],
  className: 'card-modal modal',
  
  events: {
    'click .hide-modal': 'remove',
    'click .edit-description': 'showEditDescriptionForm',
    'click .edit-description-form .exit': 'hideEditDescriptionForm',
    'submit .edit-description-form': 'updateCardDescription',
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
    this.renderChecklists();
    
    TrelloClone.Utilities.Order.bindSortable(
      this.$('.checklists-list'),
      this.model.checklists()
    );
    
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
  
  showEditDescriptionForm: function(event) {
    event.preventDefault();
    this.$('.description-text').addClass('display-off');
    this.$('.edit-description-form').removeClass('display-off');
  },
  
  hideEditDescriptionForm: function(event) {
    event.preventDefault();
    this.$('.description-text').removeClass('display-off');
    this.$('.edit-description-form').addClass('display-off');
  },
  
  updateCardDescription: function(event) {
    event.preventDefault();
    var cardData = $(event.currentTarget).serializeJSON().card;
    this.model.save(cardData, { patch: true });
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