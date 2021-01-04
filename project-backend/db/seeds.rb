# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Playlist.create(name: 'Good Songs', description: 'Songs to listen to for a good time!')

Song.create(name: 'Good Life', artist: 'Kanye West', genre: 'Rap', playlist_id: 1)
Song.create(name: 'Bartender', artist: 'T-Pain', genre: 'Hip-Hop', playlist_id: 1)
Song.create(name: 'Tampa', artist: 'Cicoeee P', genre: 'Rap', playlist_id: 1)