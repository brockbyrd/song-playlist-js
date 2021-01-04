class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :genre
end
