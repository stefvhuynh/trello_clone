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
    
    this.$('.lists-list').sortable({
      activate: function(event, ui) {
        ui.item.addClass('sortable-active');
      },
      deactivate: function(event, ui) {
        ui.item.removeClass('sortable-active');
      },
      update: function(event, ui) {
        var newOrder = $(this).sortable('toArray').map(function(order) {
          return parseInt(order.slice(1));
        });
        
        for (var i = 0; i < newOrder.length; i++) {
          var list = that.model.lists().get(newOrder[i]);
          list.save({ order: i });
        }
        
        that.model.lists().sort();
      }
    });
    
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
    this.model.lists().create(listData);
  },
  
  remove: function() {
    this.subviews.forEach(function(subview) { 
      subview.remove(); 
    });
    
    Backbone.View.prototype.remove.call(this);
  }
});


