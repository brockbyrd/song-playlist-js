# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Playlist.create(name: 'Good Songs')
Playlist.create(name: 'Dance Songs')
Playlist.create(name: "Rock \'n Roll!!")

Song.create(name: 'Good Life', artist: 'Kanye West', genre: 'Rap', playlist_id: 1)
Song.create(name: 'Bartender', artist: 'T-Pain', genre: 'Hip-Hop', playlist_id: 1)
Song.create(name: 'Tampa', artist: 'Cicoeee P', genre: 'Rap', playlist_id: 1)

Song.create(name: 'One Dance', artist: 'Drake', genre: 'Hip-Hop', playlist_id: 2)
Song.create(name: 'September', artist: 'Earth, Wind, & Fire', genre: 'Disco', playlist_id: 2)
Song.create(name: "Don\'t Stop \'til You Get Enough", artist: "Michael Jackson", genre: 'Pop', playlist_id: 2)

Song.create(name: "Sweet Child O\' Mine", artist: "Guns N\' Roses", genre: "Classic Rock", playlist_id: 3)
Song.create(name: "Sweet Home Alabama", artist: "Lynyrd Skynrd", genre: "Classic Rock", playlist_id: 3)
Song.create(name: "Blitzkrieg Bop", artist: "Ramones", genre: "Punk Rock", playlist_id: 3)
