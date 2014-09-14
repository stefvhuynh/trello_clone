window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utilities: {},
  
  initialize: function() {
    TrelloClone.currentUser = new TrelloClone.Models.User({
      id: window.currentUserId
    });

    var header = new TrelloClone.Views.HeaderShow();
    $('#site-header').html(header.render().$el);

    TrelloClone.currentUser.fetch({
      success: function(model, response) {
        new TrelloClone.Routers.AppRouter({ $rootEl: $('#content') });
        Backbone.history.start();
      }
    });
  }
};