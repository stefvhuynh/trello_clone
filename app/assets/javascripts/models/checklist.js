TrelloClone.Models.Checklist = Backbone.Model.extend({
  urlRoot: '/api/checklists',
  
  toJSON: function(response) {
    return { checklist: _.clone(this.attributes) };
  }
});