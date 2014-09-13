TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],
  
  events: {
    // 'click .new-list': 'renderListNew'
    'submit .new-list-form': 'submitNewList'
  },

  initialize: function() {
    this.listenTo(this.model, 'sync change', this.render);
  },

  render: function() {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    return this;
  },
  
  submitNewList: function(event) {
    event.preventDefault();
    var listData = $(event.currentTarget).serializeJSON().list;
    listData.order = this.model.lists().last().get('order') + 1;
    listData.board_id = this.model.id;
    this.model.lists().create(listData);
  }
  
  // renderListNew: function(event) {
  //   event.preventDefault();
  //
  //   var view = new TrelloClone.Views.ListNew({ board: this.model });
  //   this.$('.new-list').html(view.render().$el);
  // }
});