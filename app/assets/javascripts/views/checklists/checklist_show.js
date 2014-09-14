TrelloClone.Views.ChecklistShow = Backbone.View.extend({
  template: JST['checklists/show'],
  tagName: 'li',
  className: 'checklist',
  
  render: function() {
    var content = this.template({ checklist: this.model });
    this.$el.html(content);
    return this;
  }
});