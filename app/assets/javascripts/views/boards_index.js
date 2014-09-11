TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],
  
  initialize: function() {
    
  };
  
  render: function() {
    var content = this.template({ boards: this.collection });
    this.$el.html(content);
    return this;
  }
});