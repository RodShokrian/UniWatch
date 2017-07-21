class University < ApplicationRecord
  has_many :follows,
    primary_key: :id,
    foreign_key: :uniId,
    class_name: "FollowedUniversity"

  has_many :followers, through: :follows, source: :user

end
