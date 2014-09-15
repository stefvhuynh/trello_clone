Trello Clone
============

To practice my BackboneJS skills, I decided to clone [Trello](http://trello.com),
an organization app in the browser. You can find the clone 
[here](http://trello-clone.stefanhuynh.com). Users can add boards. These boards 
contain lists, which contain cards. These cards contain checklists, and the checklists 
contain checklist items.

Each checklist has a completion bar, which represents how many of the items the user
has completed. The completion bar is updated in real time depending on how many items
are checked off.

Users can drag and drop any of these elements (lists, cards, etc.) to reorder them. 
This was done using [JQueryUI](http://jqueryui.com). Whenever the user drags and drops 
an element, an AJAX request is sent to the server to update the current ordering of the 
elements.

Todo: Enable board sharing with other users
