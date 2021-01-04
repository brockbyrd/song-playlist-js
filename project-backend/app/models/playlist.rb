class Playlist < ApplicationRecord
    has_many :songs
    accepts_nested_attributes_for :songs
end
