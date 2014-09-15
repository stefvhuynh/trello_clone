# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create([
  { name: 'Charlie Brown',
    email: 'charlie@brown.com',
    password: '123456'
  },

  { name: 'Linus Van Pelt',
    email: 'linus@vanpelt.com',
    password: '123456'
  }
])

Board.create([
  { name: 'School', starred: false, user_id: 1 },
  { name: 'Home', starred: false, user_id: 1 },
  { name: 'School', starred: false, user_id: 2 }
])

List.create([
  { name: 'Football', order: 0, board_id: 1 },
  { name: 'Homework', order: 1, board_id: 1 },
  { name: 'Chores', order: 0, board_id: 2 },
  { name: 'Homework', order: 0, board_id: 3 },
])

Card.create([
  { name: 'Kick football', order: 0, list_id: 1 },
  { name: 'Math', order: 0, list_id: 2 },
  { name: 'Reading', order: 1, list_id: 2 },
  { name: 'Snoopy', order: 1, list_id: 3, description: 'My best friend!'},
  { name: 'Floors', order: 2, list_id: 3 },
  { name: 'Math', order: 0, list_id: 4 },
])

Checklist.create([
  { name: 'Just kick it!', order: 0, card_id: 1 },
  { name: 'Play with Snoopy', order: 0, card_id: 4 },
  { name: 'Feed Snoopy', order: 1, card_id: 4 }
])

Item.create([
  { name: 'Run', order: 0, completed: false, checklist_id: 1 },
  { name: 'Kick', order: 1, completed: false, checklist_id: 1 },
  { name: 'Go on adventures', order: 0, completed: false, checklist_id: 2 },
  { name: 'Retrieve food', order: 0, completed: false, checklist_id: 3 },
  { name: 'Put food in bowl', order: 1, completed: false, checklist_id: 3 }
])

