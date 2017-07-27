class AddActScoresToUniversities < ActiveRecord::Migration[5.0]
  def change
    add_column :universities, :admissions_act_scores_midpoint_cumulative, :integer
    add_column :universities, :admissions_act_scores_midpoint_english, :integer
    add_column :universities, :admissions_act_scores_midpoint_math, :integer
    add_column :universities, :admissions_act_scores_midpoint_writing, :integer
  end
end
