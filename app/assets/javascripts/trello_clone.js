window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    TrelloClone.currentUser = new TrelloClone.Models.User({
      id: window.currentUserId
    });
    
    TrelloClone.currentUser.fetch({
      success: function(model, response) {
        new TrelloClone.Routers.AppRouter();
        Backbone.history.start();
      }
    });
  }
};


