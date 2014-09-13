TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],
  
  events: {
    'click .new-list-button': 'showNewListForm',
    'submit .new-list-form': 'submitNewList'
  },

  initialize: function() {
    this.subviews = [];
    this.listenTo(this.model, 'sync change', this.render);
    this.listenTo(this.model.lists(), 'add remove change', this.render);
  },

  render: function() {
    var that = this;
    var content = this.template({ board: this.model });
    this.$el.html(content);
    
    this.model.lists().each(function(list) {
      that.$('.lists-list').append(that.renderList(list));
    });
    
    return this;
  },
  
  renderList: function(list) {
    var subview = new TrelloClone.Views.ListShow({ model: list });
    this.subviews.push(subview);
    return subview.render().$el;
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
  },
  
  remove: function() {
    this.subviews.each(function(subview) { 
      subview.remove(); 
    });
    
    Backbone.View.prototype.remove.call(this);
  }
});


