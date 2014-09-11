TrelloClone.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'boardsIndex',
    'boards/:id': 'boardShow'
  },

  boardsIndex: function() {
    var view = new TrelloClone.Views.BoardsIndex({
      collection: TrelloClone.currentUser.boards()
    });

    this._swapView(view);
  },

  boardShow: function(id) {
    var board = TrelloClone.currentUser.boards().get(id);
    var view = new TrelloClone.Views.BoardShow({ model: board });
    this._swapView(view);
  },

  _swapView: function(view) {
    this.currentView && this.currentview.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});