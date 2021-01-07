class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :genre, :playlist_id
end
