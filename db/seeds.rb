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
  { name: 'First Board', starred: false, user_id: 1 },
  { name: 'Second Board', starred: false, user_id: 1 },
  { name: 'Linus Board', starred: false, user_id: 2 }
])

List.create([
  { name: 'First List', order: 0, board_id: 1 },
  { name: 'Second List', order: 1, board_id: 1 },
  { name: 'First List', order: 0, board_id: 2 },
  { name: 'Linus List', order: 0, board_id: 3 },
])

Card.create([
  { name: 'First Card', order: 0, list_id: 1 },
  { name: 'Second Card', order: 1, list_id: 1 },
  { name: 'First Card', order: 0, list_id: 2 },
  { name: 'First Card', order: 0, list_id: 3 },
  { name: 'Second Card', order: 1, list_id: 3 },
  { name: 'Third Card', order: 2, list_id: 3 },
  { name: 'First Card', order: 0, list_id: 4 },
])

Checklist.create([
  { name: 'First Checklist', order: 0, card_id: 1 },
  { name: 'Second Checklist', order: 1, card_id: 1 },
  { name: 'First Checklist', order: 0, card_id: 2 },
  { name: 'First Checklist', order: 0, card_id: 3 },
  { name: 'First Checklist', order: 0, card_id: 4 }
])

Item.create([
  { name: 'First Item', order: 0, completed: false, checklist_id: 1 },
  { name: 'Second Item', order: 1, completed: false, checklist_id: 1 },
  { name: 'First Item', order: 0, completed: false, checklist_id: 2 },
  { name: 'First Item', order: 0, completed: false, checklist_id: 3 },
  { name: 'First Item', order: 0, completed: false, checklist_id: 4 }
])

