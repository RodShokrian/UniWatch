class FollowedUniversity < ApplicationRecord
  validates :followerId, uniqueness: {scope: :uniId}

  belongs_to :university
  belongs_to :user


end
