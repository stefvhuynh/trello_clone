TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],
  
  events: {
    'click .new-list-button': 'showNewListForm',
    'submit .new-list-form': 'submitNewList'
  },

  initialize: function() {
    this.listenTo(this.model, 'sync change', this.render);
    this.listenTo(this.model.lists(), 'sync add remove change', this.render);
  },

  render: function() {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    return this;
  },
  
  showNewListForm: function(event) {
    event.preventDefault();
    this.$('.new-list-button').addClass('display-off');
    this.$('.new-list-form').removeClass('display-off');
  },

  submitNewList: function(event) {
    event.preventDefault();
    
    var listData = $(event.currentTarget).serializeJSON().list;
    listData.order = this.model.lists().last().get('order') + 1;
    listData.board_id = this.model.id;
    this.model.lists().create(listData);
  }
});


