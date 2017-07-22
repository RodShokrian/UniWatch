class FollowedUniversity < ApplicationRecord
  validates :followerId, uniqueness: {scope: :uniId}

  belongs_to :university,
    primary_key: :id,
    foreign_key: :uniId,
    class_name: :University
  belongs_to :user,
    primary_key: :id,
    foreign_key: :followerId,
    class_name: :User

end
