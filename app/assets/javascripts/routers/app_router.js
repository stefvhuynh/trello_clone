TrelloClone.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  }, 
  
  routes: {
    '': 'boardsIndex'
  },
  
  boardsIndex: function() {
    var view = new TrelloClone.Views.BoardsIndex({ 
      collection: TrelloClone.currentUser.boards() 
    });
    
    this._swapView(view);
  },
  
  _swapView: function(view) {
    this.currentView && this.currentview.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
  
});