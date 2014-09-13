TrelloClone.Collections.Checklists = Backbone.Collection.extend({
  url: '/api/checklists',
  model: TrelloClone.Models.Checklist
});