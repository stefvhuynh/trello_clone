TrelloClone.Views.ListNew = Backbone.View.extend({
  template: JST['lists/new'],
  
  events: {
    'submit form': 'submit'
  },
  
  initialize: function(options) {
    this.board = options.board;
  },
  
  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  
  submit: function(event) {
    event.preventDefault();
    var listData = $(event.currentTarget).serializeJSON().list;
    listData.ord = board.lists().last().ord + 1;
    console.log(listData);
  }
});