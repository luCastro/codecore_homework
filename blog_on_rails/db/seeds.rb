# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
PASSWORD = "supersecret"

Comment.destroy_all
Post.destroy_all
User.destroy_all


super_user = User.create(
    first_name: "Jon",
    last_name: "Snow",
    email: "js@winterfell.gov",
    password: PASSWORD,
    # admin: true
)
  
10.times do
first_name = Faker::Name.first_name
last_name = Faker::Name.last_name

User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
    password: PASSWORD
)
end
  
users = User.all

puts Cowsay.say "Created #{users.count} users", :tux


50.times do
    p = Post.create(
        title: Faker::Book.title,
        body: Faker::Lorem.paragraph(2, true),
        user: users.sample
    )

    if p.valid?
        rand(1..5).times do
            Comment.create(
                body: Faker::Lorem.paragraph(2, true),
                post: p,
                user: users.sample
            )
        end
    end
end

posts= Post.all
coments = Comment.all

puts Cowsay.say "Created #{posts.count} posts", :ghostbusters
puts Cowsay.say "Created #{coments.count} posts", :ghostbusters


