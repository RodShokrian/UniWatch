class CreateUniversities < ActiveRecord::Migration[5.0]
  def change
    create_table :universities do |t|
      t.integer :cost_tuition_out_of_state
      t.integer :cost_attendance_academic_year
      t.float :location_lon
      t.string :school_name
      t.integer :school_minority_serving_historically_black
      t.string :school_city
      t.float :admissions_sat_scores_average_overall
      t.integer :cost_tuition_in_state
      t.float :aid_median_debt_completers_overall
      t.integer :school_zip
      t.float :admissions_admission_rate_overall
      t.float :location_lat
      t.string :school_school_url
      t.string :school_price_calculator_url
      t.string :school_state
      t.integer :student_enrollment_all

      t.timestamps
    end
    add_index :universities, :cost_tuition_out_of_state
    add_index :universities, :cost_attendance_academic_year
    add_index :universities, :school_name
    add_index :universities, :school_city
    add_index :universities, :admissions_sat_scores_average_overall
    add_index :universities, :cost_tuition_in_state
    add_index :universities, :aid_median_debt_completers_overall
    add_index :universities, :school_zip
    add_index :universities, :admissions_admission_rate_overall
    add_index :universities, :school_school_url
    add_index :universities, :school_state
    add_index :universities, :student_enrollment_all
  end
end
