TrelloClone.Utilities.Order = {
  
  bindSortable: function($list, collection) {    
    $list.sortable({
      activate: function(event, ui) {
        $(ui.item).addClass('sortable-active');
      },
      
      deactivate: function(event, ui) {
        $(ui.item).removeClass('sortable-active');
      },
      
      update: function(event, ui) {
        var newOrder = $(this).sortable('toArray').map(function(order) {
          return parseInt(order.slice(1));
        });
        
        for (var i = 0; i < newOrder.length; i++) {
          var model = collection.get(newOrder[i]);
          model.save({ order: i });
        }
        
        collection.sort();
      }
    });
  }
  
};