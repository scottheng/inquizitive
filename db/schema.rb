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

ActiveRecord::Schema.define(version: 20170317175253) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.string   "term",                         null: false
    t.string   "definition",                   null: false
    t.integer  "study_set_id",                 null: false
    t.boolean  "starred",      default: false, null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.index ["study_set_id"], name: "index_cards_on_study_set_id", using: :btree
  end

  create_table "study_sets", force: :cascade do |t|
    t.string   "title",                                 null: false
    t.integer  "user_id",                               null: false
    t.string   "visitable_option", default: "everyone", null: false
    t.string   "editable_option",  default: "only me",  null: false
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
    t.string   "description"
    t.index ["user_id"], name: "index_study_sets_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                            null: false
    t.string   "email",                               null: false
    t.string   "password_digest",                     null: false
    t.string   "session_token",                       null: false
    t.string   "prof_pic_url"
    t.string   "user_type",       default: "STUDENT"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
