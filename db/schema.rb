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

ActiveRecord::Schema.define(version: 20170718205926) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "universities", force: :cascade do |t|
    t.integer  "cost_tuition_out_of_state"
    t.integer  "cost_attendance_academic_year"
    t.float    "location_lon"
    t.string   "school_name"
    t.integer  "school_minority_serving_historically_black"
    t.string   "school_city"
    t.float    "admissions_sat_scores_average_overall"
    t.integer  "cost_tuition_in_state"
    t.float    "aid_median_debt_completers_overall"
    t.integer  "school_zip"
    t.float    "admissions_admission_rate_overall"
    t.float    "location_lat"
    t.string   "school_school_url"
    t.string   "school_price_calculator_url"
    t.string   "school_state"
    t.integer  "student_enrollment_all"
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
    t.index ["admissions_admission_rate_overall"], name: "index_universities_on_admissions_admission_rate_overall", using: :btree
    t.index ["admissions_sat_scores_average_overall"], name: "index_universities_on_admissions_sat_scores_average_overall", using: :btree
    t.index ["aid_median_debt_completers_overall"], name: "index_universities_on_aid_median_debt_completers_overall", using: :btree
    t.index ["cost_attendance_academic_year"], name: "index_universities_on_cost_attendance_academic_year", using: :btree
    t.index ["cost_tuition_in_state"], name: "index_universities_on_cost_tuition_in_state", using: :btree
    t.index ["cost_tuition_out_of_state"], name: "index_universities_on_cost_tuition_out_of_state", using: :btree
    t.index ["school_city"], name: "index_universities_on_school_city", using: :btree
    t.index ["school_name"], name: "index_universities_on_school_name", using: :btree
    t.index ["school_school_url"], name: "index_universities_on_school_school_url", using: :btree
    t.index ["school_state"], name: "index_universities_on_school_state", using: :btree
    t.index ["school_zip"], name: "index_universities_on_school_zip", using: :btree
    t.index ["student_enrollment_all"], name: "index_universities_on_student_enrollment_all", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "email"
    t.string   "password_digest"
    t.string   "session_token"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["username", "email", "session_token"], name: "index_users_on_username_and_email_and_session_token", unique: true, using: :btree
  end

end
