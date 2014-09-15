TrelloClone.Views.ProfileShow = Backbone.View.extend({
  template: JST['pages/profile'],
  className: 'profile-show',
  
  events: {
    'click .exit': 'remove',
    'click .log-out-button': 'logOut'
  },
  
  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  
  logOut: function(event) {
    event.preventDefault();
    
    $.ajax({
      type: 'DELETE',
      url: '/session',
      success: function() {
        Backbone.history.navigate('');
        window.location.reload();
      }
    });
  },
  
  remove: function() {
    $('.right-dropdown').addClass('display-off');
    Backbone.View.prototype.remove.call(this);
  }
});


