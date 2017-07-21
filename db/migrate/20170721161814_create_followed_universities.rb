class CreateFollowedUniversities < ActiveRecord::Migration[5.0]
  def change
    create_table :followed_universities do |t|
      t.integer :uniId
      t.integer :followerId

      t.timestamps
    end
  end
end
