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
    password: '123456' },
  
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