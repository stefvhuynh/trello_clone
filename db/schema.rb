# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140914175624) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boards", force: true do |t|
    t.string   "name",       null: false
    t.boolean  "starred",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id",    null: false
  end

  add_index "boards", ["name"], name: "index_boards_on_name", using: :btree
  add_index "boards", ["user_id"], name: "index_boards_on_user_id", using: :btree

  create_table "cards", force: true do |t|
    t.string   "name",        null: false
    t.integer  "order",       null: false
    t.integer  "list_id",     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "description"
  end

  add_index "cards", ["name"], name: "index_cards_on_name", using: :btree

  create_table "checklists", force: true do |t|
    t.string   "name",       null: false
    t.integer  "order",      null: false
    t.integer  "card_id",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "checklists", ["name"], name: "index_checklists_on_name", using: :btree

  create_table "items", force: true do |t|
    t.string   "name",         null: false
    t.boolean  "completed",    null: false
    t.integer  "order",        null: false
    t.integer  "checklist_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "items", ["name"], name: "index_items_on_name", using: :btree

  create_table "lists", force: true do |t|
    t.string   "name",       null: false
    t.integer  "order",      null: false
    t.integer  "board_id",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "lists", ["board_id"], name: "index_lists_on_board_id", using: :btree
  add_index "lists", ["name"], name: "index_lists_on_name", using: :btree

  create_table "users", force: true do |t|
    t.string   "name",            null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["name"], name: "index_users_on_name", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
