class AddImgToUniversities < ActiveRecord::Migration[5.0]
  def change
    add_column :universities, :img_url, :string
  end
end
