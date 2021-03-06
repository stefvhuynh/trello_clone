TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],
  className: 'board-show',
  
  events: {
    'click .new-list-button': 'showNewListForm',
    'click .new-list .exit': 'hideNewListForm',
    'submit .new-list-form': 'submitNewList'
  },

  initialize: function() {
    this.subviews = [];
    this.listenTo(this.model, 'sync change', this.render);
    this.listenTo(this.model.lists(), 'add remove', this.render);
  },

  render: function() {
    var that = this;
    var content = this.template({ board: this.model });
    this.$el.html(content);
    
    this.model.lists().each(function(list) {
      that.$('.lists-list').append(that.renderList(list));
    });
    
    TrelloClone.Utilities.Order.bindSortable(
      this.$('.lists-list'), 
      this.model.lists()
    );
    
    $('body').removeClass('home-page');
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
  
  hideNewListForm: function(event) {
    event.preventDefault();
    this.$('.new-list-button').removeClass('display-off');
    this.$('.new-list-form').addClass('display-off');
  },

  submitNewList: function(event) {
    event.preventDefault();
    
    var listData = $(event.currentTarget).serializeJSON().list;
    
    if (this.model.lists().isEmpty()) {
      listData.order = 1;
    } else {
      listData.order = this.model.lists().last().get('order') + 1;
    }
    
    listData.board_id = this.model.id;
    this.model.lists().create(listData, { wait: true });
  },
  
  remove: function() {
    this.subviews.forEach(function(subview) { 
      subview.remove(); 
    });
    
    Backbone.View.prototype.remove.call(this);
  }
});
