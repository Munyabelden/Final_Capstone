# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# db/seeds.rb
doctors_data = [
    {
      name: 'Dr. John Doe',
      specialization: 'Cardiologist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      experience: 10,
      rate: 150,
      image: 'john_doe.jpg'
    },
    {
      name: 'Dr. Jane Smith',
      specialization: 'Dermatologist',
      bio: 'Praesent in velit dictum, consequat justo eu, laoreet felis.',
      experience: 8,
      rate: 120,
      image: 'jane_smith.jpg'
    },
    
  ]
  
  doctors_data.each do |doctor_data|
    Doctor.create(doctor_data)
  end
  